import React from 'react';
import { X, GitBranch, Code2, ShieldCheck, HelpCircle, Settings, Phone, LogOut } from 'lucide-react';
import { CodeAntLogo } from './CodeAntLogo';
import { UserProfile } from './UserProfile';
import { useNavigate } from 'react-router-dom';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const navigate = useNavigate();
  const menuItems = [
    { icon: GitBranch, label: 'Repositories' },
    { icon: Code2, label: 'AI Code Review' },
    { icon: ShieldCheck, label: 'Cloud Security' },
    { icon: HelpCircle, label: 'How to Use' },
    { icon: Settings, label: 'Settings' },
    { icon: Phone, label: 'Support' },
    { icon: LogOut, label: 'Logout', onClick: () => {
      navigate('/');
      onClose();
    }},
  ];

  return (
    <div className="absolute top-0 left-0 right-0 bg-white">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <CodeAntLogo className="h-6 w-6" />
          <span className="text-lg font-semibold">CodeAnt AI</span>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-6 border rounded-lg">
          <UserProfile username="UtkarshDhairyaPanwar" />
        </div>

        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}