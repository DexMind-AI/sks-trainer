# ⚓ SKS Trainer

Mobile-first web app for preparing for the German SKS (Sportküstenschifferschein) theory exam with minimum study effort.

## Features

- **638 Official Questions** — Complete ELWIS question catalog parsed and included
- **Spaced Repetition** — Leitner system (5 boxes) to focus on what you don't know
- **Flashcard Mode** — Show question → reveal answer → self-rate (Nochmal/Schwer/Gut/Leicht)
- **Exam Simulation** — 30 questions, 90 min timer, authentic scoring (bestanden/mündlich/nicht bestanden)
- **Progress Dashboard** — Per-section mastery, streak counter, daily goals
- **Question Browser** — Search and browse all questions with answers
- **PWA Support** — Install on your phone, works offline
- **Data Export/Import** — Never lose your progress

## Sections

| Section | Questions |
|---------|-----------|
| Navigation | 118 |
| Schifffahrtsrecht | 110 |
| Wetterkunde | 101 |
| Seemannschaft I (Segel+Motor) | 163 |
| Seemannschaft II (Motor) | 146 |

## Tech Stack

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS v4
- LocalStorage for persistence
- Static site (no backend needed)

## Development

```bash
npm install --include=dev
npm run dev
```

## Build & Deploy

```bash
npm run build
npm start
```

### Docker

```bash
docker build -t sks-trainer .
docker run -p 3000:3000 sks-trainer
```

## Exam Format

- 30 questions: 9 Navigation, 7 Recht, 5 Wetter, 9 Seemannschaft
- Max 60 points (2 per question)
- ≥39 points: **Bestanden**
- 33-38 points: **Mündliche Nachprüfung**
- <33 points: **Nicht bestanden**
- Time limit: 90 minutes
