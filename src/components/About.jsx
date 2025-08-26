// src/components/About.jsx
export default function About() {
  return (
    <>
      {/* About Section */}
      <section className="section" id="about">
        <div className="container-lg grid md:grid-cols-3 gap-8">
          {/* Left/Main content */}
          <div className="md:col-span-2">
            <h2 className="section-title">About</h2>
            <p className="section-subtitle">Who I am & what I do</p>
            <p className="mt-6 text-slate-300 leading-7">
              Experienced Mechanical Manager with over 23 years in manufacturing
              and PET recycling. Proficient in corrective and preventive
              maintenance, team supervision, and operation of PET wash line
              equipment (Crusher, Label Remover, Friction Washer, Hot Washer,
              Dryer). Skilled in mechanical design, fabrication, and stock
              control. Committed to enhancing plant efficiency, reducing
              downtime, and guiding cross-functional teams to accomplish
              organizational objectives.
            </p>

            {/* Strengths */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-2">
                Core Strengths
              </h3>
              <ul className="list-disc list-inside text-slate-300">
                <li>Demonstrated leadership in mechanical maintenance teams</li>
                <li>Strong analytical and troubleshooting abilities</li>
                <li>
                 In-depth knowledge of PET recycling plant machinery and processes
                </li>
                <li>Efficient spare parts and inventory management</li>
              </ul>
            </div>
          </div>

          {/* Right/Card content with heading inside */}
          <div>
            <ul className="card p-5 space-y-3">
              <li className="text-lg font-semibold text-white mb-3">
                Highlights
              </li>
              <li className="flex items-center gap-3">
                <span>⚙️</span>{" "}
                <span>23+ years of mechanical maintenance experience</span>
              </li>
              <li className="flex items-center gap-3">
                <span>🏭</span>{" "}
                <span>Specialist in PET Wash Line Operations</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📦</span>{" "}
                <span>Spare Parts & Inventory Management Expert</span>
              </li>
              <li className="flex items-center gap-3">
                <span>👥</span> <span>Team Leadership & Staff Training</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <div className="container-lg">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">Career achievements and roles</p>

          <ul className="mt-6 space-y-6">
            <li>
              <h3 className="text-lg font-semibold">
                Senior Mechanical Manager
              </h3>
              <p className="text-slate-400">
                JB Ecotex Ltd. | Dec 2024 – Present
              </p>
              <ul className="list-disc list-inside text-slate-300 mt-2">
                <li>
                  Oversee mechanical maintenance operations across the plant
                </li>
                <li>Ensure optimal functioning of PET wash line equipment</li>
                <li>Lead and mentor maintenance team to reduce downtime</li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Mechanical Manager</h3>
              <p className="text-slate-400">
                Jai Narain Fabtech Pvt. Ltd. | Mar 2021 – Dec 2024
              </p>
              <ul className="list-disc list-inside text-slate-300 mt-2">
                <li>Managed preventive and corrective maintenance</li>
                <li>Coordinated spare parts inventory and procurement</li>
                <li>Supervised workshop team and ensured safety compliance</li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Mechanical Manager</h3>
              <p className="text-slate-400">
                ECO CARE VENTURE Pvt. Ltd. | Nov 2018 – Feb 2021
              </p>
              <ul className="list-disc list-inside text-slate-300 mt-2">
                <li>Handled mechanical operations for PET recycling plants</li>
                <li>
                  Streamlined maintenance schedules to maximize efficiency
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Mechanical Incharge</h3>
              <p className="text-slate-400">
                RPG Industries Pvt. Ltd. | Apr 2011 – Nov 2018
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Foreman</h3>
              <p className="text-slate-400">
                Silvertone Pvt. Ltd. | Mar 2006 – Apr 2011
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Fitter</h3>
              <p className="text-slate-400">
                Anand Duplex Pvt. Ltd. | Jan 2002 – Mar 2006
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Trainee Fitter</h3>
              <p className="text-slate-400">
                Birla Yamaha Pvt. Ltd. | Dec 2000 – Dec 2001
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="section" id="education">
        <div className="container-lg">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic qualifications</p>

          <ul className="mt-6 space-y-4">
            <li>
              <h3 className="text-lg font-semibold">Bachelor of Arts (B.A.)</h3>
              <p className="text-slate-400">CCSU, Meerut | 1998</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">ITI (Fitter)</h3>
              <p className="text-slate-400">
                Govt. ITI Saket, Meerut | 1997 – 1999
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">12th Grade</h3>
              <p className="text-slate-400">U.P. Board, Allahabad | 1995</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">10th Grade</h3>
              <p className="text-slate-400">U.P. Board, Allahabad | 1992</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
