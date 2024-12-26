import React from 'react';

export function Vector({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/Vector.svg" 
      alt="CodeAnt AI" 
      className={className}
    />
  );
}