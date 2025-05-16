'use client';

import Image from "next/image";
import * as React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const router = useRouter();

  const fins = [
    { src: "/fin 1.jfif", title: "Classic Fin Design" },
    { src: "/fin 2.jfif", title: "Delta Wing Fin" },
    { src: "/fin 3.jfif", title: "Swept Back Fin" }
  ];

  const nosecones = [
    { src: "/nosescreenshot.PNG", title: "Conical Nosecone" },
    { src: "/nosescreenshot 2.PNG", title: "Ogive Nosecone" },
    { src: "/nosescreenshot.PNG", title: "Elliptical Nosecone" }
  ];

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 gap-8 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-12 w-full">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <IconButton
                size="small"
                edge="start"
                aria-label="menu"
                sx={{ 
                  color: "#FFFFFF",
                  '&:hover': {
                    transform: 'rotate(45deg)'
                  }
                }}
              >
                <RocketLaunchIcon sx={{ fontSize: "24px" }} />
              </IconButton>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: "#FFFFFF",
                  ml: 2,
                  fontWeight: 600
                }}
              >
                Design Gallery
              </Typography>
            </div>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#3B82F6',
                '&:hover': {
                  bgcolor: '#2563EB'
                }
              }}
              onClick={() => router.push('/pre-order')}
            >
              Pre-order Now
            </Button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto">
        <section className="mb-16">
          <Typography variant="h5" sx={{ mb: 4, color: "#FFFFFF", fontWeight: 600 }}>
            Fin Designs
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fins.map((fin, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
                onClick={() => setSelectedImage(fin)}
              >
                <div className="relative h-64">
                  <Image
                    src={fin.src}
                    alt={fin.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
                    {fin.title}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Typography variant="h5" sx={{ mb: 4, color: "#FFFFFF", fontWeight: 600 }}>
            Nosecone Designs
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nosecones.map((nose, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
                onClick={() => setSelectedImage(nose)}
              >
                <div className="relative h-64">
                  <Image
                    src={nose.src}
                    alt={nose.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
                    {nose.title}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <Typography 
                variant="h5" 
                sx={{ 
                  color: "white", 
                  position: "absolute", 
                  bottom: "20px", 
                  width: "100%",
                  textAlign: "center",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
                }}
              >
                {selectedImage.title}
              </Typography>
            </div>
          </div>
        )}
      </main>

      <footer className="flex gap-4 flex-wrap items-center justify-center text-[#FFFFFF] pb-2">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm transition-transform duration-200 hover:scale-105"
          href="/home"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={14}
            height={14}
          />
          Back to Home
        </a>
      </footer>
    </div>
  );
}
