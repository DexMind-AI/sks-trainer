#!/usr/bin/env node
// Generate explanations for all SKS questions using Claude Opus
// Usage: ANTHROPIC_API_KEY=... node scripts/generate-explanations.mjs

import fs from 'fs';
import path from 'path';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error('Missing OPENAI_API_KEY');
  process.exit(1);
}

// Read the questions.ts file and extract JSON data
const questionsFile = fs.readFileSync(path.join(import.meta.dirname, '../src/data/questions.ts'), 'utf-8');

// Extract the catalog object - find the export const catalog assignment
const catalogMatch = questionsFile.match(/export const catalog: QuestionCatalog = (\{[\s\S]*?\n\});/);
if (!catalogMatch) {
  console.error('Could not parse catalog from questions.ts');
  process.exit(1);
}

let catalog;
try {
  catalog = JSON.parse(catalogMatch[1]);
} catch (e) {
  // Try eval as fallback (the file is trusted local code)
  catalog = eval(`(${catalogMatch[1]})`);
}

// Collect all questions
const allQuestions = [];
for (const section of catalog.sections) {
  for (const q of section.questions) {
    allQuestions.push({ ...q, sectionName: section.name, sectionId: section.id });
  }
}

console.log(`Found ${allQuestions.length} questions across ${catalog.sections.length} sections`);

// Load existing explanations if any (for resume capability)
const outputPath = path.join(import.meta.dirname, '../src/data/explanations.json');
let explanations = {};
if (fs.existsSync(outputPath)) {
  explanations = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
  console.log(`Loaded ${Object.keys(explanations).length} existing explanations (resuming)`);
}

// Batch questions (send 10 at a time to reduce API calls)
const BATCH_SIZE = 10;
const batches = [];
const questionsToProcess = allQuestions.filter(q => !explanations[q.id]);
console.log(`${questionsToProcess.length} questions need explanations`);

for (let i = 0; i < questionsToProcess.length; i += BATCH_SIZE) {
  batches.push(questionsToProcess.slice(i, i + BATCH_SIZE));
}

async function callGPT4o(questions) {
  const questionsText = questions.map((q, i) => 
    `${i + 1}. [${q.id}] Bereich: ${q.sectionName}\nFrage: ${q.question}\nMusterantwort: ${q.answer}`
  ).join('\n\n');

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      temperature: 0.3,
      max_tokens: 4096,
      response_format: { type: "json_object" },
      messages: [
        {
          role: 'system',
          content: `Du bist ein erfahrener SKS-Ausbilder (Sportküstenschifferschein) mit 20 Jahren Erfahrung. Deine Aufgabe ist es, Prüfungsfragen so zu erklären, dass Prüflinge den fachlichen Hintergrund VERSTEHEN statt nur auswendig zu lernen.

Regeln:
- Maximal 2-3 Sätze pro Erklärung
- Fachlich korrekt aber verständlich
- Verwende nautische Fachbegriffe mit kurzer Erklärung wenn nötig
- Praxisbezug wo möglich ("In der Praxis bedeutet das...")
- Keine Wiederholung der Musterantwort
- Antworte NUR mit JSON: {"FRAGE-ID": "Erklärung...", ...}`
        },
        {
          role: 'user',
          content: `Erkläre die folgenden SKS-Prüfungsfragen:\n\n${questionsText}`
        }
      ]
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  const text = data.choices[0].message.content.trim();
  
  // Parse JSON from response
  let jsonStr = text;
  if (jsonStr.startsWith('```')) {
    jsonStr = jsonStr.replace(/^```json?\n?/, '').replace(/\n?```$/, '');
  }
  
  return JSON.parse(jsonStr);
}

// Process batches with rate limiting
let processed = 0;
const total = questionsToProcess.length;

for (let i = 0; i < batches.length; i++) {
  const batch = batches[i];
  const batchIds = batch.map(q => q.id).join(', ');
  
  try {
    console.log(`Batch ${i + 1}/${batches.length} (${batch.length} questions: ${batchIds})`);
    
    const result = await callGPT4o(batch);
    
    // Merge results
    for (const [id, explanation] of Object.entries(result)) {
      explanations[id] = explanation;
    }
    
    processed += batch.length;
    console.log(`  ✅ Done (${processed}/${total} total)`);
    
    // Save after each batch (crash recovery)
    fs.writeFileSync(outputPath, JSON.stringify(explanations, null, 2));
    
    // Rate limit: wait 1s between batches
    if (i < batches.length - 1) {
      await new Promise(r => setTimeout(r, 1000));
    }
  } catch (err) {
    console.error(`  ❌ Batch ${i + 1} failed: ${err.message}`);
    // Save progress and retry after longer delay
    fs.writeFileSync(outputPath, JSON.stringify(explanations, null, 2));
    await new Promise(r => setTimeout(r, 5000));
    i--; // Retry this batch
  }
}

console.log(`\n✅ Generated ${Object.keys(explanations).length} explanations total`);
console.log(`Saved to ${outputPath}`);

// Verify all questions have explanations
const missing = allQuestions.filter(q => !explanations[q.id]);
if (missing.length > 0) {
  console.log(`⚠️ Missing explanations for ${missing.length} questions: ${missing.map(q => q.id).join(', ')}`);
}
