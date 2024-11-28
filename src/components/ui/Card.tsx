import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-card-bg border border-border rounded-xl shadow-lg backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}