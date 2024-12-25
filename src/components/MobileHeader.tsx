import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 md:hidden border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <Logo className="h-6 w-6" />
        <span className="text-lg font-semibold">CodeAnt AI</span>
      </div>
      <button 
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-100 rounded-lg"
      >
        <Menu className="h-6 w-6" />
      </button>
    </div>
  );
}