import React, { useState } from 'react';
import { RepositoryHeader } from './repository/RepositoryHeader';
import { RepositorySearch } from './repository/RepositorySearch';
import { RepositoryCard } from './repository/RepositoryCard';
import { repositories } from '../data/repositories';

export default function RepositoryList() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleRefresh = () => {
    console.log('Refreshing repositories');
  };

  const handleAdd = () => {
    console.log('Adding new repository');
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-[#FFFFFF]">
      <div className="border-b border-gray-200 p-4">
        <RepositoryHeader
          totalCount={repositories.length}
          onRefresh={handleRefresh}
          onAdd={handleAdd}
        />
        <div className="mt-4">
          <RepositorySearch value={searchQuery} onChange={setSearchQuery} />
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {filteredRepositories.map((repo) => (
          <RepositoryCard key={repo.id} repository={repo} />
        ))}
      </div>
    </div>
  );
}