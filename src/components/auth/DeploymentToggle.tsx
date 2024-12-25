import React from 'react';
import { DeploymentType } from '../../constants/auth';

interface DeploymentToggleProps {
  selected: DeploymentType;
  onSelect: (type: DeploymentType) => void;
}

export function DeploymentToggle({ selected, onSelect }: DeploymentToggleProps) {
  return (
    <div className="flex mb-6 bg-gray-100 p-1 rounded-lg">
      <button
        onClick={() => onSelect('saas')}
        className={`flex-1 py-2 px-4 rounded-md transition-colors ${
          selected === 'saas'
            ? 'bg-blue-600 text-white'
            : 'text-gray-700 hover:bg-gray-200'
        }`}
      >
        SAAS
      </button>
      <button
        onClick={() => onSelect('self-hosted')}
        className={`flex-1 py-2 px-4 rounded-md transition-colors ${
          selected === 'self-hosted'
            ? 'bg-blue-600 text-white'
            : 'text-gray-700 hover:bg-gray-200'
        }`}
      >
        Self Hosted
      </button>
    </div>
  );
}