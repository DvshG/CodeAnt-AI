import React from 'react';
import { RefreshCw, Plus } from 'lucide-react';

interface RepositoryHeaderProps {
  totalCount: number;
  onRefresh: () => void;
  onAdd: () => void;
}

export function RepositoryHeader({ totalCount, onRefresh, onAdd }: RepositoryHeaderProps) {
  return (
    <div className="space-y-4 ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
          <p className="text-gray-600">{totalCount} total repositories</p>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <button 
            onClick={onRefresh}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Refresh All</span>
          </button>
          <button 
            onClick={onAdd}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            <span>Add Repository</span>
          </button>
        </div>
      </div>
      
      <div className="md:hidden flex space-x-3">
        <button 
          onClick={onRefresh}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Refresh All</span>
        </button>
        <button 
          onClick={onAdd}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          <span>Add Repository</span>
        </button>
      </div>
    </div>
  );
}