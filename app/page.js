'use client';

import Image from "next/image";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);
  const router = useRouter();

  return (
    <div className="grid grid-rows-[auto_1fr] items-center justify-items-center h-screen p-4 gap-8 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
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
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  },
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  '&:hover': {
                    transform: 'translateX(-50%) scale(1.05)'
                  }
                }}
              >
                LEMON LAUNCH
              </Typography>
            </div>

            <div className="flex items-center">
              <Button 
                variant="contained"
                size="small"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => router.push('/pre-order-now')}
                sx={{ 
                  backgroundColor: "#FCD34D",
                  color: "#1E3A8A",
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateY(-2px)' : 'none',
                  boxShadow: isHovered ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                  '&:hover': {
                    backgroundColor: "#F59E0B"
                  }
                }}
              >
                Pre-order Now
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-col gap-6 items-center max-w-4xl mx-auto text-center">
        <div className="space-y-4">
          <Typography 
            variant="h3" 
            sx={{ 
              color: "#FCD34D", 
              fontWeight: 700,
              transition: 'color 0.3s ease',
              '&:hover': {
                color: "#F59E0B"
              }
            }}
          >
            The Future of Water Rocketry
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "#FCD34D",
              fontWeight: 700,
              transition: 'color 0.3s ease',
              '&:hover': {
                color: "#F59E0B"
              }
            }}
          >
            Experience unprecedented height and stability
          </Typography>
          <div className="relative">
            <Image
              src="/logo.jfif"
              alt="Water Rocket Pro Logo"
              width={500}
              height={300}
              className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.02] mx-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          <div className="p-4 bg-[#3B82F6] rounded-lg transition-all duration-300 hover:bg-[#2563EB] hover:shadow-xl hover:scale-105 cursor-pointer">
            <Typography variant="subtitle1" sx={{ 
              color: "#FCD34D", 
              fontWeight: 600,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}>
              150ft+ Height
            </Typography>
            <Typography variant="body2" sx={{ 
              color: "#FCD34D",
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}>
              Optimized nozzle design
            </Typography>
          </div>
          <div className="p-4 bg-[#3B82F6] rounded-lg transition-all duration-300 hover:bg-[#2563EB] hover:shadow-xl hover:scale-105 cursor-pointer">
            <Typography variant="subtitle1" sx={{ 
              color: "#FCD34D", 
              fontWeight: 600,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}>
              Stable Flight
            </Typography>
            <Typography variant="body2" sx={{ 
              color: "#FCD34D",
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}>
              Ideal Trajectory
            </Typography>
          </div>
          <div className="p-4 bg-[#3B82F6] rounded-lg transition-all duration-300 hover:bg-[#2563EB] hover:shadow-xl hover:scale-105 cursor-pointer">
            <Typography variant="subtitle1" sx={{ 
              color: "#FCD34D", 
              fontWeight: 600,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}>
              Easy Assembly
            </Typography>
            <Typography variant="body2" sx={{ 
              color: "#FCD34D",
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}>
              Ready in 10 minutes
            </Typography>
          </div>
        </div>
      </main>
    </div>
  );
} 