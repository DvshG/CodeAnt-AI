import React from 'react';

export function Bitbucket({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/bitbucket.svg" 
      alt="CodeAnt AI" 
      className={className}
    />
  );
}