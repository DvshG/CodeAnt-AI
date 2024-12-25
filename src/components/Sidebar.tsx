import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X,
  Code2,
  Settings, 
  Phone,
  LogOut 
} from 'lucide-react';
import { Logo } from './Logo';
import { Book } from './book';
import { Home } from './home';
import { Frame10 } from './Frame 10';
import { UserProfile } from './UserProfile';

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const navigate = useNavigate();
  
  const menuItems = [
    { icon: Home, label: 'Repositories', active: true },
    { icon: Code2, label: 'AI Code Review' },
    { icon: Frame10, label: 'Cloud Security' },
    { icon: Book, label: 'How to Use' },
    { icon: Settings, label: 'Settings' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="w-64 h-screen bg-[#FFFFFF] border-r border-gray-200 p-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-semibold">CodeAnt AI</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="mb-6 border rounded-lg">
        <UserProfile username="UtkarshDhairyaPa..." />
      </div>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
              item.active
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 left-4 right-4 space-y-2">
        <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-700 group">
          <Phone className="h-5 w-5 group-hover:text-blue-600" />
          <span className="group-hover:text-blue-600">Support</span>
        </button>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-700 group"
        >
          <LogOut className="h-5 w-5 group-hover:text-blue-600" />
          <span className="group-hover:text-blue-600">Logout</span>
        </button>
      </div>
    </div>
  );
}