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
        <Link href="/work" className="back-link">← Selected work</Link>
        <div className="project-hero__grid">
          <div>
            <p className="eyebrow">{project.index} · {project.category}</p>
            <p className="project-hero__scope">{project.scope}</p>
            <h1>{project.title}</h1>
            <p className="project-hero__summary">{project.summary}</p>
            <div className="project-hero__actions">
              {project.link ? (
                <Link className="button button--dark" href={project.link.href} target={project.link.href.startsWith("http") ? "_blank" : undefined} rel={project.link.href.startsWith("http") ? "noreferrer" : undefined}>
                  {project.link.label}
                </Link>
              ) : null}
              <Link className="button button--quiet" href="mailto:rami@rami-hanna.com">Get in touch</Link>
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
          <p className="eyebrow">The problem</p>
          <p>{project.context}</p>
        </aside>
        <div className="project-body__main">
          <section>
            <p className="eyebrow">Technical ownership</p>
            <ol className="contribution-list">
              {project.contributions.map((contribution, index) => (
                <li key={contribution}><span>{String(index + 1).padStart(2, "0")}</span>{contribution}</li>
              ))}
            </ol>
          </section>
          <section className="project-system">
            <p className="eyebrow">System architecture</p>
            <p>{project.system}</p>
          </section>
          <section className="project-proof">
            <p className="eyebrow">Evidence + outcome</p>
            <div>{project.proof.map((item) => <span key={item}>{item}</span>)}</div>
          </section>
          <section className="project-stack">
            <p className="eyebrow">Tools + systems</p>
            <div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          </section>
          {project.detailImage ? (
            <figure className="project-detail-image">
              <Image
                src={project.detailImage.src}
                alt={project.detailImage.alt}
                width={project.detailImage.width}
                height={project.detailImage.height}
                sizes="(max-width: 900px) 100vw, 54vw"
              />
              <figcaption>Finished wearable prototype.</figcaption>
            </figure>
          ) : null}
          {project.gallery.length > 0 ? <section className="project-gallery" aria-labelledby="project-gallery-title">
            <div className="project-gallery__heading">
              <p className="eyebrow">In the work</p>
              <h2 id="project-gallery-title">A few details worth getting closer to.</h2>
              <p>Hover to shift the frame. The images stay still until you choose to inspect them.</p>
            </div>
            <div className="project-gallery__grid">
              {project.gallery.map((image, index) => (
                <figure key={image.src} className={`project-gallery__item project-gallery__item--${index + 1}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 800px) 100vw, 34vw"
                    className={image.className}
                  />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
          : null}
        </div>
      </section>

      <footer className="project-footer site-shell">
        <p>Open to robotics engineering roles.</p>
        <Link href="mailto:rami@rami-hanna.com" className="text-link">Start a conversation <span aria-hidden="true">↗</span></Link>
      </footer>
    </main>
  );
}
