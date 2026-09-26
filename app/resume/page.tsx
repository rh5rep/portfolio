import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Resume | Rami Hanna",
  description: "Robotics systems engineering experience across software, integration, sensing, controls, perception, and physical systems.",
};

const roles = [
  { period: "2025", title: "PerPlant · Robotics Co-op", details: ["Integrated ROS2 thermal/GPS field sensing in C++ and Python using OpenCV, NVIDIA Jetson, and MicroROS; redesigned a multi-camera fixture and translated farmer feedback into technical requirements.", "Built computer-vision data-curation tooling using ROI filtering, detector embeddings, UMAP/HDBSCAN, and grouped splitting for representative annotation and evaluation batches."] },
  { period: "2022–23", title: "Harvard Microrobotics · Robotics Co-op", details: ["Developed robot-operation interfaces using HTML/Flask, sockets, embedded C, and MicroROS.", "Supported teleoperated and autonomous fleet workflows alongside planetary-gearbox design and subsystem integration."] },
  { period: "2022", title: "Raytheon Technologies · Innovation / Robotics Co-op", details: ["Drove an epoxy-automation project from a manual-process problem to a working UR5e, PLC, and Keyence vision system with modular CAD fixtures.", "Gathered requirements across manufacturing and process stakeholders; the team estimated roughly $7M in potential ROI."] },
  { period: "2019–21", title: "DEKA R&D · Controls Intern", details: ["Built biomedical R&D test and traceability workflows spanning electrical, impact, and thermal testing, PID-controlled LabVIEW/Modbus instrumentation, and RFID/Python/SQL data capture.", "Worked within FDA/clinical development and patient-safety constraints while supporting verification-focused engineering."] },
];

const skills = [
  ["Programming + robotics", "C++", "Python", "Embedded C", "ROS2", "MicroROS", "UR5e", "PLCs"],
  ["Perception + integration", "OpenCV", "NVIDIA Jetson", "Keyence vision", "Sensors + instrumentation", "Hardware/software integration"],
  ["Controls + delivery", "PID", "LabVIEW", "Modbus TCP/IP", "SQL", "GitHub Actions", "Docker"],
];

export default function Resume() {
  return (
    <main>
      <SiteHeader />
      <section className="resume-page site-shell">
        <div className="resume-page__heading">
          <div><p className="eyebrow">Resume</p><h1>Robotics systems engineering where software, hardware, and real-world constraints meet.</h1><p>Boston-based engineer focused on robotics software, controls and motion, autonomy, systems integration, embedded interfaces, and computer vision.</p></div>
          <div className="resume-page__actions"><Link className="button button--dark" href="/resume.pdf" download="Rami_Hanna_Robotics_Systems_Resume.pdf">Download CV</Link><Link className="button button--quiet" href="mailto:rami@rami-hanna.com">Email</Link></div>
        </div>
        <section className="resume-section"><p className="eyebrow">Experience</p><div className="resume-roles">{roles.map((role) => <article key={role.title}><span>{role.period}</span><h2>{role.title}</h2><ul>{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>)}</div></section>
        <section className="resume-section resume-section--split"><div><p className="eyebrow">Education</p><h2>Technical University of Denmark</h2><p>M.Sc. Autonomous Systems · thesis defended and degree requirements completed August 2026.</p><p className="resume-page__detail">Thesis: <em>Modeling and Experimental Evaluation of a Wearable Tendon-Driven Finger Actuator for Neurorehabilitation Tasks.</em></p><h2>University of New South Wales</h2><p>Exchange studies in Computer Science · September–December 2025.</p><h2>Wentworth Institute of Technology</h2><p>B.S. Electromechanical Engineering, 2019–2023 · Summa Cum Laude · Dean&apos;s Award in Electromechanical Engineering.</p></div><div><p className="eyebrow">Toolkit</p>{skills.map(([label, ...items]) => <div className="resume-skill-group" key={label}><h2>{label}</h2><div className="skill-list">{items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>
        <section className="resume-section resume-section--split"><div><p className="eyebrow">Selected evidence</p><h2>Validated robotics research</h2><p>Built a tendon-driven finger-actuation platform that completed 1,000/1,000 rigid-fixture cycles; supervised three student interns across fixture, control, vision, and sensing work.</p><Link className="text-link" href="/projects/thesis">View thesis project <span aria-hidden="true">↗</span></Link></div><div><p className="eyebrow">Published work</p><h2>IEEE SII/SICE 2024</h2><p>Co-authored a Cartesian-robotics project for connector mating and automated test-data collection, with verified 0.01 mm travel precision and 0.5 g load standard deviation.</p><Link className="text-link" href="/projects/teradyne">View project <span aria-hidden="true">↗</span></Link></div></section>
      </section>
    </main>
  );
}
