import React from 'react';

export function Home1({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/home1.svg" 
      alt="CodeAnt AI" 
      className={className}
    />
  );
}