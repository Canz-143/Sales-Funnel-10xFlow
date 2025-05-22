import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'light' | 'accent';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className,
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500',
    outline: 'bg-transparent hover:bg-gray-50 text-primary-500 border border-primary-500 focus:ring-primary-500',
    light: 'bg-white hover:bg-gray-100 text-primary-600 focus:ring-primary-500 shadow-md',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500',
  };
  
  const sizeStyles = {
    small: 'text-sm py-2 px-4',
    medium: 'text-base py-2.5 px-5',
    large: 'text-lg py-3 px-6',
    xlarge: 'text-xl py-4 px-8',
  };
  
  const styles = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && 'opacity-60 cursor-not-allowed',
    className
  );

  if (href && !disabled) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;