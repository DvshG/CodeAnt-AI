import React from 'react';
import Layout from '../components/Layout';
import RepositoryList from '../components/RepositoryList';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Layout>
        <RepositoryList />
      </Layout>
    </div>
  );
}