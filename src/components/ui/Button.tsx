import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({ children, variant = 'primary', onClick, href, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-medium transition-all duration-200 cursor-pointer';

  const variants = {
    primary:
      'bg-cyan-400 text-[#080c10] hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25 active:scale-95',
    secondary:
      'border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 active:scale-95',
    ghost:
      'text-slate-400 hover:text-slate-100 hover:bg-white/5 active:scale-95',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
