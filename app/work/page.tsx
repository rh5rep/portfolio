import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { projects, type Project } from "@/lib/projects";

const academicExplorations = [
  {
    title: "Autonomy, sensing, and mapping",
    period: "DTU coursework · 2025",
    summary: "Robotics coursework across ROS2 occupancy-grid mapping, LiDAR and GNSS/IMU data, point-cloud workflows, and Crazyflie / OptiTrack controller validation.",
    evidence: ["ROS2", "LiDAR + GNSS/IMU", "Occupancy grids", "Point clouds"],
    image: "/portfolio/autonomy-coursework-poster.png",
    alt: "Poster showing autonomy sensor-data and mapping coursework",
  },
  {
    title: "Discrete diffusion for Super Mario levels",
    period: "Advanced deep learning coursework · 2025",
    summary: "A PyTorch U-Net diffusion study using one-hot tile representations, with attention to why image metrics alone do not capture structural validity or playability.",
    evidence: ["PyTorch", "U-Net", "DDPM", "Model evaluation"],
    image: "/portfolio/adlcv-poster.png",
    alt: "Poster showing the Super Mario diffusion coursework project",
  },
];

export const metadata = {
  title: "Work | Rami Hanna",
  description: "Selected robotics, sensing, controls, and software projects by Rami Hanna.",
};

const workProjects = [...projects].sort((a, b) => a.index.localeCompare(b.index));
const featuredProject = workProjects[0];
const engineeringProjects = workProjects.slice(1, 4);
const independentProjects = workProjects.slice(4);

const projectSummaries: Record<string, string> = {
  thesis: "Modeled, built, and tested a wearable finger actuator through rigid-fixture validation and on-hand trials.",
  perplant: "Integrated thermal and GPS sensing, then curated representative samples from a large field-image dataset.",
  "harvard-microrobotics": "Built fleet-operation interfaces and supported embedded communication and drive-module integration.",
  teradyne: "Programmed force-aware connector mating and automatic tool changes for a published robotic test system.",
  sunnysips: "Released an iOS and web product that turns environmental modeling into useful outdoor recommendations.",
  trybe: "Prototyped beginner-friendly sessions, partner perks, and booking states for real-world movement.",
};

function WorkCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card${featured ? " project-card--featured" : ""}`}>
      <Link href={`/projects/${project.slug}`} className="project-card__image" aria-label={`Open ${project.name}`}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          priority={project.index === "01"}
          sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
          className={project.image.className}
        />
      </Link>
      <div className="project-card__copy">
        <p className="eyebrow">{project.index} · {project.category}</p>
        <p className="project-card__scope">{project.scope}</p>
        <h2>{project.name}</h2>
        <p className="project-card__statement">{projectSummaries[project.slug]}</p>
        <div className="project-card__footer">
          <p className="project-card__evidence">{project.evidence}</p>
          <Link className="text-link" href={`/projects/${project.slug}`}>Open project</Link>
        </div>
      </div>
    </article>
  );
}

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <section className="site-shell section section--work-page">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h1>Robotics systems, built for the <em>real world.</em></h1>
          <p className="section-heading__intro">Selected engineering work across wearable robotics, field sensing, embedded systems, and force-aware automation.</p>
          <ul className="work-focus-list" aria-label="Technical focus areas">
            <li>Robotics software</li>
            <li>Computer vision + ML</li>
            <li>Controls + automation</li>
            <li>Embedded sensing</li>
            <li>Physical prototyping</li>
            <li>Data + validation</li>
            <li>Human-centered interfaces</li>
          </ul>
        </div>
        <div className="work-collection">
          <WorkCard project={featuredProject} featured />
          <div className="project-grid project-grid--work project-grid--engineering">
            {engineeringProjects.map((project) => <WorkCard key={project.slug} project={project} />)}
          </div>
        </div>

        <section className="work-secondary" aria-labelledby="independent-work-title">
          <div className="work-secondary__heading">
            <p className="eyebrow">Independent products</p>
            <h2 id="independent-work-title">The same systems thinking, applied to everyday experiences.</h2>
          </div>
          <div className="project-grid project-grid--work project-grid--independent">
            {independentProjects.map((project) => <WorkCard key={project.slug} project={project} />)}
          </div>
        </section>

        <section className="academic-explorations" aria-labelledby="academic-explorations-title">
          <div className="section-heading">
            <p className="eyebrow">Academic explorations</p>
            <h2 id="academic-explorations-title">Coursework that extends the systems story.</h2>
            <p>Relevant technical studies, kept visibly separate from professional and flagship project work.</p>
          </div>
          <div className="academic-explorations__grid">
            {academicExplorations.map((exploration) => (
              <article key={exploration.title}>
                <Link href={exploration.image} target="_blank" rel="noreferrer" className="academic-explorations__image" aria-label={`View ${exploration.title} poster`}>
                  <Image src={exploration.image} alt={exploration.alt} width={1200} height={900} sizes="(max-width: 800px) 100vw, 50vw" />
                </Link>
                <div>
                  <p className="eyebrow">{exploration.period}</p>
                  <h3>{exploration.title}</h3>
                  <p>{exploration.summary}</p>
                  <ul aria-label={`${exploration.title} methods`}>
                    {exploration.evidence.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <Link className="text-link" href={exploration.image} target="_blank" rel="noreferrer">View poster</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
