interface BadgeProps {
  label: string;
  variant?: 'default' | 'cyan' | 'emerald' | 'violet' | 'amber' | 'rose';
}

const variantStyles: Record<string, string> = {
  default: 'bg-[#1f2937] text-slate-300 border-[#374151]',
  cyan: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
  emerald: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  violet: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
  amber: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
  rose: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
};

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-mono border transition-all duration-200 hover:scale-105 ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}
