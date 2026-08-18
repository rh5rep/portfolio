import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { primaryProjects, supportingProjects } from "@/lib/projects";

const timeline = [
  {
    year: "01",
    title: "Curiosity",
    body: "Taking apart laptops, asking how things work, and learning that systems become less mysterious when you can touch them.",
  },
  {
    year: "02",
    title: "Robotics",
    body: "FIRST Robotics turned that curiosity into building with a team, under real constraints and deadlines.",
  },
  {
    year: "03",
    title: "Engineering",
    body: "An electromechanical degree and industry co-ops brought controls, instrumentation, embedded systems, and physical debugging together.",
  },
  {
    year: "04",
    title: "Systems",
    body: "At DTU, the work expanded into autonomous systems, sensing, simulation, and projects that make technical behavior measurable.",
  },
];

const capabilities = [
  ["01", "Build against reality", "Software that meets sensors, mechanisms, operators, and imperfect conditions."],
  ["02", "Debug across layers", "Comfort moving between code, middleware, calibration, fixtures, and assumptions."],
  ["03", "Make behavior visible", "Models, experiments, and interfaces that make complex systems easier to test and improve."],
];

function ProjectCard({ slug, index }: { slug: string; index: number }) {
  const project = [...primaryProjects, ...supportingProjects].find((item) => item.slug === slug);
  if (!project) return null;

  return (
    <article className={`project-card project-card--${index % 3}`}>
      <Link href={`/projects/${project.slug}`} className="project-card__image" aria-label={`Open ${project.name}`}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
          className={project.image.className}
        />
      </Link>
      <div className="project-card__copy">
        <p className="eyebrow">{project.index} · {project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          See the work <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero site-shell" aria-labelledby="hero-title">
        <div className="hero__grid" aria-hidden="true">
          <span className="hero__line hero__line--one" />
          <span className="hero__line hero__line--two" />
          <span className="hero__orb hero__orb--one" />
          <span className="hero__orb hero__orb--two" />
          <span className="hero__label hero__label--one">SENSE</span>
          <span className="hero__label hero__label--two">MODEL</span>
        </div>
        <div className="hero__content">
          <p className="availability"><span aria-hidden="true" /> Open to robotics engineering roles</p>
          <p className="hero__kicker">Copenhagen, Denmark · Robotics systems · 2026</p>
          <h1 id="hero-title">I build robotics systems that <em>help people</em> and work in the real world.</h1>
          <p className="hero__intro">
            I work where software meets sensing, controls, mechanics, and the messy details that
            make a system useful. My goal is to build technology that improves lives—from
            rehabilitation robotics to smarter field systems and safer autonomy.
          </p>
          <div className="hero__actions">
            <Link className="button button--dark" href="#work">Selected work</Link>
            <Link className="button button--quiet" href="/resume">Resume</Link>
          </div>
        </div>
        <div className="hero__portrait-wrap">
          <div className="hero__portrait-ring" aria-hidden="true" />
          <Image
            src="/portfolio/rami-profile-2026.jpg"
            alt="Rami Hanna"
            width={1536}
            height={2298}
            priority
            sizes="(max-width: 720px) 60vw, 420px"
            className="hero__portrait"
          />
          <p className="hero__portrait-note">ROBOTS · SOFTWARE · PEOPLE</p>
        </div>
        <nav className="hero__quick-links" aria-label="Explore Rami Hanna's portfolio">
          <Link href="#work">Work</Link>
          <Link href="#story">Story</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/life">Life</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </section>

      <section id="work" className="site-shell section section--work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Engineering for systems that need to be <em>trusted.</em></h2>
          <p>Three projects that best represent how I think: turn a physical problem into something observable, testable, and useful.</p>
        </div>
        <div className="project-grid project-grid--primary">
          {primaryProjects.map((project, index) => <ProjectCard key={project.slug} slug={project.slug} index={index} />)}
        </div>
      </section>

      <section id="story" className="site-shell section section--story" aria-labelledby="story-title">
        <div className="story-intro">
          <p className="eyebrow">A short origin story</p>
          <h2 id="story-title">From taking things apart to building systems that can make a difference.</h2>
        </div>
        <ol className="timeline">
          {timeline.map((item) => (
            <li key={item.year}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
        <Link href="/profile" className="text-link">More about my path <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="site-shell section section--capabilities" aria-labelledby="capabilities-title">
        <p className="eyebrow">What I do best</p>
        <h2 id="capabilities-title">Practical engineering with a human reason behind it.</h2>
        <div className="capability-grid">
          {capabilities.map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section section--supporting" aria-labelledby="supporting-title">
        <div className="section-heading">
          <p className="eyebrow">Also building</p>
          <h2 id="supporting-title">Technology only matters when people can actually use it.</h2>
          <p>These projects explore the interface and interaction side of turning complex real-world conditions into something approachable.</p>
        </div>
        <div className="project-grid project-grid--supporting">
          {supportingProjects.map((project, index) => <ProjectCard key={project.slug} slug={project.slug} index={index + 3} />)}
        </div>
      </section>

      <section className="site-shell giving-back" aria-labelledby="giving-back-title">
        <p className="eyebrow">Giving back</p>
        <h2 id="giving-back-title">Engineering can improve lives—and help build movements.</h2>
        <div className="giving-back__copy">
          <p>
            Having left Lebanon with my family as a young child, I care deeply about access,
            community, and helping people feel that technical opportunity is within reach.
          </p>
          <p>
            I love teaching and sharing what I learn. If you are a nonprofit or a socially minded
            group that could use technical mentorship or practical software support, tell me what
            you are trying to make possible. When the scope and my schedule allow, I would be glad
            to help.
          </p>
        </div>
      </section>

      <section id="contact" className="contact site-shell" aria-labelledby="contact-title">
        <p className="availability"><span aria-hidden="true" /> Open to robotics engineering roles</p>
        <h2 id="contact-title">Let&apos;s build something that matters.</h2>
        <p>For roles, research collaborations, mentorship, or a good technical conversation.</p>
        <div className="contact__links">
          <Link className="button button--light" href="mailto:s242507@dtu.dk">Email me</Link>
          <Link href="https://www.linkedin.com/in/ramiihanna/" target="_blank" rel="noreferrer">LinkedIn ↗</Link>
          <Link href="https://github.com/rh5rep" target="_blank" rel="noreferrer">GitHub ↗</Link>
          <Link href="/resume.pdf" download="Rami_Hanna_Resume.pdf">Download resume ↓</Link>
        </div>
      </section>
    </main>
  );
}
