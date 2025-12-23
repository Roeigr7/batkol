import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { COLORS } from '@/lib/constants';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type ButtonAsAnchor = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'text-white hover:shadow-lg hover:shadow-[#d97e00]/25',
  secondary: 'bg-white text-neutral-900 hover:bg-neutral-100',
  outline: 'bg-transparent border-2 border-[#d97e00] text-[#d97e00] hover:bg-[#d97e00] hover:text-white',
  ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100',
};

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300';
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  const gradientStyle = variant === 'primary' 
    ? { backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary}, ${COLORS.secondary}, ${COLORS.secondary})` }
    : undefined;

  if (props.as === 'a') {
    const { as, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a className={classes} style={gradientStyle} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} style={gradientStyle} {...buttonProps}>
      {children}
    </button>
  );
}

