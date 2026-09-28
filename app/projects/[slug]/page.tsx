import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
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
  const caseStudy = project.caseStudy;
  const heroImage = project.heroImage ?? project.image;
  const orderedProjects = [...projects].sort((a, b) => a.index.localeCompare(b.index));
  const nextProject = orderedProjects[orderedProjects.findIndex((item) => item.slug === slug) + 1];

  return (
    <main>
      <SiteHeader />
      <section className={`project-hero project-hero--${project.slug} site-shell`}>
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
          <div className={`project-hero__image${heroImage.height / heroImage.width > 1.25 ? " project-hero__image--portrait" : ""}`}>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className={heroImage.className}
            />
          </div>
        </div>
        <div className="project-hero__facts" aria-label="Project at a glance">
          <div><p className="eyebrow">Role</p><p>{project.scope}</p></div>
          <div><p className="eyebrow">What I built</p><p>{project.contributions[0]}</p></div>
          <div><p className="eyebrow">Selected evidence</p><p>{project.proof[0]}</p></div>
        </div>
      </section>

      <section className="project-body site-shell" id="project-work">
        <section className="project-problem">
          <p className="eyebrow">The problem</p>
          <p>{project.context}</p>
        </section>
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
        </div>
        {project.gallery.length > 0 ? (
          <section className="project-gallery" aria-labelledby="project-gallery-title">
            <div className="project-gallery__heading">
              <p className="eyebrow">In the work</p>
              <h2 id="project-gallery-title">What the work actually looked like.</h2>
              <p>The hardware, measurements, and interfaces behind the short version.</p>
            </div>
            <div className={`project-gallery__grid project-gallery__grid--${project.gallery.length}${project.galleryLayout ? ` project-gallery__grid--${project.galleryLayout}` : ""}`}>
              {project.gallery.map((media, index) => (
                <figure key={media.src} className={`project-gallery__item project-gallery__item--${index + 1}`}>
                  {media.type === "video" ? (
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={media.poster}
                      aria-label={media.label}
                      className={media.className}
                    >
                      <source src={media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={media.width}
                      height={media.height}
                      sizes="(max-width: 800px) 100vw, 42vw"
                      className={media.className}
                    />
                  )}
                  <figcaption>{media.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}
        {caseStudy ? (
          <section className="project-case-study" aria-labelledby="project-case-study-title">
            <div className="project-case-study__heading">
              <p className="eyebrow">Case study</p>
              <h2 id="project-case-study-title">{caseStudy.title}</h2>
              <p>{caseStudy.intro}</p>
              {caseStudy.origin ? (
                <div className="project-case-study__origin">
                  <span>Where it started</span>
                  <p>{caseStudy.origin}</p>
                </div>
              ) : null}
            </div>
            <div className="project-case-study__sections">
              {caseStudy.sections.map((section, index) => (
                <Fragment key={section.title}>
                  <article className={`project-case-study__section${section.media.type === "image" && section.media.width / section.media.height > 1.6 ? " project-case-study__section--wide-media" : ""}`}>
                    <div className="project-case-study__copy">
                      <p className="eyebrow">{section.label}</p>
                      <h3>{section.title}</h3>
                      <p>{section.body}</p>
                    </div>
                    <figure className="project-case-study__media">
                      {section.media.type === "image" ? (
                        <Image
                          src={section.media.src}
                          alt={section.media.alt}
                          width={section.media.width}
                          height={section.media.height}
                          sizes="(max-width: 800px) 100vw, 54vw"
                        />
                      ) : (
                        <video
                          controls
                          playsInline
                          preload="metadata"
                          poster={section.media.poster}
                          aria-label={section.media.label}
                        >
                          <source src={section.media.src} type="video/mp4" />
                        </video>
                      )}
                      <figcaption>{section.caption}</figcaption>
                    </figure>
                  </article>
                  {caseStudy.architecture && index + 1 === caseStudy.architecture.afterSection ? (
                    <section className="project-architecture" aria-labelledby="project-architecture-title">
                      <div className="project-architecture__heading">
                        <p className="eyebrow">{caseStudy.architecture.label}</p>
                        <h3 id="project-architecture-title">{caseStudy.architecture.title}</h3>
                        <p>{caseStudy.architecture.intro}</p>
                      </div>
                      <ol className="project-architecture__stages">
                        {caseStudy.architecture.stages.map((stage, stageIndex) => (
                          <li key={stage.title}>
                            <span>{String(stageIndex + 1).padStart(2, "0")}</span>
                            <h4>{stage.title}</h4>
                            <p>{stage.body}</p>
                            <small>{stage.note}</small>
                          </li>
                        ))}
                      </ol>
                    </section>
                  ) : null}
                  {caseStudy.evolution && index + 1 === caseStudy.evolution.afterSection ? (
                    <section className="project-evolution" aria-labelledby="project-evolution-title">
                      <div className="project-evolution__heading">
                        <p className="eyebrow">{caseStudy.evolution.label}</p>
                        <h3 id="project-evolution-title">{caseStudy.evolution.title}</h3>
                        <p>{caseStudy.evolution.intro}</p>
                      </div>
                      <ol className="project-evolution__track">
                        {caseStudy.evolution.items.map((item, itemIndex) => (
                          <li key={item.title}>
                            <figure>
                              <Image
                                src={item.src}
                                alt={item.alt}
                                width={item.width}
                                height={item.height}
                                sizes="(max-width: 800px) 78vw, 19vw"
                                loading="eager"
                              />
                              <figcaption>
                                <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                                <strong>{item.title}</strong>
                                <p>{item.body}</p>
                              </figcaption>
                            </figure>
                          </li>
                        ))}
                      </ol>
                    </section>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </section>
        ) : null}
      </section>

      <footer className="project-footer site-shell">
        <p>Open to robotics engineering roles.</p>
        <div className="project-footer__links">
          <Link href={nextProject ? `/projects/${nextProject.slug}` : "/work"} className="text-link">{nextProject ? `Next: ${nextProject.name}` : "All work"}</Link>
          <Link href="mailto:rami@rami-hanna.com" className="text-link">Start a conversation</Link>
        </div>
      </footer>
    </main>
  );
}
