import React from 'react';

export default function TestingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#FCD34D] mb-6">Testing Results</h1>
      
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-[#FCD34D] mb-4">Volume and Pressure Optimization</h2>
        <p className="text-gray-300 mb-4">
          Through extensive testing of various water volumes and pressure combinations, we&apos;ve identified the optimal configuration for maximum thrust. Our testing methodology involved:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Testing water volumes ranging from 400ml to 1100ml</li>
          <li>Pressure variations from 3 to 5 bar</li>
          <li>Multiple launch attempts for each configuration</li>
          <li>Precise measurement of launch height and stability</li>
        </ul>
        <p className="text-gray-300 mb-4">
          The results, detailed in the report below, demonstrate that our optimal configuration achieves the perfect balance between water volume and pressure, resulting in maximum thrust while maintaining stability during launch.
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-[#FCD34D] mb-4">Acceleration Data</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-gray-300">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="px-4 py-2 text-left">Water Volume (ml)</th>
                <th className="px-4 py-2 text-left">Air Pressure (bar)</th>
                <th className="px-4 py-2 text-left">Average Velocity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">710</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">86.1</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">710</td>
                <td className="px-4 py-2">6</td>
                <td className="px-4 py-2">126.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-[#FCD34D] mb-4">Thrust Testing Results</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-gray-300">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="px-4 py-2 text-left">Water Volume (ml)</th>
                <th className="px-4 py-2 text-left">Air Pressure (bar)</th>
                <th className="px-4 py-2 text-left">Max Thrust (N)</th>
                <th className="px-4 py-2 text-left">Thrust Duration (s)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">710</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">310</td>
                <td className="px-4 py-2">0.25</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">830</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">191.11</td>
                <td className="px-4 py-2">0.15</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">910</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">360.4</td>
                <td className="px-4 py-2">0.25</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">910</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">249</td>
                <td className="px-4 py-2">0.2</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">910</td>
                <td className="px-4 py-2">5</td>
                <td className="px-4 py-2">248</td>
                <td className="px-4 py-2">0.2</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">975</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">242.3</td>
                <td className="px-4 py-2">0.15</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">1109</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">208.18</td>
                <td className="px-4 py-2">0.2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-[#FCD34D] mb-4">Cost Analysis</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-[#FCD34D] mb-2">Material Costs</h3>
              <ul className="text-gray-300 space-y-2">
                <li>PET Cost: £8.43 (0.561kg at £15/kg)</li>
                <li>Printing Electricity: Negligible</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-[#FCD34D] mb-2">Time Investment</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Printing Time: 7 hours</li>
                <li>Development Time: 3 months</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-[#FCD34D] mb-4">Test Results Report</h2>
        <div className="aspect-[4/3] w-full">
          <iframe
            src="/ideal-volume-pressure-test.pdf"
            className="w-full h-full rounded-lg"
            title="Volume and Pressure Test Results"
          />
        </div>
      </div>
    </div>
  );
} 