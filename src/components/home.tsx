import React from 'react';

export function Home({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/home.svg" 
      alt="CodeAnt AI" 
      className={className}
    />
  );
}