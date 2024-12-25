import React from 'react';

export function Gitlab({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/gitlab.svg" 
      alt="CodeAnt AI" 
      className={className}
    />
  );
}