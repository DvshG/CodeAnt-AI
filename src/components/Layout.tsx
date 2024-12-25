import React from 'react';
import Sidebar from './Sidebar';
import { MobileHeader } from './MobileHeader';
import { MobileMenu } from './MobileMenu';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 fixed h-screen border-r border-gray-200">
          <Sidebar />
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 md:ml-64">
          <div className="p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}