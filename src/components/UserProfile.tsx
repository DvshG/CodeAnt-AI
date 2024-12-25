import React from 'react';
import { ChevronDown } from 'lucide-react';

interface UserProfileProps {
  username: string;
}

export function UserProfile({ username }: UserProfileProps) {
  return (
    <div className="flex items-center justify-between px-2 py-1.5">
      <span className="text-sm font-medium text-gray-900">{username}</span>
      <ChevronDown className="h-4 w-4 text-gray-500" />
    </div>
  );
}