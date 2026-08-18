import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const project = getProject(slug);
    return project
      ? { title: `${project.name} | Rami Hanna`, description: project.summary }
      : {};
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="project-hero site-shell">
        <Link href="/#work" className="back-link">← Selected work</Link>
        <div className="project-hero__grid">
          <div>
            <p className="eyebrow">{project.index} · {project.category}</p>
            <h1>{project.title}</h1>
            <p className="project-hero__summary">{project.summary}</p>
            <div className="project-hero__actions">
              {project.link ? (
                <Link className="button button--dark" href={project.link.href} target={project.link.href.startsWith("http") ? "_blank" : undefined} rel={project.link.href.startsWith("http") ? "noreferrer" : undefined}>
                  {project.link.label}
                </Link>
              ) : null}
              <Link className="button button--quiet" href="mailto:s242507@dtu.dk">Get in touch</Link>
            </div>
          </div>
          <div className="project-hero__image">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className={project.image.className}
            />
          </div>
        </div>
      </section>

      <section className="project-body site-shell">
        <aside>
          <p className="eyebrow">The context</p>
          <p>{project.context}</p>
        </aside>
        <div className="project-body__main">
          <section>
            <p className="eyebrow">What I contributed</p>
            <ol className="contribution-list">
              {project.contributions.map((contribution, index) => (
                <li key={contribution}><span>{String(index + 1).padStart(2, "0")}</span>{contribution}</li>
              ))}
            </ol>
          </section>
          <section className="project-proof">
            <p className="eyebrow">What it demonstrates</p>
            <div>{project.proof.map((item) => <span key={item}>{item}</span>)}</div>
          </section>
          <section className="project-stack">
            <p className="eyebrow">Tools + systems</p>
            <div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          </section>
        </div>
      </section>

      <footer className="project-footer site-shell">
        <p>Open to robotics engineering roles.</p>
        <Link href="mailto:s242507@dtu.dk" className="text-link">Start a conversation <span aria-hidden="true">↗</span></Link>
      </footer>
    </main>
  );
}
