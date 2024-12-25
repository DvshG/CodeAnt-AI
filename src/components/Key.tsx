import React from 'react';

export function Key({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/key.svg" 
      alt="CodeAnt AI" 
      className={className}
    />
  );
}