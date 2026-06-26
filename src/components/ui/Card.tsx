import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({ children, className = '', hover = true, glow = false }: CardProps) {
  return (
    <div
      className={`
        bg-[#111827] rounded-xl border border-[#1f2937] p-6
        ${hover ? 'hover:border-cyan-400/30 transition-all duration-300' : ''}
        ${glow ? 'hover:shadow-lg hover:shadow-cyan-400/5' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
