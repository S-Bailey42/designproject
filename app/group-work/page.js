'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function Introduction() {
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
                INTRODUCTION
              </Typography>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto">
        <section className="mb-16">
          <Typography variant="h5" sx={{ color: "#FCD34D", fontWeight: 600, mb: 4 }}>
            Project Overview
          </Typography>
          <div className="bg-[#3B82F6] rounded-xl p-6 shadow-lg">
            <div className="relative w-full aspect-[1/1.414] mb-4">
              <Image
                src="/updated-poster.png"
                alt="Project A3 Poster"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Typography variant="h5" sx={{ color: "#FCD34D", fontWeight: 600, mb: 4 }}>
            Project Video
          </Typography>
          <div className="bg-[#3B82F6] rounded-xl p-6 shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              <Typography variant="body1" sx={{ color: "#FCD34D", textAlign: 'center', mb: 2 }}>
                Scan the QR code below to watch our project video
              </Typography>
              <div className="relative w-64 h-64">
                <Image
                  src="/youtube-video.png"
                  alt="Project Video QR Code"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 