import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Story | Rami Hanna",
  description: "The engineering story, experience, and values behind Rami Hanna's work.",
};

const experience = [
  ["2025", "PerPlant", "ROS2 field sensing, thermal imagery, GPS metadata, and data-quality workflows for precision agriculture."],
  ["2024–26", "DTU Autonomous Systems", "Master's work across robotics, simulation, computer vision, and a wearable finger-actuator thesis for neurorehabilitation tasks."],
  ["2022–23", "Harvard Microrobotics", "Underwater robot fleet interfaces, embedded communication, and mechanical iteration in a startup-style environment."],
  ["2019–22", "DEKA + Raytheon", "Biomedical R&D controls, instrumentation, robot automation, vision systems, and practical test infrastructure."],
];

export default function Profile() {
  return (
    <main>
      <SiteHeader />
      <section className="story-page site-shell">
        <p className="eyebrow">About me</p>
        <h1>I want to build technology that makes life more <em>possible.</em></h1>
        <p className="story-page__lead">
          I am a hands-on robotics engineer who likes the space between software and the physical
          world: signals, sensors, mechanics, experiments, and the people who rely on them.
        </p>
        <div className="story-stats" aria-label="Career highlights">
          <article><span>04</span><p>engineering co-ops across robotics, biomedical R&D, and agtech</p></article>
          <article><span>01</span><p>IEEE-published Cartesian robotics project</p></article>
          <article><span>∞</span><p>questions about how systems can be made more useful</p></article>
        </div>
      </section>

      <section className="experience site-shell" aria-labelledby="experience-title">
        <div className="section-heading">
          <p className="eyebrow">Where I learned</p>
          <h2 id="experience-title">A path through systems that have to work beyond the whiteboard.</h2>
        </div>
        <div className="experience-list">
          {experience.map(([year, company, detail]) => (
            <article key={company}>
              <span>{year}</span>
              <h3>{company}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-values site-shell">
        <div>
          <p className="eyebrow">How I work</p>
          <h2>I care about the details because that is where trust is built.</h2>
        </div>
        <p>
          My best work happens when a challenge cannot be separated into “hardware” or “software.”
          I enjoy identifying the real constraint, making it observable, and working with others to
          turn it into a system that behaves predictably enough to improve.
        </p>
      </section>

      <section className="contact contact--compact site-shell">
        <p className="availability"><span aria-hidden="true" /> Open to robotics engineering roles</p>
        <h2>Want the full picture?</h2>
        <div className="contact__links">
          <Link className="button button--light" href="/resume">Read my resume</Link>
          <Link href="mailto:s242507@dtu.dk">Email me ↗</Link>
          <Link href="https://www.linkedin.com/in/ramiihanna/" target="_blank" rel="noreferrer">LinkedIn ↗</Link>
        </div>
      </section>
    </main>
  );
}
