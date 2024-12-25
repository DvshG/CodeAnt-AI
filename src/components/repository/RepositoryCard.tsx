import React from 'react';
import { Repository } from '../../types/repository';
import { HardDrive } from 'lucide-react';

interface RepositoryCardProps {
  repository: Repository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <div className="p-4 hover:bg-[#F5F5F5] transition-colors">
      <div>
        <div className="flex items-center space-x-2 mb-1">
          <h3 className="font-medium">{repository.name}</h3>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            repository.visibility === 'Public' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {repository.visibility}
          </span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span>{repository.language}</span>
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
          </div>
          <div className="flex items-center space-x-1.5">
            <HardDrive className="h-4 w-4" />
            <span>{repository.size}</span>
          </div>
          <span>Updated {repository.updatedAt}</span>
        </div>
      </div>
    </div>
  );
}