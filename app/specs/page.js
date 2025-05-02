'use client';

import Image from "next/image";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Specifications() {
    const router = useRouter();

    const specifications = [
        { category: 'Dimensions', detail: '30cm height × 10cm diameter' },
        { category: 'Weight (Empty)', detail: '250g' },
        { category: 'Water Capacity', detail: '2 liters' },
        { category: 'Max Pressure', detail: '80 PSI' },
        { category: 'Flight Time', detail: '15-20 seconds' },
        { category: 'Max Height', detail: '200+ feet' },
        { category: 'Recovery System', detail: 'Parachute deployment (maybe)' },
        { category: 'Construction', detail: 'PLA' },
    ];

    const materialsData = [
        {
            material: 'PLA',
            density: 1240,
            youngsModulus: 3.5,
            tensileStrength: 60,
            elongation: 6,
            glassTemp: 60,
            cost: 20,
            printability: 'Excellent'
        },
        {
            material: 'ABS',
            density: 1040,
            youngsModulus: 2.1,
            tensileStrength: 40,
            elongation: 10,
            glassTemp: 105,
            cost: 25,
            printability: 'Good'
        },
        {
            material: 'PETG',
            density: 1270,
            youngsModulus: 2.2,
            tensileStrength: 50,
            elongation: 15,
            glassTemp: 80,
            cost: 22,
            printability: 'Very Good'
        },
        {
            material: 'Nylon',
            density: 1150,
            youngsModulus: 1.2,
            tensileStrength: 45,
            elongation: 50,
            glassTemp: 50,
            cost: 30,
            printability: 'Moderate'
        },
        {
            material: 'PC',
            density: 1200,
            youngsModulus: 2.0,
            tensileStrength: 60,
            elongation: 6,
            glassTemp: 150,
            cost: 35,
            printability: 'Fair'
        }
    ];

    return (
        <div className="min-h-screen p-4 md:p-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 flex items-center">
                    <IconButton
                        onClick={() => router.push('/')}
                        sx={{
                            color: "#6B7280",
                            marginRight: 2,
                            '&:hover': {
                                backgroundColor: 'rgba(107, 114, 128, 0.1)'
                            }
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography
                        variant="h4"
                        sx={{
                            color: "#1F2937",
                            fontWeight: 700,
                            fontSize: { xs: '1.5rem', sm: '2rem' }
                        }}
                    >
                        Technical Specifications
                    </Typography>
                </div>

                <div className="grid gap-8">
                    <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/Launch_of_Water_rocket.jpg"
                            alt="Water Rocket Technical Diagram"
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    <div className="overflow-x-auto">
                        <TableContainer
                            component={Paper}
                            sx={{
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                borderRadius: '0.5rem'
                            }}
                        >
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#F3F4F6' }}>
                                        <TableCell sx={{ fontWeight: 600, color: '#374151' }}>
                                            Feature
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: 600, color: '#374151' }}>
                                            Specification
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {specifications.map((spec, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                '&:hover': { backgroundColor: '#F9FAFB' },
                                                transition: 'background-color 0.2s'
                                            }}
                                        >
                                            <TableCell sx={{ color: '#4B5563' }}>{spec.category}</TableCell>
                                            <TableCell sx={{ color: '#6B7280' }}>{spec.detail}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#1F2937",
                                fontWeight: 600,
                                marginBottom: 2
                            }}
                        >
                            Safety Features
                        </Typography>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Pressure release valve for safety</li>
                            <li>Reinforced nozzle construction</li>
                            <li>Impact-resistant materials</li>
                            <li>Fail-safe parachute deployment mechanism</li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#1F2937",
                                fontWeight: 600,
                                marginBottom: 3
                            }}
                        >
                            Materials Research
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "#4B5563",
                                marginBottom: 4
                            }}
                        >
                            We had to idenitfy a material that provides high stiffness, low density, excellent dimensional accuracy,
                            and reliable 3D printability. The following table presents five candidate materials and their key properties.
                            These values have been gathered from aerospace materials databases and published literature.
                        </Typography>

                        <div className="overflow-x-auto">
                            <TableContainer
                                component={Paper}
                                sx={{
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                    borderRadius: '0.5rem',
                                    marginBottom: 4,
                                    minWidth: 650
                                }}
                            >
                                <Table size="small">
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: '#F3F4F6' }}>
                                            <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Material</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Density</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Young's Mod.</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Tensile Str.</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Elongation</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Glass Temp</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Cost</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Printability</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {materialsData.map((material, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{
                                                    '&:hover': { backgroundColor: '#F9FAFB' },
                                                    transition: 'background-color 0.2s'
                                                }}
                                            >
                                                <TableCell sx={{ color: '#4B5563', fontWeight: 500 }}>{material.material}</TableCell>
                                                <TableCell sx={{ color: '#6B7280' }}>{material.density}</TableCell>
                                                <TableCell sx={{ color: '#6B7280' }}>{material.youngsModulus}</TableCell>
                                                <TableCell sx={{ color: '#6B7280' }}>{material.tensileStrength}</TableCell>
                                                <TableCell sx={{ color: '#6B7280' }}>{material.elongation}%</TableCell>
                                                <TableCell sx={{ color: '#6B7280' }}>{material.glassTemp}°C</TableCell>
                                                <TableCell sx={{ color: '#6B7280' }}>${material.cost}</TableCell>
                                                <TableCell sx={{ color: '#6B7280' }}>{material.printability}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                        {/* Material Selection Rationale */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#1F2937",
                                    fontWeight: 600,
                                    marginBottom: 2
                                }}
                            >
                                Material Selection Rationale
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#4B5563', marginBottom: 2 }}>
                                Based on our research, PLA emerges as an optimal choice for water rocket construction due to:
                            </Typography>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Ease of 3D Printing: PLA is well-known for its dimensional accuracy, low warping, and ease of use in academic settings.</li>
                                <li>Cost-Effectiveness: Its affordability supports budget constraints while delivering consistent performance.</li>
                                <li>Mechanical Performance: The combination of high stiffness and tensile strength makes PLA an excellent candidate for aerodynamic components that must remain precise under load.</li>
                                <li>Surface Finish: Achieving a smooth surface finish post-printing is critical for reducing aerodynamic drag—a key factor for flight performance.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}