import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Resume | Rami Hanna",
  description: "Robotics engineering experience in sensing, controls, simulation, and physical systems.",
};

const roles = [
  ["2025", "PerPlant · Robotics Co-op", "Integrated thermal imaging and GPS metadata with ROS2 in C++ and Python; built more deliberate computer-vision data-curation workflows."],
  ["2022–23", "Harvard Microrobotics · Robotics Co-op", "Supported underwater robot fleet operation with a webserver, sockets, embedded C, MicroROS, and gearbox design work."],
  ["2022", "Raytheon Technologies · Innovation / Robotics Co-op", "Contributed to automation with PLCs, UR5e robotics, Keyence vision, and modular fixture design."],
  ["2019–21", "DEKA R&D · Controls Intern", "Built controls, instrumentation, RFID/SQL traceability, and Arduino/Python test infrastructure for biomedical R&D."],
];

const skills = ["Python", "C++", "Embedded C", "ROS2", "MicroROS", "Controls + PID", "Sensing", "Computer vision workflows", "Simulation", "SQL", "Git", "Docker"];

export default function Resume() {
  return (
    <main>
      <SiteHeader />
      <section className="resume-page site-shell">
        <div className="resume-page__heading">
          <div>
            <p className="eyebrow">Resume</p>
            <h1>Robotics engineering across software, sensing, controls, and the physical world.</h1>
            <p>Based in Boston, building toward roles where technical work can improve lives and make real systems more capable.</p>
          </div>
          <div className="resume-page__actions">
            <Link className="button button--dark" href="/resume.pdf" download="Rami_Hanna_Resume.pdf">Download PDF</Link>
            <Link className="button button--quiet" href="mailto:s242507@dtu.dk">Email</Link>
          </div>
        </div>

        <section className="resume-section">
          <p className="eyebrow">Experience</p>
          <div className="resume-roles">
            {roles.map(([year, title, detail]) => (
              <article key={title}><span>{year}</span><h2>{title}</h2><p>{detail}</p></article>
            ))}
          </div>
        </section>

        <section className="resume-section resume-section--split">
          <div>
            <p className="eyebrow">Education</p>
            <h2>Technical University of Denmark</h2>
            <p>M.Sc. Autonomous Systems · degree requirements completed August 2026. Robotics, autonomous software, machine learning, computer vision, and simulation.</p>
            <h2>Wentworth Institute of Technology</h2>
            <p>B.S. Electromechanical Engineering, Summa Cum Laude · Dean&apos;s Award recipient.</p>
          </div>
          <div>
            <p className="eyebrow">Toolkit</p>
            <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </section>
      </section>
    </main>
  );
}
