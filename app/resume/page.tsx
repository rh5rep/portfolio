import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Resume | Rami Hanna",
  description: "Robotics engineering experience in sensing, controls, simulation, and physical systems.",
};

const roles = [
  { period: "2025", title: "PerPlant · Robotics Co-op", details: ["Integrated a thermal-camera workflow with ROS2 publishers/subscribers in C++ and Python.", "Linked field capture with GPS metadata and built representative data-curation workflows using embeddings, UMAP, HDBSCAN, visual inspection, and grouped splits."] },
  { period: "2022–23", title: "Harvard Microrobotics · Robotics Co-op", details: ["Developed robot-operation interfaces using HTML/Flask, sockets, embedded C, and MicroROS.", "Supported teleoperated and autonomous fleet workflows alongside planetary-gearbox design and subsystem integration."] },
  { period: "2022", title: "Raytheon Technologies · Innovation / Robotics Co-op", details: ["Contributed to automation using PLCs, a UR5e robot, Keyence machine vision, and modular CAD fixtures.", "Helped create repeatable automated setups and custom tooling for circuit-card configurations."] },
  { period: "2019–21", title: "DEKA R&D · Controls Intern", details: ["Designed and executed electrical, impact, and thermal tests; implemented PID-controlled heating/cooling with Modbus TCP/IP and LabVIEW.", "Built RFID/Python/SQL traceability tooling and an Arduino/Python multi-source serial-data collection bench."] },
];

const skills = [
  ["Robotics systems", "ROS2", "MicroROS", "C++", "Python", "Embedded C", "Sensors + instrumentation"],
  ["Controls + validation", "PID", "Motor + encoder control", "Motion tracking", "Experimental design", "Test automation"],
  ["Data + software", "Computer vision workflows", "SQL", "Git", "Docker", "FastAPI", "SwiftUI"],
];

export default function Resume() {
  return (
    <main>
      <SiteHeader />
      <section className="resume-page site-shell">
        <div className="resume-page__heading">
          <div><p className="eyebrow">Resume</p><h1>Robotics engineering across software, sensing, controls, and the physical world.</h1><p>Boston-based engineer building systems that become more useful when the hardware, software, measurement, and human context are considered together.</p></div>
          <div className="resume-page__actions"><Link className="button button--dark" href="/resume.pdf" download="Rami_Hanna_Robotics_Autonomous_Systems_CV.pdf">Download CV</Link><Link className="button button--quiet" href="mailto:s242507@dtu.dk">Email</Link></div>
        </div>
        <section className="resume-section"><p className="eyebrow">Experience</p><div className="resume-roles">{roles.map((role) => <article key={role.title}><span>{role.period}</span><h2>{role.title}</h2><ul>{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>)}</div></section>
        <section className="resume-section resume-section--split"><div><p className="eyebrow">Education</p><h2>Technical University of Denmark</h2><p>M.Sc. Autonomous Systems · thesis defended and degree requirements completed August 2026.</p><p className="resume-page__detail">Thesis: <em>Modeling and Experimental Evaluation of a Wearable Tendon-Driven Finger Actuator for Neurorehabilitation Tasks.</em></p><h2>University of New South Wales</h2><p>Exchange studies in Computer Science · September–December 2025.</p><h2>Wentworth Institute of Technology</h2><p>B.S. Electromechanical Engineering, 2019–2023 · Summa Cum Laude · Dean&apos;s Award in Electromechanical Engineering.</p></div><div><p className="eyebrow">Toolkit</p>{skills.map(([label, ...items]) => <div className="resume-skill-group" key={label}><h2>{label}</h2><div className="skill-list">{items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>
        <section className="resume-section resume-section--split"><div><p className="eyebrow">Selected evidence</p><h2>IEEE SII/SICE 2024 publication</h2><p>Co-authored a published Cartesian-robotics project for connector mating and automated test-data collection, with verified 0.01 mm travel precision and 0.5 g load standard deviation.</p><Link className="text-link" href="/projects/teradyne">View project <span aria-hidden="true">↗</span></Link></div><div><p className="eyebrow">Community</p><h2>Mentorship + service</h2><p>Robotics and programming mentorship, technical teaching, and Habitat for Humanity volunteering.</p><Link className="text-link" href="/giving-back">Giving back <span aria-hidden="true">↗</span></Link></div></section>
      </section>
    </main>
  );
}
