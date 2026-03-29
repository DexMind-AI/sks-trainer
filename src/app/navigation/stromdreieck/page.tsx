'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  generateStromdreieckProblem,
  getVectorEndpoint,
  solveForKueg,
  solveForKdw,
  solveForStrom,
  type StromdreieckProblem,
  type StromdreieckProblemType,
  type Vector,
} from '@/data/navigation/stromdreieck';
import { normalizeAngle } from '@/data/navigation/steuertafel';

type Mode = 'interactive' | 'practice';

export default function StromdreieckPage() {
  const [mode, setMode] = useState<Mode>('interactive');
  const [problem, setProblem] = useState<StromdreieckProblem | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [practiceCount, setPracticeCount] = useState(0);

  // Interactive mode state
  const [kdwDir, setKdwDir] = useState('');
  const [kdwSpd, setKdwSpd] = useState('');
  const [stromDir, setStromDir] = useState('');
  const [stromSpd, setStromSpd] = useState('');
  const [kuegDir, setKuegDir] = useState('');
  const [kuegSpd, setKuegSpd] = useState('');

  // User practice answers
  const [answerDir, setAnswerDir] = useState('');
  const [answerSpd, setAnswerSpd] = useState('');
  const [checked, setChecked] = useState(false);

  const computeInteractive = useCallback(() => {
    const kdw: Vector | null = kdwDir && kdwSpd ? { direction: parseFloat(kdwDir), speed: parseFloat(kdwSpd) } : null;
    const strom: Vector | null = stromDir && stromSpd ? { direction: parseFloat(stromDir), speed: parseFloat(stromSpd) } : null;

    if (kdw && strom) {
      const result = solveForKueg(kdw, strom);
      setKuegDir(result.direction.toFixed(1));
      setKuegSpd(result.speed.toFixed(1));
    }
  }, [kdwDir, kdwSpd, stromDir, stromSpd]);

  const startPractice = useCallback((type?: StromdreieckProblemType) => {
    const p = generateStromdreieckProblem(type);
    setProblem(p);
    setShowSolution(false);
    setAnswerDir('');
    setAnswerSpd('');
    setChecked(false);
  }, []);

  const checkPractice = () => {
    setChecked(true);
    setPracticeCount(prev => prev + 1);
  };

  return (
    <div className="py-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/navigation" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
          ← Zurück
        </Link>
        <h1 className="text-lg font-bold text-navy-600 dark:text-blue-400">📐 Stromdreieck</h1>
        <div className="w-12" />
      </div>

      {/* Mode toggle */}
      <div className="flex bg-slate-200 dark:bg-slate-700 rounded-xl p-1">
        <button
          onClick={() => setMode('interactive')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
            mode === 'interactive' ? 'bg-white dark:bg-slate-600 text-navy-600 dark:text-blue-400 shadow' : 'text-slate-500'
          }`}
        >
          🎨 Interaktiv
        </button>
        <button
          onClick={() => setMode('practice')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
            mode === 'practice' ? 'bg-white dark:bg-slate-600 text-navy-600 dark:text-blue-400 shadow' : 'text-slate-500'
          }`}
        >
          ✏️ Üben
        </button>
      </div>

      {mode === 'interactive' ? (
        <InteractiveMode
          kdwDir={kdwDir} kdwSpd={kdwSpd}
          stromDir={stromDir} stromSpd={stromSpd}
          kuegDir={kuegDir} kuegSpd={kuegSpd}
          onKdwDirChange={setKdwDir} onKdwSpdChange={setKdwSpd}
          onStromDirChange={setStromDir} onStromSpdChange={setStromSpd}
          onCompute={computeInteractive}
        />
      ) : (
        <PracticeMode
          problem={problem}
          showSolution={showSolution}
          answerDir={answerDir}
          answerSpd={answerSpd}
          checked={checked}
          practiceCount={practiceCount}
          onStart={startPractice}
          onSetAnswerDir={setAnswerDir}
          onSetAnswerSpd={setAnswerSpd}
          onCheck={checkPractice}
          onShowSolution={() => setShowSolution(true)}
        />
      )}
    </div>
  );
}

// SVG Triangle Visualization
function TriangleSVG({
  kdw,
  strom,
  kueg,
  highlightMissing,
}: {
  kdw?: Vector;
  strom?: Vector;
  kueg?: Vector;
  highlightMissing?: 'kdw' | 'strom' | 'kueg';
}) {
  const width = 320;
  const height = 280;
  const origin = { x: width / 2, y: height / 2 };
  const scale = 30; // px per kn

  const drawArrow = (
    from: { x: number; y: number },
    to: { x: number; y: number },
    color: string,
    label: string,
    dashed?: boolean
  ) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len < 1) return null;

    const arrowSize = 8;
    const ux = dx / len;
    const uy = dy / len;
    const ax = to.x - ux * arrowSize;
    const ay = to.y - uy * arrowSize;
    const px = -uy * arrowSize * 0.4;
    const py = ux * arrowSize * 0.4;

    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;

    return (
      <g key={label}>
        <line
          x1={from.x} y1={from.y} x2={to.x} y2={to.y}
          stroke={color} strokeWidth={2.5}
          strokeDasharray={dashed ? '6,4' : 'none'}
        />
        <polygon
          points={`${to.x},${to.y} ${ax + px},${ay + py} ${ax - px},${ay - py}`}
          fill={color}
        />
        <text
          x={midX + (py > 0 ? 10 : -10)}
          y={midY + (px > 0 ? -5 : 15)}
          fill={color}
          fontSize="11"
          fontWeight="bold"
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    );
  };

  const vectors: React.ReactElement[] = [];

  if (kdw) {
    const end = getVectorEndpoint(origin, kdw.direction, kdw.speed, scale);
    const isMissing = highlightMissing === 'kdw';
    vectors.push(
      drawArrow(origin, end, isMissing ? '#10b981' : '#3b82f6', `KdW ${kdw.direction}°/${kdw.speed}kn`, isMissing)!
    );

    if (strom) {
      const stromEnd = getVectorEndpoint(end, strom.direction, strom.speed, scale);
      const isMissingStrom = highlightMissing === 'strom';
      vectors.push(
        drawArrow(end, stromEnd, isMissingStrom ? '#10b981' : '#ef4444', `S ${strom.direction}°/${strom.speed}kn`, isMissingStrom)!
      );

      if (kueg) {
        const kuegEnd = getVectorEndpoint(origin, kueg.direction, kueg.speed, scale);
        const isMissingKueg = highlightMissing === 'kueg';
        vectors.push(
          drawArrow(origin, kuegEnd, isMissingKueg ? '#10b981' : '#a855f7', `KüG ${kueg.direction}°/${kueg.speed}kn`, isMissingKueg)!
        );
      }
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Grid */}
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width={width} height={height} fill="url(#grid)" />

        {/* Compass rose */}
        <text x={width / 2} y={16} textAnchor="middle" fontSize="12" fill="#94a3b8" fontWeight="bold">N</text>
        <text x={width - 8} y={height / 2 + 4} textAnchor="end" fontSize="12" fill="#94a3b8">O</text>
        <text x={width / 2} y={height - 6} textAnchor="middle" fontSize="12" fill="#94a3b8">S</text>
        <text x={12} y={height / 2 + 4} fontSize="12" fill="#94a3b8">W</text>

        {/* Origin */}
        <circle cx={origin.x} cy={origin.y} r={3} fill="#64748b" />

        {/* Scale */}
        <line x1={20} y1={height - 20} x2={20 + scale} y2={height - 20} stroke="#94a3b8" strokeWidth={1} />
        <text x={20 + scale / 2} y={height - 8} textAnchor="middle" fontSize="9" fill="#94a3b8">1 kn</text>

        {/* Vectors */}
        {vectors}
      </svg>

      {/* Legend */}
      <div className="flex justify-center gap-4 px-3 pb-3 text-xs">
        <div className="flex items-center gap-1">
          <span className="w-3 h-0.5 bg-blue-500 inline-block" /> KdW/FdW
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-0.5 bg-red-500 inline-block" /> Strom
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-0.5 bg-purple-500 inline-block" /> KüG/FüG
        </div>
      </div>
    </div>
  );
}

interface InteractiveModeProps {
  kdwDir: string; kdwSpd: string;
  stromDir: string; stromSpd: string;
  kuegDir: string; kuegSpd: string;
  onKdwDirChange: (v: string) => void; onKdwSpdChange: (v: string) => void;
  onStromDirChange: (v: string) => void; onStromSpdChange: (v: string) => void;
  onCompute: () => void;
}

function InteractiveMode(props: InteractiveModeProps) {
  const kdw = props.kdwDir && props.kdwSpd
    ? { direction: parseFloat(props.kdwDir), speed: parseFloat(props.kdwSpd) }
    : undefined;
  const strom = props.stromDir && props.stromSpd
    ? { direction: parseFloat(props.stromDir), speed: parseFloat(props.stromSpd) }
    : undefined;
  const kueg = props.kuegDir && props.kuegSpd
    ? { direction: parseFloat(props.kuegDir), speed: parseFloat(props.kuegSpd) }
    : undefined;

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">Werte eingeben</h3>
        <div className="space-y-3">
          <VectorInput label="KdW/FdW" color="text-blue-600" dirVal={props.kdwDir} spdVal={props.kdwSpd} onDirChange={props.onKdwDirChange} onSpdChange={props.onKdwSpdChange} />
          <VectorInput label="Strom (StR/StG)" color="text-red-600" dirVal={props.stromDir} spdVal={props.stromSpd} onDirChange={props.onStromDirChange} onSpdChange={props.onStromSpdChange} />
        </div>
        <button
          onClick={props.onCompute}
          className="w-full mt-3 bg-navy-600 hover:bg-navy-700 text-white py-2.5 rounded-lg font-semibold text-sm transition-colors"
        >
          Berechnen
        </button>
        {kueg && (
          <div className="mt-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 text-center">
            <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">KüG/FüG (Ergebnis)</div>
            <div className="font-bold text-lg text-purple-800 dark:text-purple-200">
              {props.kuegDir}° / {props.kuegSpd} kn
            </div>
          </div>
        )}
      </div>

      <TriangleSVG kdw={kdw} strom={strom} kueg={kueg} />

      {/* Explanation */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">📏 So zeichnet man das Stromdreieck</h3>
        <ol className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
          <li className="flex gap-2"><span className="font-bold text-blue-500">1.</span> KdW-Vektor vom Abfahrtsort zeichnen (Richtung = KdW, Länge = FdW × Fahrzeit)</li>
          <li className="flex gap-2"><span className="font-bold text-red-500">2.</span> Strom-Vektor ans Ende des KdW-Vektors anlegen (Richtung = StR, Länge = StG × Fahrzeit)</li>
          <li className="flex gap-2"><span className="font-bold text-purple-500">3.</span> KüG-Vektor = Verbindung Abfahrtsort → Ende Stromvektor</li>
        </ol>
        <p className="text-xs text-slate-500 mt-2">
          Maßstab in der Prüfung: 1 cm = 1 kn (bei 1h Fahrzeit) oder angepasst.
        </p>
      </div>
    </div>
  );
}

function VectorInput({
  label, color, dirVal, spdVal, onDirChange, onSpdChange
}: {
  label: string; color: string;
  dirVal: string; spdVal: string;
  onDirChange: (v: string) => void; onSpdChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className={`text-xs font-medium w-24 ${color}`}>{label}</span>
      <input
        type="number" min="0" max="360" step="1" placeholder="Richtung°"
        value={dirVal} onChange={e => onDirChange(e.target.value)}
        className="flex-1 px-2 py-1.5 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-mono bg-white dark:bg-slate-900 focus:ring-1 focus:ring-navy-500 focus:outline-none"
      />
      <input
        type="number" min="0" max="20" step="0.1" placeholder="kn"
        value={spdVal} onChange={e => onSpdChange(e.target.value)}
        className="w-20 px-2 py-1.5 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-mono bg-white dark:bg-slate-900 focus:ring-1 focus:ring-navy-500 focus:outline-none"
      />
    </div>
  );
}

interface PracticeModeProps {
  problem: StromdreieckProblem | null;
  showSolution: boolean;
  answerDir: string;
  answerSpd: string;
  checked: boolean;
  practiceCount: number;
  onStart: (type?: StromdreieckProblemType) => void;
  onSetAnswerDir: (v: string) => void;
  onSetAnswerSpd: (v: string) => void;
  onCheck: () => void;
  onShowSolution: () => void;
}

function PracticeMode({
  problem, showSolution, answerDir, answerSpd, checked, practiceCount,
  onStart, onSetAnswerDir, onSetAnswerSpd, onCheck, onShowSolution,
}: PracticeModeProps) {
  if (!problem) {
    return (
      <div className="space-y-4 animate-fadeIn">
        {practiceCount > 0 && (
          <div className="text-center text-sm text-slate-500">{practiceCount} Aufgaben geübt</div>
        )}
        <button onClick={() => onStart('find_kueg')} className="w-full bg-navy-600 text-white py-3 rounded-xl font-semibold">
          KüG/FüG berechnen (KdW + Strom gegeben)
        </button>
        <button onClick={() => onStart('find_kdw')} className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-3 rounded-xl font-semibold">
          KdW/FdW berechnen (KüG + Strom gegeben)
        </button>
        <button onClick={() => onStart('find_strom')} className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-3 rounded-xl font-semibold">
          Strom berechnen (KdW + KüG gegeben)
        </button>
        <button onClick={() => onStart()} className="w-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 py-2 rounded-xl">
          🎲 Zufällig
        </button>
      </div>
    );
  }

  const sol = problem.solution;
  const target = problem.type === 'find_kueg' ? sol.kueg
    : problem.type === 'find_kdw' ? sol.kdw
    : sol.strom;
  const targetLabel = problem.type === 'find_kueg' ? 'KüG/FüG'
    : problem.type === 'find_kdw' ? 'KdW/FdW'
    : 'Strom (StR/StG)';

  const isCorrectDir = checked && answerDir ? Math.abs(parseFloat(answerDir) - target.direction) <= 5 || Math.abs(parseFloat(answerDir) - target.direction) >= 355 : null;
  const isCorrectSpd = checked && answerSpd ? Math.abs(parseFloat(answerSpd) - target.speed) <= 0.3 : null;

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Problem */}
      <div className="bg-navy-600 text-white rounded-xl p-4">
        <div className="text-xs opacity-80 mb-1">Gesucht: {targetLabel}</div>
        {problem.given.kdw && (
          <div>KdW: {problem.given.kdw.direction}° / FdW: {problem.given.kdw.speed} kn</div>
        )}
        {problem.given.strom && (
          <div>Strom: {problem.given.strom.direction}° / {problem.given.strom.speed} kn</div>
        )}
        {problem.given.kueg && (
          <div>KüG: {problem.given.kueg.direction}° / FüG: {problem.given.kueg.speed} kn</div>
        )}
      </div>

      {/* Visualization */}
      <TriangleSVG
        kdw={showSolution || problem.given.kdw ? sol.kdw : undefined}
        strom={showSolution || problem.given.strom ? sol.strom : undefined}
        kueg={showSolution || problem.given.kueg ? sol.kueg : undefined}
        highlightMissing={problem.type === 'find_kueg' ? 'kueg' : problem.type === 'find_kdw' ? 'kdw' : 'strom'}
      />

      {/* Answer inputs */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">{targetLabel} berechnen</h3>
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-xs text-slate-500 mb-1 block">Richtung (°)</label>
            <input
              type="number" min="0" max="360" step="1"
              value={answerDir} onChange={e => onSetAnswerDir(e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg text-sm font-mono focus:ring-1 focus:ring-navy-500 focus:outline-none ${
                checked ? (isCorrectDir ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900'
              }`}
            />
          </div>
          <div className="flex-1">
            <label className="text-xs text-slate-500 mb-1 block">Geschwindigkeit (kn)</label>
            <input
              type="number" min="0" max="20" step="0.1"
              value={answerSpd} onChange={e => onSetAnswerSpd(e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg text-sm font-mono focus:ring-1 focus:ring-navy-500 focus:outline-none ${
                checked ? (isCorrectSpd ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900'
              }`}
            />
          </div>
        </div>
        {checked && (
          <div className="mt-2 text-sm text-center">
            <span className="font-mono text-green-600">Lösung: {target.direction}° / {target.speed} kn</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        {!checked ? (
          <>
            <button onClick={onCheck} className="flex-1 bg-navy-600 text-white py-3 rounded-xl font-semibold">✅ Prüfen</button>
            <button onClick={onShowSolution} className="px-4 bg-slate-100 dark:bg-slate-700 text-slate-600 py-3 rounded-xl text-sm">👁 Lösung</button>
          </>
        ) : (
          <>
            <button onClick={() => onStart(problem.type)} className="flex-1 bg-navy-600 text-white py-3 rounded-xl font-semibold">Nächste Aufgabe</button>
            <button onClick={() => onStart()} className="px-4 bg-slate-100 dark:bg-slate-700 text-slate-600 py-3 rounded-xl">🎲</button>
          </>
        )}
      </div>
    </div>
  );
}
