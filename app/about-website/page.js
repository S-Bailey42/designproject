'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';

export default function AboutWebsite() {
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
                    About This Website
                </Typography>

                <div className="space-y-8">
                    <div className="bg-[#3B82F6] rounded-lg p-6 shadow-lg">
                        <div className="flex items-center gap-2 mb-4">
                            <CodeIcon sx={{ color: "#FCD34D", fontSize: 28 }} />
                            <Typography 
                                variant="h5" 
                                sx={{ 
                                    color: "#FCD34D", 
                                    fontWeight: 600
                                }}
                            >
                                Development Stack
                            </Typography>
                        </div>
                        <div className="space-y-4 text-[#FCD34D]">
                            <div>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                                    Frontend Framework
                                </Typography>
                                <Typography variant="body1">
                                    • Next.js 14 (React Framework)
                                    <br />
                                    • Material-UI (MUI) for component styling
                                    <br />
                                    • Tailwind CSS for custom styling
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                                    Development Tools
                                </Typography>
                                <Typography variant="body1">
                                    • Visual Studio Code
                                    <br />
                                    • Git for version control
                                    <br />
                                    • npm for package management
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#3B82F6] rounded-lg p-6 shadow-lg">
                        <div className="flex items-center gap-2 mb-4">
                            <StorageIcon sx={{ color: "#FCD34D", fontSize: 28 }} />
                            <Typography 
                                variant="h5" 
                                sx={{ 
                                    color: "#FCD34D", 
                                    fontWeight: 600
                                }}
                            >
                                Development Environment
                            </Typography>
                        </div>
                        <div className="space-y-4 text-[#FCD34D]">
                            <Typography variant="body1">
                                The website was developed using a modern development environment:
                            </Typography>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Node.js runtime environment</li>
                                <li>Next.js development server with hot reloading</li>
                                <li>ESLint for code quality and consistency</li>
                                <li>Prettier for code formatting</li>
                                <li>Responsive design testing across multiple devices</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-[#3B82F6] rounded-lg p-6 shadow-lg">
                        <div className="flex items-center gap-2 mb-4">
                            <GitHubIcon sx={{ color: "#FCD34D", fontSize: 28 }} />
                            <Typography 
                                variant="h5" 
                                sx={{ 
                                    color: "#FCD34D", 
                                    fontWeight: 600
                                }}
                            >
                                GitHub Repository
                            </Typography>
                        </div>
                        <div className="space-y-4 text-[#FCD34D]">
                            <Typography variant="body1">
                                The project is hosted on GitHub, providing:
                            </Typography>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Version control and change tracking</li>
                                <li>Issue tracking and project management</li>
                                <li>Collaborative development features</li>
                                <li>Code review and pull request workflow</li>
                            </ul>
                            <Link 
                                href="https://github.com/S-Bailey42/designproject" 
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ 
                                    color: "#FCD34D",
                                    textDecoration: 'underline',
                                    '&:hover': {
                                        color: "#F59E0B"
                                    }
                                }}
                            >
                                View Repository on GitHub
                            </Link>
                        </div>
                    </div>

                    <div className="bg-[#3B82F6] rounded-lg p-6 shadow-lg">
                        <div className="flex items-center gap-2 mb-4">
                            <CloudIcon sx={{ color: "#FCD34D", fontSize: 28 }} />
                            <Typography 
                                variant="h5" 
                                sx={{ 
                                    color: "#FCD34D", 
                                    fontWeight: 600
                                }}
                            >
                                Deployment
                            </Typography>
                        </div>
                        <div className="space-y-4 text-[#FCD34D]">
                            <Typography variant="body1">
                                The website is deployed on Vercel, offering:
                            </Typography>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Automatic deployments from GitHub</li>
                                <li>Global CDN for fast content delivery</li>
                                <li>SSL/TLS encryption</li>
                                <li>Continuous deployment pipeline</li>
                                <li>Environment variable management</li>
                            </ul>
                            <Link 
                                href="https://vercel.com" 
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ 
                                    color: "#FCD34D",
                                    textDecoration: 'underline',
                                    '&:hover': {
                                        color: "#F59E0B"
                                    }
                                }}
                            >
                                Learn More About Vercel
                            </Link>
                        </div>
                    </div>

                    <div className="bg-[#3B82F6] rounded-lg p-6 shadow-lg">
                        <div className="flex items-center gap-2 mb-4">
                            <TerminalIcon sx={{ color: "#FCD34D", fontSize: 28 }} />
                            <Typography 
                                variant="h5" 
                                sx={{ 
                                    color: "#FCD34D", 
                                    fontWeight: 600
                                }}
                            >
                                Code Examples
                            </Typography>
                        </div>
                        <div className="space-y-6 text-[#FCD34D]">
                            <div>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                                    Navigation Component
                                </Typography>
                                <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                                    <pre className="text-sm">
                                        <code>{`// Client-side navigation component
export default function ClientLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Introduction', path: '/group-work' },
    { name: 'Team', path: '/team' },
    // ... more navigation items
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <IconButton onClick={toggleSidebar}>
        <RocketLaunchIcon />
      </IconButton>
      {/* Sidebar and main content */}
    </div>
  );
}`}</code>
                                    </pre>
                                </div>
                            </div>

                            <div>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                                    Component Styling with MUI
                                </Typography>
                                <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                                    <pre className="text-sm">
                                        <code>{`// Example of Material-UI component styling
<Typography 
  variant="h6" 
  sx={{ 
    color: "#FCD34D",
    fontWeight: 600,
    letterSpacing: "0.025em",
    fontSize: { xs: '0.875rem', sm: '1rem' },
    cursor: 'default',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    '&:hover': {
      transform: 'translateX(-50%) scale(1.05)'
    }
  }}
>
  SPECIFICATIONS
</Typography>`}</code>
                                    </pre>
                                </div>
                            </div>

                            <div>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                                    Data Structure Example
                                </Typography>
                                <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                                    <pre className="text-sm">
                                        <code>{`// Component measurements data structure
const componentMeasurements = [
  {
    name: 'Bottle',
    volume: '2000 cm³',
    mass: '0.05 kg',
    weight: '0.49 N',
    dimensions: '36cm × 10.2cm',
    surfaceArea: 'N/A'
  },
  {
    name: 'Cone',
    volume: '313303.718 mm³',
    mass: '0.313 kg',
    weight: '3.07 N',
    dimensions: '15.5cm × 16.8cm',
    surfaceArea: '0.00174 m²'
  }
  // ... more components
];`}</code>
                                    </pre>
                                </div>
                            </div>

                            <div>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                                    Responsive Design with Tailwind
                                </Typography>
                                <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                                    <pre className="text-sm">
                                        <code>{`// Example of responsive design classes
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div className="p-4 bg-[#3B82F6] rounded-lg 
    transition-all duration-300 
    hover:bg-[#2563EB] hover:shadow-xl 
    hover:scale-105 cursor-pointer">
    {/* Component content */}
  </div>
</div>`}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 