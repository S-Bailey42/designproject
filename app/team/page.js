'use client';

import Image from "next/image";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const teamMembers = [
  {
    name: "Design Team",
    members: ["Alexey (Lead)", "Alrich", "Partha", "Arthur"],
    contributions: [
      "Create the concept for the rocket package",
      "Design and test a functional rocket using Solidworks CAD and fluid simulation", 
      "3D print and test rocket to ensure package is safe and functional"
    ],
    image: "/designteam.jpg"
  },
  {
    name: "Research Team",
    members: ["James (Lead)", "Prabesh", "Pablo", "Abdul"],
    contributions: [
      "Support the design team with research and testing",
      "Discover the ideal materials for the rocket",
      "Calculate costs involved with the manufacturing of the package"
    ],
    image: "/calcteam.jpg"
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
    image: "/webteam.jpg"
  }
];

export default function Team() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-1 flex justify-center">
              <Typography 
                variant="h6" 
                component="div"
                sx={{ 
                  color: "#FCD34D",
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
          </div>
        </nav>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#FCD34D',
              fontWeight: 600,
              textAlign: 'center',
              mb: 4
            }}
          >
            Our Team
          </Typography>
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/wholeteam.jpg"
              alt="Whole Team"
              fill
              className="object-contain"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  backgroundColor: '#3B82F6',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'none',
                  boxShadow: hoveredCard === index ? '0 10px 20px rgba(0,0,0,0.1)' : 'none',
                  '&:hover': {
                    cursor: 'pointer'
                  },
                  border: '1px solid rgba(252, 211, 77, 0.2)'
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
                        transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                        backgroundColor: '#FCD34D'
                      }}
                    />
                    <Typography variant="h6" sx={{ color: '#FCD34D' }}>
                      {member.name}
                    </Typography>
                    <div className="text-center">
                      {member.members.map((name, idx) => (
                        <Typography key={idx} variant="subtitle1" sx={{ color: '#FCD34D' }}>
                          {name}
                        </Typography>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Typography variant="subtitle2" sx={{ color: '#FCD34D', fontWeight: 600, mb: 1 }}>
                        Key Contributions:
                      </Typography>
                      <ul className="list-disc pl-5">
                        {member.contributions.map((contribution, idx) => (
                          <li key={idx} className="text-sm text-slate-200 mb-1">
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
              color: '#FCD34D',
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
              border: '1px solid rgba(252, 211, 77, 0.2)'
            }}
          >
            <div className="flex justify-center">
              <Image
                src="/gantt-chart.jpg"
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
                color: '#FCD34D',
                textAlign: 'center',
                mt: 2
              }}
            >
              Our project timeline showing key milestones and progress tracking
            </Typography>
          </Card>
        </div>
      </main>
    </div>
  );
}
