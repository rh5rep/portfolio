import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Resume | Rami Hanna",
  description: "Current professional resume for Rami Hanna.",
};

const buttonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.94)] px-5 py-2.5 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-stone-950";

const experience = [
  {
    period: "2025-02 to 2025-11",
    organization: "PerPlant",
    role: "Robotics Co-op",
    body: "Integrated a thermal imaging workflow using irpythermal with ROS2 publishers and subscribers in C++ and Python, enabling GPS-geotagged thermal image collection for precision agriculture.",
    detail:
      "Built a separate image-selection pipeline using ROI filtering, detector embeddings, UMAP, HDBSCAN, and grouped dataset splitting to create smaller, representative annotation batches from redundant field datasets.",
  },
  {
    period: "2022-09 to 2023-03",
    organization: "Harvard Microrobotics",
    role: "Robotics Co-op",
    body: "Developed a webserver using HTML, Flask, sockets, embedded C, and MicroROS to support teleoperated and autonomous operation of an underwater robot fleet.",
    detail: "Also collaborated on planetary gearbox design in a startup-style robotics environment.",
  },
  {
    period: "2022-01 to 2022-05",
    organization: "Raytheon Technologies",
    role: "Innovation / Robotics Co-op",
    body: "Contributed to automation of a long-standing manufacturing process using PLCs, a UR5e robot, and Keyence vision systems.",
    detail: "Designed modular fixtures for circuit-card surface-mount equipment using CAD tools.",
  },
  {
    period: "2019-04 to 2021-07",
    organization: "DEKA Research and Development",
    role: "Controls Intern",
    body: "Implemented a PID-controlled heating and cooling system via Modbus TCP/IP and LabVIEW, plus RFID and Python / SQL tracking for batch records.",
    detail: "Built an Arduino and Python test bench for autonomous multi-source serial data collection.",
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
  },
  {
    school: "University of New South Wales",
    detail: "Exchange studies, Computer Science",
    place: "Sydney, Australia",
    period: "2025-09 to 2025-12",
  },
  {
    school: "Wentworth Institute of Technology",
    detail: "B.S., Electromechanical Engineering, Summa Cum Laude",
    place: "Boston, Massachusetts",
    period: "2019-08 to 2023-08",
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

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="rounded-[2.25rem] border border-stone-200/80 bg-[rgba(255,249,241,0.92)] p-8 shadow-[0_28px_90px_rgba(45,33,22,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Resume
              </p>
              <h1 className="max-w-4xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                Robotics software engineer focused on sensing, simulation, and real-world systems.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-stone-700">
                Interdisciplinary robotics engineer completing an M.Sc. in Autonomous Systems at
                DTU, with experience across ROS2, sensor integration, controls, simulation, and
                building structured software and data workflows around physical systems.
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
      </section>

      <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="grid gap-6 lg:sticky lg:top-32 lg:self-start">
            <article className="rounded-[1.9rem] border border-stone-200/80 bg-[#efe3d6] p-6 shadow-[0_20px_60px_rgba(45,33,22,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Based in
              </p>
              <p className="mt-3 font-serif text-3xl text-stone-950">Copenhagen</p>
              <p className="mt-4 text-sm leading-7 text-stone-700">
                Open to robotics software, simulation, evaluation, and sensing-heavy systems work.
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
              <div className="mt-6 grid gap-6">
                {experience.map((item, index) => (
                  <article
                    key={item.organization}
                    className={`rounded-[1.65rem] border border-stone-200/80 p-5 ${
                      index === 0 ? "bg-[#e0e7e4]" : "bg-[#f7f1e9]"
                    }`}
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h2 className="font-serif text-3xl text-stone-950">{item.organization}</h2>
                        <p className="text-sm font-medium text-stone-700">{item.role}</p>
                      </div>
                      <p className="text-sm font-medium text-stone-500">{item.period}</p>
                    </div>
                    <p className="mt-4 text-base leading-7 text-stone-700">{item.body}</p>
                    <p className="mt-3 text-base leading-7 text-stone-700">{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-stone-200/80 bg-[#2f2c29] p-6 text-stone-100 shadow-[0_24px_70px_rgba(33,28,24,0.18)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
                Selected systems work
              </p>
              <div className="mt-6 grid gap-4">
                {projects.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.6rem] border border-stone-700/70 bg-[rgba(255,248,240,0.06)] p-5"
                  >
                    <h2 className="font-serif text-3xl text-stone-100">{item.title}</h2>
                    <p className="mt-3 text-base leading-7 text-stone-200">{item.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                Education
              </p>
              <div className="mt-6 grid gap-4">
                {education.map((item) => (
                  <article
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
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
