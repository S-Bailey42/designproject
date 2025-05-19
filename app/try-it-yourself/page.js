'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';

export default function TryItYourself() {
  const router = useRouter();
  const [showGuide, setShowGuide] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div className="min-h-screen p-8 bg-[#1E3A8A]">
      <div className="max-w-4xl mx-auto">
        <Typography 
          variant="h3" 
          sx={{ 
            color: "#FCD34D", 
            fontWeight: 700,
            marginBottom: 4,
            textAlign: 'center'
          }}
        >
          Try It Yourself
        </Typography>

        <div className="space-y-8">
          <div className="bg-[#3B82F6] rounded-lg p-6 shadow-lg">
            <Typography 
              variant="h5" 
              sx={{ 
                color: "#FCD34D", 
                fontWeight: 600,
                marginBottom: 2
              }}
            >
              SolidWorks Files
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: "#FCD34D",
                marginBottom: 3
              }}
            >
              Download our SolidWorks files to build your own water rocket. The package includes all necessary components and assembly instructions.
            </Typography>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                backgroundColor: "#FCD34D",
                color: "#1E3A8A",
                '&:hover': {
                  backgroundColor: "#F59E0B"
                }
              }}
            >
              Download SolidWorks Files
            </Button>
          </div>

          <div className="bg-[#3B82F6] rounded-lg p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: "#FCD34D", 
                    fontWeight: 600,
                  }}
                >
                  micro:bit Telemetry System
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: "#FCD34D",
                    opacity: 0.8,
                  }}
                >
                  (Click arrow for detailed setup guide)
                </Typography>
              </div>
              <IconButton 
                onClick={() => setShowDetails(!showDetails)}
                sx={{ color: "#FCD34D" }}
              >
                {showDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </div>

            <Typography 
              variant="body1" 
              sx={{ 
                color: "#FCD34D",
                marginBottom: 3
              }}
            >
              Our water rocket uses two micro:bits for real-time acceleration measurements:
            </Typography>
            
            <div className="space-y-4 mb-4">
              <div>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: "#FCD34D", 
                    fontWeight: 600,
                    marginBottom: 1
                  }}
                >
                  🧩 Onboard Micro:bit
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: "#FCD34D",
                    marginBottom: 2
                  }}
                >
                  Mounted on the rocket, measures Z-axis acceleration using its 8g accelerometer and transmits data wirelessly.
                </Typography>
                <Link href="/microbit-onboard-microbit.hex" download>
                  <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    sx={{
                      backgroundColor: "#FCD34D",
                      color: "#1E3A8A",
                      '&:hover': {
                        backgroundColor: "#F59E0B"
                      }
                    }}
                  >
                    Download Onboard Code
                  </Button>
                </Link>
              </div>

              <div>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: "#FCD34D", 
                    fontWeight: 600,
                    marginBottom: 1
                  }}
                >
                  📡 Relay Micro:bit
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: "#FCD34D",
                    marginBottom: 2
                  }}
                >
                  Ground station that receives the rocket's data and relays it to a computer via USB for logging and analysis.
                </Typography>
                <Link href="/microbit-Relay-microbit.hex" download>
                  <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    sx={{
                      backgroundColor: "#FCD34D",
                      color: "#1E3A8A",
                      '&:hover': {
                        backgroundColor: "#F59E0B"
                      }
                    }}
                  >
                    Download Relay Code
                  </Button>
                </Link>
              </div>
            </div>

            {showDetails && (
              <div className="mt-6 space-y-4">
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: "#FCD34D", 
                    fontWeight: 600,
                  }}
                >
                  Detailed System Information
                </Typography>

                <div className="space-y-4">
                  <div>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: "#FCD34D", 
                        fontWeight: 600,
                      }}
                    >
                      System Overview
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "#FCD34D",
                      }}
                    >
                      The flight data recorder system consists of two micro:bits working together:
                      • Onboard micro:bit mounted on the rocket
                      • Ground station micro:bit connected to a computer
                    </Typography>
                  </div>

                  <div>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: "#FCD34D", 
                        fontWeight: 600,
                      }}
                    >
                      Programming the micro:bits
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "#FCD34D",
                      }}
                    >
                      • Use the Windows 10 MakeCode app or any other micro:bit programming environment
                      • Download the provided .hex files or create your own programs
                      • Upload the code to your micro:bits using the USB cable
                    </Typography>
                  </div>

                  <div>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: "#FCD34D", 
                        fontWeight: 600,
                      }}
                    >
                      Required Equipment
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "#FCD34D",
                      }}
                    >
                      • 2 micro:bits with battery packs
                      • Bottle rocket with nosecone
                      • Bottle rocket launcher
                      • Long USB micro:bit cable
                      • Spreadsheet for data analysis
                    </Typography>
                  </div>

                  <div>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: "#FCD34D", 
                        fontWeight: 600,
                      }}
                    >
                      Technical Details
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "#FCD34D",
                      }}
                    >
                      • Accelerometer range: 8g for high-range measurements
                      • Radio group: Choose any number (both micro:bits must use the same group)
                      • Data transmission: Real-time Z-axis acceleration measurements
                      • Mounting: Secure the onboard micro:bit with masking tape for protection
                    </Typography>
                  </div>

                  <div>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: "#FCD34D", 
                        fontWeight: 600,
                      }}
                    >
                      Data Collection
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "#FCD34D",
                      }}
                    >
                      The system measures acceleration in the Z-axis (vertical direction). Data is:
                      • Collected by the onboard micro:bit
                      • Transmitted via radio
                      • Received by the ground station
                      • Relayed to a computer via USB
                      • Analyzed using spreadsheet software
                    </Typography>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-[#3B82F6] rounded-lg p-6 shadow-lg">
            <Typography 
              variant="h5" 
              sx={{ 
                color: "#FCD34D", 
                fontWeight: 600,
                marginBottom: 2
              }}
            >
              Assembly Guide
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: "#FCD34D",
                marginBottom: 3
              }}
            >
              Step-by-step instructions for assembling your water rocket and setting up the telemetry system.
            </Typography>
            <Button
              variant="contained"
              onClick={() => setShowGuide(!showGuide)}
              sx={{
                backgroundColor: "#FCD34D",
                color: "#1E3A8A",
                '&:hover': {
                  backgroundColor: "#F59E0B"
                }
              }}
            >
              {showGuide ? 'Hide Assembly Guide' : 'View Assembly Guide'}
            </Button>
            
            {showGuide && (
              <div className="mt-4">
                <div className="w-full h-[800px]">
                  <iframe
                    src="/safety+instructions.pdf"
                    className="w-full h-full rounded-lg"
                    title="Safety and Instructions PDF"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 