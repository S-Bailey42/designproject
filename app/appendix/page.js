'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';

// Logbook data extracted from the image with estimated hours
const logbookEntries = [
  { Member: 'Alrich F.', Date: '02/06/2025', Efforts: 'Made a gantt chart', Hours: 2 },
  { Member: 'Alexey S.', Date: '02/06/2025', Efforts: 'Set up Logbook & Group 3 Teams chat', Hours: 2 },
  { Member: 'Alexey S.', Date: '14/2/2025', Efforts: 'Group discussion to sort out roles and things to talk about the PIP presentation', Hours: 2 },
  { Member: 'Krishna V.', Date: '14/2/2025', Efforts: 'Made flowchart for typical organisational structure that we can use as inspiration', Hours: 2 },
  { Member: 'Alexey S.', Date: '19/2/2025', Efforts: 'Group discussion to finalise PIP presentation', Hours: 2 },
  { Member: 'James B.', Date: '19/2/2025', Efforts: 'Made the PIP Presentation', Hours: 2.5 },
  { Member: 'Alexey S.', Date: '26/2/2025', Efforts: 'Came up with a rocket design concept and theory behind it', Hours: 2.5 },
  { Member: 'Arthur M.', Date: '26/2/2025', Efforts: 'Made CAD models for the first design; cone + fin designs', Hours: 3 },
  { Member: 'Pablo F.', Date: '26/2/2025', Efforts: 'Researched on possible aerodynamic designs', Hours: 2.5 },
  { Member: 'Arthur M.', Date: '03/02/2025', Efforts: 'Further development for fin design', Hours: 2.5 },
  { Member: 'Prabesh H.', Date: '03/05/2025', Efforts: 'Did extensive research on materials for rocket design, with sources', Hours: 3 },
  { Member: 'James B.', Date: '03/05/2025', Efforts: 'Added onto Prabesh\'s research', Hours: 2 },
  { Member: 'Pablo F.', Date: '05/03/2025', Efforts: 'Researched into cheap, resistant and reliable materials', Hours: 2.5 },
  { Member: 'Arthur M.', Date: '03/11/2025', Efforts: 'Called a meeting to discuss progress.', Hours: 2 },
  { Member: 'Alexey S.', Date: '23/3/2025', Efforts: 'Made 7 Nosecone designs in SW for the calc team to do flow testing on.', Hours: 4 },
  { Member: 'Alrich F.', Date: '24/3/2025', Efforts: 'Performed Flow Simulation on aforementioned nose cones', Hours: 3 },
  { Member: 'Partha S.', Date: '25/3/2025', Efforts: 'Called a meeting to discuss next steps. Discussed potentiality for launch simulation to be done in the Sim suite', Hours: 2 },
  { Member: 'Alexey S.', Date: '26/3/2025', Efforts: 'Made progress report presentation', Hours: 2 },
  { Member: 'Sam B.', Date: '26/3/2025', Efforts: 'Presents progress report presentation note: others were absent during this time so sam and arthur get credit', Hours: 2 },
  { Member: 'Arthur M.', Date: '27/3/2025', Efforts: 'Presents progress report presentation', Hours: 2 },
  { Member: 'Sam B.', Date: '27/3/2025', Efforts: 'Presents strong template for website hosted locally using React based web dev stack. Simply requires details at this point', Hours: 3 },
  { Member: 'Partha S.', Date: '04/03/2025', Efforts: 'Creates simulated water bottle accurate in dimensions in CAD (for final assembly)', Hours: 3 },
  { Member: 'James B.', Date: '20/4/2025', Efforts: 'Gathered measurements for all existing nosecones and predictions for how they will perform', Hours: 2.5 },
  { Member: 'Partha S.', Date: '30/04/2025', Efforts: 'Creates sleeve for fins for rocket in CAD', Hours: 3 },
  { Member: 'Arthur M.', Date: '30/04/2026', Efforts: 'Creates fins for rocket in CAD', Hours: 3 },
  { Member: 'Alexey S.', Date: '30/04/2027', Efforts: 'Creates final nosecone design in CAD', Hours: 3 },
  { Member: 'Partha S.', Date: '30/04/2028', Efforts: 'Creates final assembled rocket in CAD', Hours: 3.5 },
  { Member: 'Pablo F.', Date: '05/07/2025', Efforts: 'Summons meeting to discuss next steps. Next steps are figured out', Hours: 2 },
  { Member: 'Alexey S.', Date: '05/07/2025', Efforts: 'Organizes team\'s next steps and assigns tasks to individuals', Hours: 2 },
  { Member: 'Alexey S.', Date: '7/5/2025', Efforts: 'Creates assembly drawing for rocket', Hours: 3 },
  { Member: 'Alrich F.', Date: '05/07/2025', Efforts: 'Creates part drawings for rocket and Final checks for all CAD files', Hours: 3.5 },
  { Member: 'James B.', Date: '05/10/2025', Efforts: 'Came up with the final measurements for the rocket', Hours: 2.5 },
  { Member: 'Pablo F.', Date: '13/52025', Efforts: 'Completed the risk assesment with help from alrich', Hours: 2.5 },
  { Member: 'Sam B.', Date: '05/10/2025', Efforts: 'Advances on the website template, creating a professional design and', Hours: 3 },
  { Member: 'Sam B.', Date: '05/10/2025', Efforts: 'Implementing data collected from other teams.', Hours: 2.5 },
  { Member: 'James B.', Date: '14/10/2025', Efforts: 'Ran additional lab tests on thrust and recorded the data', Hours: 3 },
  { Member: 'Pablo F.', Date: '14/10/2025', Efforts: 'Ran additional lab tests on thrust and recorded the data', Hours: 3 },
  { Member: 'Sam B.', Date: '22/05/2025', Efforts: 'Finishing touches on website including adding the 10 minute video and updated calculations.', Hours: 3.5 },
  { Member: 'Partha S.', Date: '18/05/2025', Efforts: 'Resized the nose cone as it did not fit the bottle with the Micro:bit', Hours: 2.5 },
  { Member: 'Alrich F.', Date: '16/05/2025', Efforts: 'Filmed the video with external help from a friend and pictures of the team', Hours: 3 },
  { Member: 'Alrich F.', Date: '19/05/2025', Efforts: 'edited the video using movavi video editing software', Hours: 3 },
  { Member: 'Alrich F.', Date: '13/05/2025', Efforts: 'created a PDS for the project', Hours: 2.5 },
  { Member: 'Alrich F.', Date: '19/05/2025', Efforts: 'Recoding the micro:bit for slight adjustment before the launch', Hours: 2.5 },
  { Member: 'Alexey S.', Date: '16/05/2025', Efforts: 'Made the marketing poster for the project', Hours: 3 },
  { Member: 'Krishna V.', Date: '19/05/2025', Efforts: 'Made an instructions guide to launch the water rocket.', Hours: 2.5 },
  { Member: 'Krishna V.', Date: '15/05/2025', Efforts: 'Updated some information and modifications on the website', Hours: 2.5 },
];

export default function Appendix() {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-900 text-white">
      <header className="w-full mb-8">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            <div className="flex-1 flex justify-center">
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
                APPENDIX
              </Typography>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto">
        <section className="mb-16">
          <Typography variant="h5" sx={{ color: "#FCD34D", fontWeight: 600, mb: 4 }}>
            Product Design Documentation
          </Typography>
          <div className="bg-[#3B82F6] rounded-xl p-6 shadow-lg">
            <div className="w-full h-[800px]">
              <iframe
                src="/product-design-specs.pdf"
                className="w-full h-full rounded-lg"
                title="Product Design PDF"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Typography variant="h5" sx={{ color: "#FCD34D", fontWeight: 600, mb: 4 }}>
            Risk Assessment
          </Typography>
          <div className="bg-[#3B82F6] rounded-xl p-6 shadow-lg">
            <div className="w-full h-[800px]">
              <iframe
                src="/RISK ASSESSMENT.pdf"
                className="w-full h-full rounded-lg"
                title="Risk Assessment PDF"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Typography variant="h5" sx={{ color: "#FCD34D", fontWeight: 600, mb: 4 }}>
            Project Logbook
          </Typography>
          <div className="bg-[#3B82F6] rounded-xl p-6 shadow-lg">
            <div className="overflow-x-auto rounded-lg">
              <table className="min-w-full bg-[#1E3A8A] border border-[#2563EB]">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-bold text-[#FCD34D] uppercase tracking-wider border-b border-[#2563EB]">Member</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-[#FCD34D] uppercase tracking-wider border-b border-[#2563EB]">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-[#FCD34D] uppercase tracking-wider border-b border-[#2563EB]">Efforts (Describe what you did)</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-[#FCD34D] uppercase tracking-wider border-b border-[#2563EB]">Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2563EB]">
                  {logbookEntries.map((entry, index) => (
                    <tr key={index} className="hover:bg-[#2563EB] transition duration-150 ease-in-out">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#FCD34D]">{entry.Member}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#FCD34D]">{entry.Date}</td>
                      <td className="px-6 py-4 text-sm text-[#FCD34D] break-words">{entry.Efforts}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#FCD34D]">{entry.Hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Typography variant="h5" sx={{ color: "#FCD34D", fontWeight: 600, mb: 4 }}>
            Hours Summary
          </Typography>
          <div className="bg-[#3B82F6] rounded-xl p-6 shadow-lg">
            <div className="overflow-x-auto rounded-lg">
              <table className="min-w-full bg-[#1E3A8A] border border-[#2563EB]">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-bold text-[#FCD34D] uppercase tracking-wider border-b border-[#2563EB]">Member</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-[#FCD34D] uppercase tracking-wider border-b border-[#2563EB]">Total Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2563EB]">
                  {(() => {
                    const memberTotals = logbookEntries.reduce((acc, entry) => {
                      const member = entry.Member;
                      acc[member] = (acc[member] || 0) + entry.Hours;
                      return acc;
                    }, {});

                    const totalHours = Object.values(memberTotals).reduce((sum, hours) => sum + hours, 0);

                    return [
                      ...Object.entries(memberTotals).map(([member, hours]) => (
                        <tr key={member} className="hover:bg-[#2563EB] transition duration-150 ease-in-out">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#FCD34D]">{member}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#FCD34D]">{hours.toFixed(1)}</td>
                        </tr>
                      )),
                      <tr key="total" className="hover:bg-[#2563EB] transition duration-150 ease-in-out font-bold">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#FCD34D]">Total Hours</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#FCD34D]">{totalHours.toFixed(1)}</td>
                      </tr>
                    ];
                  })()}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 