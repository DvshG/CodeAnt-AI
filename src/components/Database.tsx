import React from 'react';

export function Database({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/database.svg" 
      alt="CodeAnt AI" 
      className={className}
    />
  );
}