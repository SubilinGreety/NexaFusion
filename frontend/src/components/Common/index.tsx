import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

/**
 * Reusable section header with optional eyebrow label and subtitle.
 */
export function SectionHeader({ eyebrow, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {eyebrow && (
        <span className="text-primary-500 font-semibold uppercase tracking-wider text-sm block mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 mt-4 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'purple' | 'cyan' | 'default';
}

/**
 * Reusable badge/tag component.
 */
export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-primary-500/10 border-primary-500/20 text-primary-500',
    purple: 'bg-accent-purple/10 border-accent-purple/20 text-accent-purple',
    cyan: 'bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan',
    default: 'bg-white/5 border-white/10 text-slate-400',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border uppercase tracking-wider ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

/**
 * Reusable button component with variants.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 disabled:opacity-50';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-accent-purple to-primary-500 hover:from-accent-purple/90 hover:to-primary-500/90 text-white shadow-lg shadow-primary-500/20',
    outline: 'border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white',
    ghost: 'text-slate-400 hover:text-white hover:bg-white/5',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Loading spinner component.
 */
export function LoadingSpinner({ size = 'md' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className={`${sizeClasses[size]} border-primary-500/30 border-t-primary-500 rounded-full animate-spin`} />
  );
}
