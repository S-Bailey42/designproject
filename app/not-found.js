'use client';

import * as React from 'react';
import { Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E3A8A] p-4">
      <div className="text-center">
        <Typography 
          variant="h1" 
          sx={{ 
            color: "#FCD34D", 
            fontWeight: 700,
            mb: 2
          }}
        >
          404
        </Typography>
        <Typography 
          variant="h4" 
          sx={{ 
            color: "#FCD34D",
            mb: 4
          }}
        >
          Page Not Found
        </Typography>
        <Button
          variant="contained"
          onClick={() => router.push('/')}
          sx={{
            backgroundColor: "#FCD34D",
            color: "#1E3A8A",
            '&:hover': {
              backgroundColor: "#F59E0B"
            }
          }}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
} 