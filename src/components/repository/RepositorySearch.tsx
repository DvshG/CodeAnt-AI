import React from 'react';
import { Search } from 'lucide-react';

interface RepositorySearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function RepositorySearch({ value, onChange }: RepositorySearchProps) {
  return (
    <div className="relative max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Repositories"
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}