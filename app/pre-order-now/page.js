'use client';

import Image from "next/image";
import * as React from 'react';
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
    </div>
  );
}
