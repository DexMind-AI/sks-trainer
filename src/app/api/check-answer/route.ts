import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `Du bist ein SKS-Prüfer (Sportküstenschifferschein). Bewerte die Antwort des Prüflings.

Regeln:
- Die Antwort muss NICHT wörtlich mit der Musterantwort übereinstimmen
- Bewertet wird der sachliche Inhalt, die Vollständigkeit und die fachliche Terminologie
- 2 Punkte: Wesentlicher Inhalt vollständig und fachlich korrekt
- 1 Punkt: Teilweise richtig, aber unvollständig oder unpräzise
- 0 Punkte: Falsch oder viel zu unvollständig

Antworte NUR mit validem JSON (kein Markdown, keine Codeblöcke):
{"score": 0, "feedback": "kurze Erklärung auf Deutsch", "missingKeywords": ["fehlende Schlüsselbegriffe"], "matchedKeywords": ["erkannte Schlüsselbegriffe"]}`;

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json(
      { error: 'OPENAI_API_KEY nicht konfiguriert' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { question, userAnswer, modelAnswer, keywords } = body;

    if (!question || !userAnswer || !modelAnswer) {
      return NextResponse.json(
        { error: 'Fehlende Felder: question, userAnswer, modelAnswer' },
        { status: 400 }
      );
    }

    const userPrompt = `Frage: ${question}

Musterantwort: ${modelAnswer}

${keywords && keywords.length > 0 ? `Wichtige Schlüsselbegriffe: ${keywords.join(', ')}` : ''}

Antwort des Prüflings: ${userAnswer}`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.3,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      return NextResponse.json(
        { error: 'KI-Bewertung fehlgeschlagen' },
        { status: 502 }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return NextResponse.json(
        { error: 'Leere Antwort von der KI' },
        { status: 502 }
      );
    }

    // Parse JSON from response, handling potential markdown wrapping
    let parsed;
    try {
      const jsonStr = content.replace(/^```json?\s*/, '').replace(/\s*```$/, '');
      parsed = JSON.parse(jsonStr);
    } catch {
      console.error('Failed to parse AI response:', content);
      return NextResponse.json(
        { error: 'KI-Antwort konnte nicht verarbeitet werden' },
        { status: 502 }
      );
    }

    // Validate and normalize
    const result = {
      score: Math.max(0, Math.min(2, Number(parsed.score) || 0)) as 0 | 1 | 2,
      feedback: String(parsed.feedback || 'Keine Rückmeldung'),
      missingKeywords: Array.isArray(parsed.missingKeywords) ? parsed.missingKeywords.map(String) : [],
      matchedKeywords: Array.isArray(parsed.matchedKeywords) ? parsed.matchedKeywords.map(String) : [],
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('check-answer error:', error);
    return NextResponse.json(
      { error: 'Interner Fehler' },
      { status: 500 }
    );
  }
}
