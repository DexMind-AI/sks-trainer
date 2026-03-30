'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Question } from '@/data/questions';
import { generateRandomExam, getExamResult, EXAM_TIME_LIMIT, ExamSheet } from '@/lib/exam';
import { saveExamResult, getExamHistory, ExamResult } from '@/lib/storage';
import { getOfficialBogen, getAllBogenNumbers, getRandomBogenNumber, getRelevanceBadge, getBoegen } from '@/lib/exam-relevance';
import { getGamificationState, checkExamAchievements, GamificationState, Achievement } from '@/lib/gamification';
import { highlightKeywords, extractKeywords } from '@/lib/keywords';
import AchievementToast from '@/components/AchievementToast';
import Link from 'next/link';

type ExamPhase = 'setup' | 'running' | 'review';
type ExamMode = 'random' | 'official';

export default function PruefungPage() {
  const [phase, setPhase] = useState<ExamPhase>('setup');
  const [examMode, setExamMode] = useState<ExamMode>('official');
  const [exam, setExam] = useState<ExamSheet | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME_LIMIT);
  const [showAnswer, setShowAnswer] = useState(false);
  const [examHistory, setExamHistory] = useState<ExamResult[]>([]);
  const [seemType, setSeemType] = useState<'1' | '2' | 'random'>('random');
  const [selectedBogen, setSelectedBogen] = useState<number | null>(null);
  const [lastCompletedBogen, setLastCompletedBogen] = useState<number | null>(null);
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setExamHistory(getExamHistory());
  }, []);

  // Timer
  useEffect(() => {
    if (phase === 'running' && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [phase, timeLeft]);

  const startExam = (bogenNum?: number) => {
    let newExam: ExamSheet;
    
    if (bogenNum !== undefined) {
      const questions = getOfficialBogen(bogenNum);
      newExam = {
        id: `bogen-${bogenNum}-${Date.now()}`,
        name: `Prüfungsbogen ${bogenNum}`,
        questions,
      };
    } else if (examMode === 'official' && selectedBogen !== null) {
      const actualBogen = selectedBogen === 0 ? getRandomBogenNumber() : selectedBogen;
      const questions = getOfficialBogen(actualBogen);
      newExam = {
        id: `bogen-${actualBogen}-${Date.now()}`,
        name: `Prüfungsbogen ${actualBogen}`,
        questions,
      };
    } else {
      newExam = generateRandomExam(seemType);
    }
    
    setExam(newExam);
    setCurrentQ(0);
    setScores([]);
    setTimeLeft(EXAM_TIME_LIMIT);
    setShowAnswer(false);
    setPhase('running');
  };

  const scoreQuestion = (score: number) => {
    const newScores = [...scores, score];
    setScores(newScores);
    setShowAnswer(false);

    if (currentQ + 1 < (exam?.questions.length || 30)) {
      setCurrentQ(currentQ + 1);
    } else {
      finishExam(newScores);
    }
  };

  const finishExam = useCallback((finalScores: number[]) => {
    if (timerRef.current) clearInterval(timerRef.current);

    const result = getExamResult(finalScores);
    const examResult: ExamResult = {
      id: `exam-${Date.now()}`,
      date: Date.now(),
      sheetName: exam?.name || 'Zufallsbogen',
      score: result.totalScore,
      maxScore: result.maxScore,
      passed: result.passed,
      oralExam: result.oralExam,
      timeUsed: EXAM_TIME_LIMIT - timeLeft,
      answers: exam?.questions.map((q, i) => ({
        questionId: q.id,
        score: finalScores[i] || 0,
      })) || [],
    };

    const bogenMatch = exam?.name.match(/Prüfungsbogen (\d+)/);
    if (bogenMatch) {
      setLastCompletedBogen(parseInt(bogenMatch[1]));
    }

    saveExamResult(examResult);
    setExamHistory(prev => [...prev, examResult]);

    // Gamification: check exam achievements
    const gamState = getGamificationState();
    const achieved = checkExamAchievements(gamState, result.totalScore);
    if (achieved.length > 0) {
      setNewAchievements(achieved);
    }

    setPhase('review');
  }, [exam, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const bogenNumbers = getAllBogenNumbers();

  // Render highlighted answer for exam review
  const renderHighlightedAnswer = (question: Question) => {
    const extracted = extractKeywords(question.answer);
    const segments = highlightKeywords(question.answer, question.keywords, extracted);
    return (
      <span className="whitespace-pre-line">
        {segments.map((seg, i) => (
          seg.isKeyword ? (
            <span key={i} className="bg-amber-100 dark:bg-amber-900/30 font-semibold rounded px-0.5">
              {seg.text}
            </span>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        ))}
      </span>
    );
  };

  // Setup phase
  if (phase === 'setup') {
    return (
      <div className="py-6 space-y-6">
        <h1 className="text-xl font-bold text-navy-600 dark:text-blue-400">📝 Prüfungssimulation</h1>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Prüfungsmodus</h2>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1.5">
            <li>• 30 Fragen (9 Nav, 7 Recht, 5 Wetter, 9 Seemannschaft)</li>
            <li>• Max. 60 Punkte (2 pro Frage)</li>
            <li>• Bestanden ab 39 Punkte</li>
            <li>• Mündliche Nachprüfung: 33-38 Punkte</li>
            <li>• Zeitlimit: 90 Minuten</li>
          </ul>
        </div>

        {/* Mode selector */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Art wählen</h2>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setExamMode('official')}
              className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                examMode === 'official'
                  ? 'bg-navy-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              📋 Offizieller Bogen
            </button>
            <button
              onClick={() => setExamMode('random')}
              className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                examMode === 'random'
                  ? 'bg-navy-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              🎲 Zufallsbogen
            </button>
          </div>

          {examMode === 'official' && (
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Übe mit den 15 offiziellen Prüfungsbögen — exakt die Fragen aus der echten Prüfung.
              </p>
              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={() => setSelectedBogen(0)}
                  className={`py-2 px-2 rounded-lg text-xs font-medium transition-colors col-span-4 ${
                    selectedBogen === 0
                      ? 'bg-amber-500 text-white'
                      : 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                  }`}
                >
                  🎲 Zufälliger Bogen
                </button>
                {bogenNumbers.map(num => (
                  <button
                    key={num}
                    onClick={() => setSelectedBogen(num)}
                    className={`py-2.5 px-2 rounded-lg text-xs font-medium transition-colors ${
                      selectedBogen === num
                        ? 'bg-navy-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    Bogen {num}
                  </button>
                ))}
              </div>
            </div>
          )}

          {examMode === 'random' && (
            <div>
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Seemannschaft</h3>
              <div className="flex gap-2">
                {[
                  { value: 'random' as const, label: 'Zufall' },
                  { value: '1' as const, label: 'I (Segel+Motor)' },
                  { value: '2' as const, label: 'II (Motor)' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setSeemType(opt.value)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
                      seemType === opt.value
                        ? 'bg-navy-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => startExam()}
          disabled={examMode === 'official' && selectedBogen === null}
          className={`w-full py-4 font-bold rounded-xl text-lg shadow-md active:scale-[0.98] transition-all ${
            examMode === 'official' && selectedBogen === null
              ? 'bg-slate-300 dark:bg-slate-600 text-slate-500 cursor-not-allowed'
              : 'bg-navy-600 hover:bg-navy-700 text-white'
          }`}
        >
          Prüfung starten
        </button>

        {/* Exam History */}
        {examHistory.length > 0 && (
          <div>
            <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Letzte Prüfungen</h2>
            <div className="space-y-2">
              {[...examHistory].reverse().slice(0, 5).map(result => (
                <div
                  key={result.id}
                  className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-200 dark:border-slate-700 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {result.sheetName} — {result.score}/{result.maxScore} Punkte
                    </p>
                    <p className="text-xs text-slate-400">
                      {new Date(result.date).toLocaleDateString('de-DE')} • {formatTime(result.timeUsed)}
                    </p>
                  </div>
                  <span className={`text-sm font-semibold ${
                    result.passed ? 'text-green-600' : result.oralExam ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {result.passed ? '✓ Bestanden' : result.oralExam ? '⚠ Mündlich' : '✗ Nicht best.'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Running phase
  if (phase === 'running' && exam) {
    const question = exam.questions[currentQ];
    const timeWarning = timeLeft < 300;
    const timeOut = timeLeft <= 0;

    if (timeOut && scores.length < exam.questions.length) {
      const remaining = exam.questions.length - scores.length;
      const finalScores = [...scores, ...Array(remaining).fill(0)];
      finishExam(finalScores);
      return null;
    }

    const badge = getRelevanceBadge(question.id);
    const boegen = getBoegen(question.id);

    return (
      <div className="py-4">
        {/* Timer and progress */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Frage {currentQ + 1}/{exam.questions.length}
          </span>
          <span className={`text-sm font-mono font-bold ${timeWarning ? 'text-red-500 animate-pulse' : 'text-slate-600 dark:text-slate-300'}`}>
            ⏱ {formatTime(timeLeft)}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {scores.reduce((a, b) => a + b, 0)} Pkt
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mb-6">
          <div
            className="h-full bg-navy-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentQ) / exam.questions.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-xs text-slate-400 dark:text-slate-500">{question.id}</span>
            <span className={`inline-flex items-center gap-0.5 px-1.5 py-0 rounded-full text-[10px] font-medium ${badge.color} ${badge.textColor}`}>
              {badge.emoji} {badge.label}
            </span>
            {boegen.length > 0 && (
              <span className="text-[10px] text-slate-400">Bogen {boegen.join(', ')}</span>
            )}
          </div>
          <p className="text-lg font-medium text-slate-900 dark:text-white leading-relaxed">
            {question.question}
          </p>

          {showAnswer && (
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 animate-fadeIn">
              <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">Musterantwort</div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {renderHighlightedAnswer(question)}
              </p>
              {question.keywords.length > 0 && (
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                  🔑 Schlüsselbegriffe sind hervorgehoben
                </p>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-4">
          {!showAnswer ? (
            <button
              onClick={() => setShowAnswer(true)}
              className="w-full py-4 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-xl text-lg"
            >
              Antwort zeigen
            </button>
          ) : (
            <div className="space-y-2">
              <p className="text-center text-sm text-slate-500 dark:text-slate-400">Bewerte deine Antwort:</p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => scoreQuestion(0)}
                  className="py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold"
                >
                  0 Punkte
                  <div className="text-xs opacity-80">Falsch</div>
                </button>
                <button
                  onClick={() => scoreQuestion(1)}
                  className="py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-semibold"
                >
                  1 Punkt
                  <div className="text-xs opacity-80">Teilweise</div>
                </button>
                <button
                  onClick={() => scoreQuestion(2)}
                  className="py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold"
                >
                  2 Punkte
                  <div className="text-xs opacity-80">Richtig</div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Review phase
  if (phase === 'review' && exam) {
    const result = getExamResult(scores);
    const nextBogen = lastCompletedBogen !== null && lastCompletedBogen < 15 ? lastCompletedBogen + 1 : null;

    return (
      <div className="py-6 space-y-6">
        {/* Result */}
        <div className="text-center animate-fadeIn">
          <span className="text-5xl block mb-3">
            {result.passed ? '🎉' : result.oralExam ? '😅' : '😔'}
          </span>
          <h2 className={`text-2xl font-bold ${result.color}`}>{result.label}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{exam.name}</p>
          <p className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
            {result.totalScore}/{result.maxScore}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Punkte</p>
          {/* XP bonus */}
          <p className="text-sm text-amber-600 dark:text-amber-400 mt-2 font-semibold">
            +100 XP für abgeschlossene Prüfung
          </p>
        </div>

        {/* Score breakdown */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
          <div className="flex justify-around text-center">
            <div>
              <div className="text-lg font-bold text-green-600">{scores.filter(s => s === 2).length}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Richtig</div>
            </div>
            <div>
              <div className="text-lg font-bold text-yellow-600">{scores.filter(s => s === 1).length}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Teilweise</div>
            </div>
            <div>
              <div className="text-lg font-bold text-red-600">{scores.filter(s => s === 0).length}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Falsch</div>
            </div>
          </div>
        </div>

        {/* Next Bogen suggestion */}
        {nextBogen && (
          <button
            onClick={() => {
              setSelectedBogen(nextBogen);
              startExam(nextBogen);
            }}
            className="w-full bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">👉</span>
              <div>
                <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                  Weiter mit Prüfungsbogen {nextBogen}
                </p>
                <p className="text-xs text-amber-600 dark:text-amber-400">
                  Nächsten offiziellen Bogen üben
                </p>
              </div>
            </div>
          </button>
        )}

        {/* Wrong answers review */}
        {scores.some(s => s < 2) && (
          <div>
            <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">
              Fehler wiederholen
            </h3>
            <div className="space-y-2">
              {exam.questions.map((q, i) => {
                if (scores[i] === 2) return null;
                const qBadge = getRelevanceBadge(q.id);
                return (
                  <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-start gap-2">
                      <span className={`text-sm font-bold ${scores[i] === 0 ? 'text-red-500' : 'text-yellow-500'}`}>
                        {scores[i]}P
                      </span>
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className={`inline-flex items-center gap-0.5 px-1.5 py-0 rounded-full text-[10px] font-medium ${qBadge.color} ${qBadge.textColor}`}>
                            {qBadge.emoji} {qBadge.label}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{q.question}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {renderHighlightedAnswer(q)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              setPhase('setup');
              setExam(null);
              setScores([]);
              setLastCompletedBogen(null);
            }}
            className="flex-1 py-3 bg-navy-600 text-white rounded-xl font-semibold"
          >
            Neue Prüfung
          </button>
          <Link
            href="/"
            className="flex-1 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-semibold text-center"
          >
            Zurück
          </Link>
        </div>

        {/* Achievement Toast */}
        {newAchievements.length > 0 && (
          <AchievementToast
            achievements={newAchievements}
            onDismiss={() => setNewAchievements([])}
          />
        )}
      </div>
    );
  }

  return null;
}
