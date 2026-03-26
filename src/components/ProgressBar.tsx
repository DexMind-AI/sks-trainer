'use client';

interface ProgressBarProps {
  value: number; // 0-100
  color?: string;
  height?: string;
  showLabel?: boolean;
  label?: string;
}

export default function ProgressBar({
  value,
  color = 'bg-navy-600',
  height = 'h-3',
  showLabel = true,
  label,
}: ProgressBarProps) {
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div className="w-full">
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-sm text-slate-600 dark:text-slate-400">{label}</span>}
          {showLabel && (
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {Math.round(clampedValue)}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full ${height} bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden`}>
        <div
          className={`${height} ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}
