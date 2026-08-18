import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { primaryProjects, supportingProjects, type Project } from "@/lib/projects";

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
          sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
          className={project.image.className}
        />
      </Link>
      <div className="project-card__copy">
        <p className="eyebrow">{project.index} · {project.category}</p>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
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
        <div className="project-grid project-grid--primary">
          {primaryProjects.map((project) => <WorkCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="section section--supporting" aria-labelledby="supporting-title">
        <div className="site-shell">
          <div className="section-heading">
            <p className="eyebrow">Also building</p>
            <h2 id="supporting-title">Technology only matters when people can actually use it.</h2>
            <p>Independent projects that explore the interface and interaction side of complex real-world conditions.</p>
          </div>
          <div className="project-grid project-grid--supporting">
            {supportingProjects.map((project) => <WorkCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
