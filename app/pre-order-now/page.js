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
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
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
                variant="h4"
                component="div"
                sx={{ 
                  color: "#FCD34D",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  fontSize: { xs: '1.5rem', sm: '2rem' },
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
        <div className="w-full max-w-lg bg-[#3B82F6] p-8 rounded-lg shadow-lg mb-6">
          <Typography 
            variant="h4" 
            sx={{ 
              color: "#FCD34D",
              fontWeight: 700,
              mb: 2
            }}
          >
            £12
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: "#FCD34D",
              fontWeight: 500
            }}
          >
            Pre-order your Water Rocket today!
          </Typography>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <Typography variant="h6" sx={{ mb: 3, color: "#1E3A8A", fontWeight: 600 }}>
            Contact Information
          </Typography>
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
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <Typography variant="h6" sx={{ mb: 3, mt: 4, color: "#1E3A8A", fontWeight: 600 }}>
            Shipping Address
          </Typography>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <TextField
              name="address1"
              label="Address Line 1"
              variant="outlined"
              fullWidth
              required
              value={formData.address1}
              onChange={handleChange}
            />
            <TextField
              name="address2"
              label="Address Line 2 (Optional)"
              variant="outlined"
              fullWidth
              value={formData.address2}
              onChange={handleChange}
            />
            <TextField
              name="city"
              label="City"
              variant="outlined"
              fullWidth
              required
              value={formData.city}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <TextField
                name="state"
                label="State / Province"
                variant="outlined"
                fullWidth
                required
                value={formData.state}
                onChange={handleChange}
              />
              <TextField
                name="zip"
                label="Zip / Postal Code"
                variant="outlined"
                fullWidth
                required
                value={formData.zip}
                onChange={handleChange}
              />
            </div>
            <TextField
              name="country"
              label="Country"
              variant="outlined"
              fullWidth
              required
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <Typography variant="h6" sx={{ mb: 3, mt: 4, color: "#1E3A8A", fontWeight: 600 }}>
            Payment Information
          </Typography>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <TextField
              name="cardNumber"
              label="Card Number"
              variant="outlined"
              fullWidth
              required
              value={formData.cardNumber}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <TextField
                name="expiryDate"
                label="Expiry Date (MM/YY)"
                variant="outlined"
                fullWidth
                required
                value={formData.expiryDate}
                onChange={handleChange}
              />
              <TextField
                name="cvv"
                label="CVV"
                variant="outlined"
                fullWidth
                required
                value={formData.cvv}
                onChange={handleChange}
              />
            </div>
            <TextField
              name="cardholderName"
              label="Cardholder Name"
              variant="outlined"
              fullWidth
              required
              value={formData.cardholderName}
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
