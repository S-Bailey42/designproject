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
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

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
            cost: 16,
            printability: 'Excellent'
        },
        {
            material: 'ABS',
            density: 1040,
            youngsModulus: 2.1,
            tensileStrength: 40,
            elongation: 10,
            glassTemp: 105,
            cost: 20,
            printability: 'Good'
        },
        {
            material: 'PETG',
            density: 1270,
            youngsModulus: 2.2,
            tensileStrength: 50,
            elongation: 15,
            glassTemp: 80,
            cost: 18,
            printability: 'Very Good'
        },
        {
            material: 'Nylon',
            density: 1150,
            youngsModulus: 1.2,
            tensileStrength: 45,
            elongation: 50,
            glassTemp: 50,
            cost: 24,
            printability: 'Moderate'
        },
        {
            material: 'PC',
            density: 1200,
            youngsModulus: 2.0,
            tensileStrength: 60,
            elongation: 6,
            glassTemp: 150,
            cost: 28,
            printability: 'Fair'
        }
    ];

    const componentMeasurements = [
        {
            name: 'Fin',
            volume: '166268.21 mm³',
            mass: '0.2078 kg',
            weight: '2.039 N',
            surfaceArea: '0.04 m²'
        },
        {
            name: 'Peg',
            volume: '1839.75 mm³',
            mass: '0.00219493 kg',
            weight: '0.2153 N',
            surfaceArea: '0.00183975 m²'
        },
        {
            name: 'Bottle',
            volume: '2000 cm³',
            mass: '2 kg',
            weight: '19.62 N',
            dimensions: '31.5cm × 11cm, Cap: 2.6cm'
        }
    ];

    const rocketVariants = [
        {
            name: 'Cone 1 Hemisphere',
            volume: '0.0076223 m³',
            mass: '9.0272 kg',
            weight: '88.557 N',
            surfaceArea: '0.586 m²'
        },
        {
            name: 'Cone 2 Arrowhead A (Short)',
            volume: '0.0078924 m³',
            mass: '9.3612 kg',
            weight: '91.833 N',
            surfaceArea: '0.612 m²'
        },
        {
            name: 'Cone 2 Arrowhead B (Long)',
            volume: '0.0096573 m³',
            mass: '11.5712 kg',
            weight: '113.513 N',
            surfaceArea: '0.751 m²'
        },
        {
            name: 'Cone 3 Blunt Arrowhead A (Short)',
            volume: '0.0082257 m³',
            mass: '9.7822 kg',
            weight: '95.962 N',
            surfaceArea: '0.638 m²'
        },
        {
            name: 'Cone 3 Blunt Arrowhead B (Long)',
            volume: '0.010260 m³',
            mass: '12.3252 kg',
            weight: '120.910 N',
            surfaceArea: '0.799 m²'
        },
        {
            name: 'Cone 4 FMJ A (Short)',
            volume: '0.0097912 m³',
            mass: '11.7392 kg',
            weight: '115.162 N',
            surfaceArea: '0.759 m²'
        },
        {
            name: 'Cone 4 FMJ B (Long)',
            volume: '0.012454 m³',
            mass: '15.0672 kg',
            weight: '147.809 N',
            surfaceArea: '0.973 m²'
        }
    ];

    return (
        <div className="min-h-screen p-4 md:p-8 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 flex items-center">
                    <IconButton
                        size="small"
                        edge="start"
                        aria-label="menu"
                        sx={{ 
                            color: "#FCD34D",
                            transition: 'transform 0.2s',
                            '&:hover': {
                                transform: 'rotate(45deg)'
                            }
                        }}
                        onClick={() => router.push('/home')}
                    >
                        <RocketLaunchIcon sx={{ fontSize: "24px" }} />
                    </IconButton>
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
                        SPECIFICATIONS
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

                    <div className="bg-[#3B82F6] p-6 rounded-lg shadow-lg">
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#FCD34D",
                                fontWeight: 600,
                                marginBottom: 2
                            }}
                        >
                            Key Features
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#2563EB' }}>
                                        <TableCell sx={{ fontWeight: 600, color: '#FCD34D' }}>
                                            Feature
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: 600, color: '#FCD34D' }}>
                                            Specification
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {specifications.map((spec, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                '&:hover': { backgroundColor: '#2563EB' },
                                                transition: 'background-color 0.2s'
                                            }}
                                        >
                                            <TableCell sx={{ color: '#FCD34D' }}>{spec.category}</TableCell>
                                            <TableCell sx={{ color: '#FCD34D' }}>{spec.detail}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                    <div className="bg-[#3B82F6] p-6 rounded-lg shadow-lg">
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#FCD34D",
                                fontWeight: 600,
                                marginBottom: 2
                            }}
                        >
                            Component Measurements
                        </Typography>
                        <TableContainer>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ color: '#FCD34D' }}>Component</TableCell>
                                        <TableCell sx={{ color: '#FCD34D' }}>Volume</TableCell>
                                        <TableCell sx={{ color: '#FCD34D' }}>Mass</TableCell>
                                        <TableCell sx={{ color: '#FCD34D' }}>Weight</TableCell>
                                        <TableCell sx={{ color: '#FCD34D' }}>Surface Area</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {componentMeasurements.map((component, index) => (
                                        <TableRow key={index}>
                                            <TableCell sx={{ color: '#FCD34D' }}>{component.name}</TableCell>
                                            <TableCell sx={{ color: '#FCD34D' }}>{component.volume}</TableCell>
                                            <TableCell sx={{ color: '#FCD34D' }}>{component.mass}</TableCell>
                                            <TableCell sx={{ color: '#FCD34D' }}>{component.weight}</TableCell>
                                            <TableCell sx={{ color: '#FCD34D' }}>{component.surfaceArea}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                    <div className="bg-[#3B82F6] p-6 rounded-lg shadow-lg">
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#FCD34D",
                                fontWeight: 600,
                                marginBottom: 2
                            }}
                        >
                            Rocket Variants Comparison
                        </Typography>
                        <TableContainer>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ color: '#FCD34D' }}>Variant</TableCell>
                                        <TableCell sx={{ color: '#FCD34D' }}>Volume</TableCell>
                                        <TableCell sx={{ color: '#FCD34D' }}>Mass</TableCell>
                                        <TableCell sx={{ color: '#FCD34D' }}>Weight</TableCell>
                                        <TableCell sx={{ color: '#FCD34D' }}>Surface Area</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rocketVariants.map((variant, index) => (
                                        <TableRow key={index}>
                                            <TableCell sx={{ color: '#FCD34D' }}>{variant.name}</TableCell>
                                            <TableCell sx={{ color: '#FCD34D' }}>{variant.volume}</TableCell>
                                            <TableCell sx={{ color: '#FCD34D' }}>{variant.mass}</TableCell>
                                            <TableCell sx={{ color: '#FCD34D' }}>{variant.weight}</TableCell>
                                            <TableCell sx={{ color: '#FCD34D' }}>{variant.surfaceArea}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                    <div className="bg-[#3B82F6] p-6 rounded-lg shadow-lg">
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#FCD34D",
                                fontWeight: 600,
                                marginBottom: 2
                            }}
                        >
                            Performance Specifications
                        </Typography>
                        <ul className="list-disc pl-6 space-y-2 text-[#FCD34D]">
                            <li>Compressed Air Pressure: 8 bar (800,000 Pascals)</li>
                            <li>Thrust Generated: Approximately 1700N</li>
                            <li>Air Resistance: Varies by cone cross-section</li>
                        </ul>
                    </div>

                    <div className="bg-[#3B82F6] p-6 rounded-lg shadow-lg">
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#FCD34D",
                                fontWeight: 600,
                                marginBottom: 2
                            }}
                        >
                            Safety Features
                        </Typography>
                        <ul className="list-disc pl-6 space-y-2 text-[#FCD34D]">
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
                                color: "#FFFFFF",
                                fontWeight: 600,
                                marginBottom: 3
                            }}
                        >
                            Materials Research
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "#FFFFFF",
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
                                    minWidth: 650,
                                    backgroundColor: '#1F2937'
                                }}
                            >
                                <Table size="small">
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: '#374151' }}>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF' }}>Material</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF' }}>Density</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF' }}>Young's Mod.</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF' }}>Tensile Str.</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF' }}>Elongation</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF' }}>Glass Temp</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF' }}>Cost</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF' }}>Printability</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {materialsData.map((material, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{
                                                    '&:hover': { backgroundColor: '#374151' },
                                                    transition: 'background-color 0.2s'
                                                }}
                                            >
                                                <TableCell sx={{ color: '#FFFFFF', fontWeight: 500 }}>{material.material}</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF' }}>{material.density}</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF' }}>{material.youngsModulus}</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF' }}>{material.tensileStrength}</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF' }}>{material.elongation}%</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF' }}>{material.glassTemp}°C</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF' }}>£{material.cost}</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF' }}>{material.printability}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                        {/* Material Selection Rationale */}
                        <div className="bg-[#3B82F6] p-6 rounded-lg shadow-lg">
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#FCD34D",
                                    fontWeight: 600,
                                    marginBottom: 2
                                }}
                            >
                                Material Selection Rationale
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#FFFFFF', marginBottom: 2 }}>
                                Based on our research, PLA emerges as an optimal choice for water rocket construction due to:
                            </Typography>
                            <ul className="list-disc pl-6 space-y-2 text-[#FCD34D]">
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