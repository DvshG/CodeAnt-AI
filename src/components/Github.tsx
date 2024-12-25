import React from 'react';

export function Github({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/github.svg" 
      alt="CodeAnt AI" 
      className={className}
    />
  );
}