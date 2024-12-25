import React from 'react';

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/codeant-logo.svg" 
      alt="CodeAnt AI" 
      className={className}
    />
  );
}