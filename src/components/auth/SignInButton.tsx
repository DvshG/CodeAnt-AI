import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SignInButtonProps {
  icon: LucideIcon;
  provider: string;
  onClick: () => void;
}

export function SignInButton({ icon: Icon, provider, onClick }: SignInButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
    >
      <Icon className="h-5 w-5" />
      <span>{provider}</span>
    </button>
  );
}