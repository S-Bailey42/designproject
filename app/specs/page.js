'use client';

import Image from "next/image";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Specs() {
    const router = useRouter();
    const [isHovered, setIsHovered] = React.useState(false);

    const specifications = [
        { category: 'Dimensions', detail: '36cm height × 10.2cm diameter' },
        { category: 'Weight (Empty)', detail: '250g' },
        { category: 'Water Capacity', detail: '2 liters' },
        { category: 'Max Pressure', detail: '5 bar' },
        { category: 'Flight Time', detail: '15-20 seconds' },
        { category: 'Max Height', detail: '200+ feet' },
        { category: 'Construction', detail: 'PET' },
    ];

    const materialsData = [
        {
            material: 'PET',
            density: 1350,
            youngsModulus: 9,
            tensileStrength: 150,
            yieldStrength: 40,
            elongation: 32,
            cost: 1.52,
            printability: 'Very good'
        },
        {
            material: 'HDPE',
            density: 950,
            youngsModulus: 0.8,
            tensileStrength: 28,
            yieldStrength: 33,
            elongation: 367,
            cost: 0.93,
            printability: 'Good'
        },
        {
            material: 'LDPE',
            density: 920,
            youngsModulus: 0.3,
            tensileStrength: 20,
            yieldStrength: 10,
            elongation: 200,
            cost: 1.19,
            printability: 'Do-able'
        },
        {
            material: 'LDF',
            density: 350,
            youngsModulus: 0,
            tensileStrength: 1.94,
            yieldStrength: 0,
            elongation: 0,
            cost: 1.94,
            printability: 'No (machinable)'
        },
        {
            material: 'MDF',
            density: 700,
            youngsModulus: 4,
            tensileStrength: 18,
            yieldStrength: 0,
            elongation: 0,
            cost: 'N/A',
            printability: 'No (machinable)'
        },
        {
            material: 'HDF',
            density: 900,
            youngsModulus: 10.5,
            tensileStrength: 35,
            yieldStrength: 25,
            elongation: 0,
            cost: 'N/A',
            printability: 'No (machinable)'
        }
    ];

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
        },
        {
            name: 'Fin Sleeve',
            volume: '184705.679 mm³',
            mass: '0.231 kg',
            weight: '2.27 N',
            dimensions: '11.7cm × 11cm',
            surfaceArea: '0.00351383 m²'
        },
        {
            name: 'Fin (Single)',
            volume: '19241.25 mm³',
            mass: '0.02 kg',
            weight: '0.196 N',
            dimensions: '10cm-3cm × 7.5cm',
            surfaceArea: 'N/A'
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

    const materialSelection = {
        title: "Material Selection Analysis",
        description: "After extensive evaluation of various materials, PET (Polyethylene terephthalate) was selected as the optimal choice for our water rocket. Key factors in this decision include:",
        points: [
            "Superior tensile strength (150 MPa) compared to alternatives",
            "Excellent 3D printability for easy manufacturing",
            "Cost-effective at $1.52/kg",
            "High density (1350 kg/m³) providing structural integrity",
            "Good balance of strength and flexibility (32% elongation)"
        ],
        conclusion: "While other materials like HDPE and LDPE offer good printability, their lower tensile strength makes them less suitable for high-pressure applications. Wood-based materials (LDF, MDF, HDF) were excluded due to their lower tensile strength and higher manufacturing complexity."
    };

    return (
        <div className="min-h-screen p-2 sm:p-4 md:p-8 bg-gray-900 text-white">
            <header className="w-full mb-4 sm:mb-8">
                <nav className="max-w-7xl mx-auto px-2 sm:px-4">
                    <div className="flex justify-between items-center h-12 sm:h-16">
                        <div className="flex-1 flex justify-center">
                            <Typography 
                                variant="h6" 
                                component="div"
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
                            </Typography>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="max-w-6xl mx-auto">
                <div className="mb-4 sm:mb-8">
                    <div className="bg-[#3B82F6] p-3 sm:p-6 rounded-lg shadow-lg mb-4 sm:mb-8">
                        <Typography variant="h6" sx={{ color: "#FCD34D", fontWeight: 600, mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                            Key Features
                        </Typography>
                        <div className="overflow-x-auto">
                            <TableContainer>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: '#2563EB' }}>
                                            <TableCell sx={{ fontWeight: 600, color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Feature</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Specification</TableCell>
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
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{spec.category}</TableCell>
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{spec.detail}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>

                    <div className="bg-[#3B82F6] p-3 sm:p-6 rounded-lg shadow-lg mb-4 sm:mb-8">
                        <Typography variant="h6" sx={{ color: "#FCD34D", fontWeight: 600, mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                            Component Measurements
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#FCD34D", mb: 3, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                            Note: Fin measurements are for a single fin. The rocket uses 4 identical fins.
                        </Typography>
                        <div className="overflow-x-auto">
                            <TableContainer>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Component</TableCell>
                                            <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Volume</TableCell>
                                            <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Mass</TableCell>
                                            <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Weight</TableCell>
                                            <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Dimensions</TableCell>
                                            <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Surface Area</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {componentMeasurements.map((component, index) => (
                                            <TableRow key={index}>
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{component.name}</TableCell>
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{component.volume}</TableCell>
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{component.mass}</TableCell>
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{component.weight}</TableCell>
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{component.dimensions}</TableCell>
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{component.surfaceArea}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>

                    <div className="bg-[#3B82F6] p-3 sm:p-6 rounded-lg shadow-lg mb-4 sm:mb-8">
                        <Typography variant="h6" sx={{ color: "#FCD34D", fontWeight: 600, mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                            Rocket Variants Comparison
                        </Typography>
                        <div className="overflow-x-auto">
                            <TableContainer>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Variant</TableCell>
                                            <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Volume</TableCell>
                                            <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Mass</TableCell>
                                            <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Weight</TableCell>
                                            <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Surface Area</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rocketVariants.map((variant, index) => (
                                            <TableRow key={index}>
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{variant.name}</TableCell>
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{variant.volume}</TableCell>
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{variant.mass}</TableCell>
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{variant.weight}</TableCell>
                                                <TableCell sx={{ color: '#FCD34D', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{variant.surfaceArea}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>

                    <div className="bg-[#3B82F6] p-3 sm:p-6 rounded-lg shadow-lg mb-4 sm:mb-8">
                        <Typography variant="h6" sx={{ color: "#FCD34D", fontWeight: 600, mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                            Performance Specifications
                        </Typography>
                        <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-[#FCD34D] text-sm sm:text-base">
                            <li>Compressed Air Pressure: 8 bar (800,000 Pascals)</li>
                            <li>Thrust Generated: Approximately 1700N</li>
                            <li>Air Resistance: Varies by cone cross-section</li>
                        </ul>
                    </div>

                    <div className="bg-[#3B82F6] p-3 sm:p-6 rounded-lg shadow-lg mb-4 sm:mb-8">
                        <Typography variant="h6" sx={{ color: "#FCD34D", fontWeight: 600, mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                            Safety Features
                        </Typography>
                        <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-[#FCD34D] text-sm sm:text-base">
                            <li>Pressure release valve for safety</li>
                            <li>Reinforced nozzle construction</li>
                            <li>Impact-resistant materials</li>
                        </ul>
                    </div>

                    <div className="mt-4 sm:mt-8">
                        <Typography variant="h5" sx={{ color: "#FFFFFF", fontWeight: 600, mb: 2, sm: { mb: 3 }, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                            Materials Research
                        </Typography>

                        <Typography variant="body1" sx={{ color: "#FFFFFF", mb: 3, sm: { mb: 4 }, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                            We had to identify a material that provides high stiffness, low density, excellent dimensional accuracy,
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
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Material</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Density (kg/m³)</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Young&apos;s Modulus (GPa)</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Tensile Strength (MPa)</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Yield Strength (MPa)</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Elongation (%)</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Cost (USD/kg)</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Printability</TableCell>
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
                                                <TableCell sx={{ color: '#FFFFFF', fontWeight: 500, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{material.material}</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{material.density}</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{material.youngsModulus}</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{material.tensileStrength}</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{material.yieldStrength}</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{material.elongation}</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{material.cost}</TableCell>
                                                <TableCell sx={{ color: '#FFFFFF', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{material.printability}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                        <div className="bg-[#3B82F6] p-3 sm:p-6 rounded-lg shadow-lg">
                            <Typography variant="h6" sx={{ color: "#FCD34D", fontWeight: 600, mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                                Material Selection Rationale
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#FFFFFF', mb: 2, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                                {materialSelection.description}
                            </Typography>
                            <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-[#FCD34D] mb-3 sm:mb-4 text-sm sm:text-base">
                                {materialSelection.points.map((point, index) => (
                                    <li key={index} className="mb-1 sm:mb-2">{point}</li>
                                ))}
                            </ul>
                            <Typography variant="body2" sx={{ color: '#FFFFFF', mb: 2, sm: { mb: 3 }, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                                {materialSelection.conclusion}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}