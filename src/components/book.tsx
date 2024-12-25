import React from 'react';

export function Book({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/book.svg" 
      alt="CodeAnt AI" 
      className={className}
    />
  );
}