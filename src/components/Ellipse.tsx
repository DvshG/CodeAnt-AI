import React from 'react';

export function Ellipse({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/Ellipse 1.svg" 
      alt="CodeAnt AI" 
      className={className}
    />
  );
}