import type { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className="animate-on-scroll mb-16">
      <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">
        // {label}
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {description && (
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">{description}</p>
      )}
      <div className="mt-6 w-12 h-px bg-gradient-to-r from-cyan-400 to-emerald-400" />
    </div>
  );
}
