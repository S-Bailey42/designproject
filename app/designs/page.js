'use client';

import Image from "next/image";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const router = useRouter();
  const [isHovered, setIsHovered] = React.useState(false);

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
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  '&:hover': {
                    transform: 'translateX(-50%) scale(1.05)'
                  }
                }}
              >
                DESIGNS
              </Typography>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto">
        <section className="mb-16">
          <Typography variant="h5" sx={{ mb: 4, color: "#FFFFFF", fontWeight: 600 }}>
            Assembly Drawing
          </Typography>
          <div className="relative h-[600px] rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/assemblydrawing.png"
              alt="Rocket Assembly Drawing"
              fill
              className="object-contain"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </section>

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
    </div>
  );
}
