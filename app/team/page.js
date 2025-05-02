'use client';

import Image from "next/image";
import * as React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const teamMembers = [
  {
    name: "Design Team",
    members: ["Alexey (Lead)", "Partha", "Partha", "Arthur"],
    contributions: [
      "Create the concept for the rocket package",
      "Design and test a functional rocket using Solidworks CAD and fluid simulation", 
      "3D print and test rocket to ensure package is safe and functional"
    ],
    image: "/placeholder1.jpg"
  },
  {
    name: "Research Team",
    members: ["James (Lead)", "Prabesh", "Pablo", "Abdul"],
    contributions: [
      "Support the design team with research and testing",
      "Discover the ideal materials for the rocket",
      "Calculate costs involved with the manufacturing of the package"
    ],
    image: "/placeholder2.jpg"
  },
  {
    name: "Communications and Marketing Team", 
    members: ["Sam (Lead)", "Krishna",],
    contributions: [
      "Develop a website to showcase our product",
      "Handle planning for any presentations",
      "Create a unique identity for the team and product",
      "Handle feedback and adjust accordingly"
    ],
    image: "/placeholder3.jpg"
  }
];

export default function Team() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [hoveredButton, setHoveredButton] = React.useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ 
                  color: "#94A3B8",
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
                  color: "#94A3B8",
                  fontWeight: 600,
                  letterSpacing: "0.025em",
                  cursor: 'default',
                  transition: 'transform 0.2s',
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  '&:hover': {
                    transform: 'translateX(-50%) scale(1.05)'
                  }
                }}
              >
                MEET THE TEAM
              </Typography>
            </div>

            <div className="flex items-center">
              <Button 
                variant="contained"
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
                sx={{ 
                  backgroundColor: "#60A5FA",
                  transition: 'all 0.3s ease',
                  transform: hoveredButton ? 'translateY(-2px)' : 'none',
                  boxShadow: hoveredButton ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                  '&:hover': {
                    backgroundColor: "#3B82F6"
                  }
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  backgroundColor: 'transparent',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'none',
                  boxShadow: hoveredCard === index ? '0 10px 20px rgba(0,0,0,0.1)' : 'none',
                  '&:hover': {
                    cursor: 'pointer'
                  },
                  border: '1px solid rgba(148, 163, 184, 0.1)'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent>
                  <div className="flex flex-col items-center gap-4">
                    <Avatar
                      src={member.image}
                      sx={{ 
                        width: 120, 
                        height: 120,
                        transition: 'transform 0.3s ease',
                        transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
                      }}
                    />
                    <Typography variant="h6" sx={{ color: '#94A3B8' }}>
                      {member.name}
                    </Typography>
                    <div className="text-center">
                      {member.members.map((name, idx) => (
                        <Typography key={idx} variant="subtitle1" sx={{ color: '#94A3B8' }}>
                          {name}
                        </Typography>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Typography variant="subtitle2" sx={{ color: '#94A3B8', fontWeight: 600, mb: 1 }}>
                        Key Contributions:
                      </Typography>
                      <ul className="list-disc pl-5">
                        {member.contributions.map((contribution, idx) => (
                          <li key={idx} className="text-sm text-slate-400 mb-1">
                            {contribution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className="mt-16">
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#94A3B8',
              fontWeight: 600,
              textAlign: 'center',
              mb: 4,
              mt: 2,
              transition: 'color 0.3s ease',
              '&:hover': {
                color: "#60A5FA"
              }
            }}
          >
            Project Timeline & Progress
          </Typography>
          <Card 
            sx={{ 
              backgroundColor: 'transparent', 
              p: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.01)'
              },
              border: '1px solid rgba(148, 163, 184, 0.1)'
            }}
          >
            <div className="flex justify-center">
              <Image
                src="/Gantt chart.jfif"
                alt="Project Gantt Chart"
                width={1000}
                height={500}
                className="rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#94A3B8',
                textAlign: 'center',
                mt: 2
              }}
            >
              Our project timeline showing key milestones and progress tracking
            </Typography>
          </Card>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-[#94A3B8]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-transform duration-200 hover:scale-105"
          href="/"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Home
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-transform duration-200 hover:scale-105"
          href="/product"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Product
        </a>
      </footer>
    </div>
  );
}
