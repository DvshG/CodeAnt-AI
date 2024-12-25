import React from 'react';

export function Azure({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/azure.svg" 
      alt="CodeAnt AI" 
      className={className}
    />
  );
}