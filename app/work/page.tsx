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

function WorkCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
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
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <p className="project-card__evidence">{project.evidence}</p>
        <Link className="text-link" href={`/projects/${project.slug}`}>See the work <span aria-hidden="true">↗</span></Link>
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
          <h1>Engineering for systems that need to be <em>trusted.</em></h1>
          <p>Projects that best represent how I think: turn a physical problem into something observable, testable, and useful.</p>
        </div>
        <div className="project-grid project-grid--work">
          {projects.map((project) => <WorkCard key={project.slug} project={project} />)}
        </div>

        <section className="academic-explorations" aria-labelledby="academic-explorations-title">
          <div className="section-heading">
            <p className="eyebrow">Academic explorations</p>
            <h2 id="academic-explorations-title">Coursework that extends the systems story.</h2>
            <p>Relevant technical studies, kept visibly separate from professional and flagship project work.</p>
          </div>
          <div className="academic-explorations__grid">
            {academicExplorations.map((exploration) => (
              <article key={exploration.title}>
                <Image src={exploration.image} alt={exploration.alt} width={1200} height={900} sizes="(max-width: 800px) 100vw, 50vw" />
                <div>
                  <p className="eyebrow">{exploration.period}</p>
                  <h3>{exploration.title}</h3>
                  <p>{exploration.summary}</p>
                  <ul aria-label={`${exploration.title} methods`}>
                    {exploration.evidence.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
