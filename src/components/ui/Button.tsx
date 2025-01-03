import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md';
  icon?: LucideIcon;
  children: React.ReactNode;
}

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
  danger: 'text-gray-600 hover:text-red-500 hover:bg-red-50',
};

const sizes = {
  sm: 'p-1.5 text-sm',
  md: 'px-3 py-1.5',
};

export const Button: React.FC<Props> = ({
  variant = 'secondary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-md flex items-center gap-2 transition-all duration-200
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};