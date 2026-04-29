import Link from "next/link";
import { Reveal } from "@/components/Motion";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Resume | Rami Hanna",
  description: "Current professional resume for Rami Hanna.",
};

const buttonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.94)] px-5 py-2.5 text-sm font-medium text-stone-900 shadow-[0_12px_30px_rgba(45,33,22,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white hover:text-stone-950";

const experience = [
  {
    period: "2025-02 to 2025-11",
    organization: "PerPlant",
    role: "Robotics Co-op",
    body: "Agtech startup using computer vision and AI for precision agriculture. My role focused on robotics field tooling, thermal sensing, and dataset workflows around real crop data.",
    details: [
      "Integrated a thermal imaging workflow using irpythermal with ROS2 publishers/subscribers in C++ and Python.",
      "Enabled GPS-geotagged thermal image collection for precision agriculture.",
      "Built a dataset sampling pipeline using ROI filtering, detector embeddings, UMAP, HDBSCAN, and grouped splits.",
    ],
  },
  {
    period: "2022-09 to 2023-03",
    organization: "Harvard Microrobotics",
    role: "Robotics Co-op",
    body: "Startup-style robotics lab developing underwater robot fleets. My work supported teleoperation, autonomous behavior, embedded communication, and mechanical iteration.",
    details: [
      "Developed a webserver using HTML, Flask, sockets, embedded C, and MicroROS.",
      "Supported teleoperated and autonomous operation of an underwater robot fleet.",
      "Collaborated on planetary gearbox design for robot locomotion.",
    ],
  },
  {
    period: "2022-01 to 2022-05",
    organization: "Raytheon Technologies",
    role: "Innovation / Robotics Co-op",
    body: "Manufacturing automation work around a long-standing manual production process. My role connected robot motion, PLCs, vision systems, and fixture design.",
    details: [
      "Contributed to automation using PLCs, a UR5e robot, and Keyence vision systems.",
      "Worked in a production-oriented manufacturing setting with real process constraints.",
      "Designed modular fixtures for circuit-card surface-mount equipment using CAD tools.",
    ],
  },
  {
    period: "2019-04 to 2021-07",
    organization: "DEKA Research and Development",
    role: "Controls Intern",
    body: "Biomedical engineering R&D environment with controls, instrumentation, test infrastructure, and data collection around physical devices.",
    details: [
      "Implemented a PID-controlled heating and cooling system via Modbus TCP/IP and LabVIEW.",
      "Developed RFID tracking integrated with Python and SQL for batch records.",
      "Built an Arduino and Python test bench for autonomous multi-source serial data collection.",
    ],
  },
];

const projects = [
  {
    title: "ROS2 Occupancy-Grid Mapping",
    body: "Built a ROS2 mapping module for a simulated TurtleBot using odometry, LiDAR, TF2, and Bresenham ray tracing to publish nav_msgs/OccupancyGrid.",
  },
  {
    title: "Crazyflie + ROS2 + MATLAB + OptiTrack",
    body: "Developed and validated PID controllers, then debugged failures across networking, radio, middleware, OptiTrack visibility, and shared-lab infrastructure.",
  },
  {
    title: "Teradyne Cartesian Robot and Tool Changer",
    body: "Programmed a Cartesian robot system using Raspberry Pi, ESP32, a load cell, and HX711-based closed-loop control, reaching 0.01 mm travel precision and 0.5 g load standard deviation.",
  },
];

const education = [
  {
    school: "Technical University of Denmark",
    detail: "M.Sc., Autonomous Systems",
    place: "Lyngby, Denmark",
    period: "2024-09 to 2026-07 (expected)",
    details: [
      "Focus on autonomous software, robotics, machine learning, computer vision, and Industry 4.0.",
      "Thesis work in soft-finger actuation modeling for rehabilitation-oriented hardware.",
    ],
  },
  {
    school: "University of New South Wales",
    detail: "Exchange studies, Computer Science",
    place: "Sydney, Australia",
    period: "2025-09 to 2025-12",
    details: [
      "Exchange semester used to broaden computer-science coursework outside the DTU catalog.",
      "Courses included database design, language theory, and business analytics.",
    ],
  },
  {
    school: "Wentworth Institute of Technology",
    detail: "B.S., Electromechanical Engineering, Summa Cum Laude",
    place: "Boston, Massachusetts",
    period: "2019-08 to 2023-08",
    details: [
      "Interdisciplinary mechanical, electrical, and electromechanical engineering degree.",
      "Dean's Award recipient; IEEE, robotics, ROV, and Accelerate involvement.",
    ],
  },
];

const skills = [
  "Python",
  "C++",
  "Embedded C",
  "ROS2",
  "MicroROS",
  "Gazebo",
  "RViz",
  "Docker",
  "Git",
  "LiDAR",
  "GPS",
  "Controls",
  "SQL / NoSQL",
  "CAN / UART / SPI / I2C",
];

export default function Resume() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="rounded-[2.25rem] border border-stone-200/80 bg-[rgba(255,249,241,0.92)] p-8 shadow-[0_28px_90px_rgba(45,33,22,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Resume
              </p>
              <h1 className="max-w-4xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                Robotics engineer focused on <span className="text-[var(--accent)]">software</span>,
                controls, sensing, and real hardware.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-stone-700">
                Interdisciplinary robotics engineer completing an M.Sc. in Autonomous Systems at
                DTU, with experience writing robotics software, integrating sensors, tuning
                controls, using simulation, and building data workflows around physical machines.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/resume.pdf" download="Rami_Hanna_Resume.pdf" className={buttonClassName}>
                Download PDF
              </Link>
              <Link href="mailto:s242507@dtu.dk" className={buttonClassName}>
                Email
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="grid gap-6 lg:sticky lg:top-32 lg:self-start">
            <article className="rounded-[1.9rem] border border-stone-200/80 bg-[#efe3d6] p-6 shadow-[0_20px_60px_rgba(45,33,22,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Based in
              </p>
              <p className="mt-3 font-serif text-3xl text-stone-950">Copenhagen</p>
              <p className="mt-4 text-sm leading-7 text-stone-700">
                Open to robotics software, controls, mechatronics, simulation, and sensing-heavy
                robotics work.
              </p>
            </article>

            <article className="rounded-[1.9rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-6 shadow-[0_20px_60px_rgba(45,33,22,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Toolkit
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-stone-200 bg-[rgba(255,250,244,0.96)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </aside>

          <div className="grid gap-12">
            <section className="rounded-[2rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                Experience
              </p>
              <div className="mt-6 grid gap-4">
                {experience.map((item, index) => (
                  <Reveal
                    as="article"
                    key={item.organization}
                    className={`rounded-[1.65rem] border border-stone-200/80 p-5 ${
                      index === 0 ? "bg-[#e0e7e4]" : "bg-[#f7f1e9]"
                    }`}
                    delay={index * 0.035}
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h2 className="font-serif text-3xl text-stone-950">{item.organization}</h2>
                        <p className="text-sm font-medium text-stone-700">{item.role}</p>
                      </div>
                      <p className="text-sm font-medium text-stone-500">{item.period}</p>
                    </div>
                    <p className="mt-4 text-base leading-7 text-stone-700">{item.body}</p>
                    <details className="group mt-4 rounded-[1.1rem] border border-stone-200/80 bg-[rgba(255,250,244,0.58)]">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-sm font-semibold text-stone-800">
                        <span>Contributions</span>
                        <span className="text-lg leading-none text-[var(--accent)] transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <ul className="grid gap-2 border-t border-stone-200/80 px-4 pb-4 pt-3 text-sm leading-7 text-stone-700">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </Reveal>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-stone-200/80 bg-[#2f2c29] p-6 text-stone-100 shadow-[0_24px_70px_rgba(33,28,24,0.18)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
                Selected robotics work
              </p>
              <div className="mt-6 grid gap-4">
                {projects.map((item) => (
                  <Reveal
                    as="article"
                    key={item.title}
                    className="rounded-[1.6rem] border border-stone-700/70 bg-[rgba(255,248,240,0.06)] p-5"
                  >
                    <h2 className="font-serif text-3xl text-stone-100">{item.title}</h2>
                    <p className="mt-3 text-base leading-7 text-stone-200">{item.body}</p>
                  </Reveal>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                Education
              </p>
              <div className="mt-6 grid gap-4">
                {education.map((item) => (
                  <Reveal
                    as="article"
                    key={item.school}
                    className="rounded-[1.6rem] border border-stone-200/80 bg-[#f7f1e9] p-5"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h2 className="font-serif text-3xl text-stone-950">{item.school}</h2>
                        <p className="text-sm font-medium text-stone-700">{item.detail}</p>
                      </div>
                      <p className="text-sm font-medium text-stone-500">{item.period}</p>
                    </div>
                    <p className="mt-3 text-base leading-7 text-stone-700">{item.place}</p>
                    <details className="group mt-4 rounded-[1.1rem] border border-stone-200/80 bg-[rgba(255,250,244,0.58)]">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-sm font-semibold text-stone-800">
                        <span>Focus</span>
                        <span className="text-lg leading-none text-[var(--accent)] transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <ul className="grid gap-2 border-t border-stone-200/80 px-4 pb-4 pt-3 text-sm leading-7 text-stone-700">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </Reveal>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
