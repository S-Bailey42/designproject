'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function GroupWork() {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-900 text-white">
      <header className="w-full mb-8">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            <div className="flex-1 flex justify-center">
              <Typography 
                variant="h6" 
                component="div"
                sx={{ 
                  color: "#FCD34D",
                  fontWeight: 600,
                  letterSpacing: "0.025em",
                  fontSize: "1rem",
                  cursor: 'default',
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  '&:hover': {
                    transform: 'translateX(-50%) scale(1.05)'
                  }
                }}
              >
                GROUP WORK
              </Typography>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto">
        <section className="mb-16">
          <Typography variant="h5" sx={{ color: "#FCD34D", fontWeight: 600, mb: 4 }}>
            Progress Reports
          </Typography>
          <div className="bg-[#3B82F6] rounded-xl p-6 shadow-lg">
            <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
              Progress reports will be added here.
            </Typography>
          </div>
        </section>
      </div>
    </div>
  );
} 