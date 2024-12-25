import React, { useState } from 'react';
import { RepositoryHeader } from './RepositoryHeader';
import { RepositorySearch } from './RepositorySearch';
import { RepositoryCard } from './RepositoryCard';
import { repositories } from '../../data/repositories';

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
    <div className="border border-[#D5D7DA] rounded-lg overflow-hidden bg-white">
      <div className="border-b border-[#D5D7DA] p-4">
        <RepositoryHeader
          totalCount={repositories.length}
          onRefresh={handleRefresh}
          onAdd={handleAdd}
        />
        <div className="mt-4">
          <RepositorySearch value={searchQuery} onChange={setSearchQuery} />
        </div>
      </div>
      <div className="divide-y divide-[#D5D7DA]">
        {filteredRepositories.map((repo) => (
          <RepositoryCard key={repo.id} repository={repo} />
        ))}
      </div>
    </div>
  );
}