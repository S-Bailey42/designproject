'use client';

import Image from "next/image";
import * as React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);
  const router = useRouter();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center h-screen p-4 gap-8 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center">
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ 
                  color: "#FCD34D",
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'rotate(45deg)'
                  }
                }}
              >
                <RocketLaunchIcon sx={{ fontSize: "28px" }} />
              </IconButton>
            </div>
            
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
                LEMON LAUNCHER
              </Typography>
            </div>

            <div className="flex items-center">
              <Button 
                variant="contained"
                size="small"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => router.push('/product')}
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
          <div 
            className="relative cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
          >
            <Image
              src="/logo.png"
              alt="Water Rocket Pro Logo"
              width={500}
              height={300}
              className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.02] mx-auto"
              style={{ objectFit: 'contain' }}
            />
            {showDetails && (
              <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg flex items-center justify-center text-white p-4">
                <p>Click to view detailed specifications and features</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="p-4 bg-[#3B82F6] rounded-lg transition-all duration-300 hover:bg-[#2563EB] hover:shadow-xl hover:scale-105 cursor-pointer">
            <Typography variant="subtitle1" sx={{ 
              color: "#FCD34D", 
              fontWeight: 600,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}>
              200ft+ Height
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
              Perfect trajectory
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
              Ready in 5 minutes
            </Typography>
          </div>
        </div>
      </main>

      <footer className="flex gap-4 flex-wrap items-center justify-center text-[#FCD34D] pb-2">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm transition-transform duration-200 hover:scale-105"
          href="/specs"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={14}
            height={14}
          />
          Specifications
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm transition-transform duration-200 hover:scale-105"
          href="/gallery"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={14}
            height={14}
          />
          Gallery
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm transition-transform duration-200 hover:scale-105"
          href="/team"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={14}
            height={14}
          />
          Meet the Team
        </a>
      </footer>
    </div>
  );
}
