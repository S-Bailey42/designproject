'use client';

import Image from "next/image";
import * as React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';

export default function PreOrder() {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center h-screen p-4 gap-8 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center">
              <IconButton
                size="small"
                edge="start"
                aria-label="menu"
                sx={{ 
                  color: "#6B7280",
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'rotate(45deg)'
                  }
                }}
                onClick={() => router.push('/home')}
              >
                <RocketLaunchIcon sx={{ fontSize: "24px" }} />
              </IconButton>
            </div>
            
            <div className="flex-1 flex justify-center">
              <Typography 
                variant="h6" 
                component="div"
                sx={{ 
                  color: "#6B7280",
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
                PRE-ORDER NOW
              </Typography>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-col gap-6 items-center max-w-4xl mx-auto text-center">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <TextField
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <TextField
              name="email"
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              name="phone"
              label="Phone Number"
              type="tel"
              variant="outlined"
              fullWidth
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#3B82F6",
              '&:hover': {
                backgroundColor: "#2563EB"
              }
            }}
          >
            Submit Pre-order
          </Button>
        </form>
      </main>

      <footer className="flex gap-4 flex-wrap items-center justify-center text-[#6B7280] pb-2">
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
