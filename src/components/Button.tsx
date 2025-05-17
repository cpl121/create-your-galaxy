import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-gradient-to-r
        from-purple-600
        to-cyan-600
        hover:from-purple-700
        hover:to-cyan-700
        text-white
        font-medium
        rounded-full
        text-lg
        shadow-md
        shadow-purple-500/20
        hover:shadow-purple-500/40
        transition-all
        duration-200 
        backdrop-blur-sm 
        border 
        border-white/20 
        px-8 py-4 
        cursor-pointer
      `}
    >
      {children}
    </button>
  );
};

export default Button;
