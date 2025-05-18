'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Button from '@mui/material/Button';

export default function ClientLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    // Navigation items for the website
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { name: 'Specs', path: '/specs' },
    { name: 'Designs', path: '/designs' },
    { name: 'Group Work', path: '/group-work' },
    { name: 'Appendix', path: '/appendix' },
    { name: 'Testing', path: '/testing' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 1000,
          color: '#FCD34D',
          '&:hover': {
            transform: 'rotate(45deg)',
            transition: 'transform 0.3s ease-in-out'
          }
        }}
      >
        <RocketLaunchIcon />
      </IconButton>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="mb-8">
            <Link href="/">
              <div className="flex items-center justify-center">
                <span className="text-[#FCD34D] font-semibold text-xl">Water Rocket</span>
              </div>
            </Link>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  pathname === item.path
                    ? 'bg-[#3B82F6] text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <Link href="/pre-order-now">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#FCD34D',
                  color: '#000000',
                  '&:hover': {
                    bgcolor: '#FBBF24'
                  }
                }}
              >
                Pre-order Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <main
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {children}
      </main>
    </div>
  );
} 