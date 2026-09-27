import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero hero--home site-shell" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="hero__kicker">Robotics Systems Engineer · Boston, MA · M.Sc. Autonomous Systems</p>
          <h1 id="hero-title">I build robotics systems that <em>help people</em> and work in the real world.</h1>
          <p className="hero__intro">
            I work where robotics software meets sensing, controls, embedded interfaces, and the
            messy details that make a system useful. My goal is to build technology that improves
            lives—from rehabilitation robotics to smarter field systems and safer autonomy.
          </p>
          <div className="hero__actions">
            <Link className="button button--dark" href="/work">
              View work
            </Link>
            <Link
              className="button button--quiet"
              href="/resume.pdf"
              download="Rami_Hanna_Robotics_Systems_Resume_2026.pdf"
            >
              Download résumé
            </Link>
            <Link className="button button--quiet button--chat" href="/chat">
              Let&apos;s chat
            </Link>
          </div>
        </div>
        <div className="hero__portrait-wrap">
          <Image
            src="/portfolio/rami-profile-2026.jpg"
            alt="Rami Hanna"
            width={1536}
            height={2298}
            priority
            sizes="(max-width: 520px) 70vw, (max-width: 720px) 64vw, 420px"
            className="hero__portrait"
          />
          <p className="hero__portrait-note">ROBOTS · SOFTWARE · PEOPLE</p>
        </div>
        <nav className="hero__quick-links" aria-label="Explore Rami Hanna's portfolio">
          <Link className="hero__quick-link--primary" href="/work">Work</Link>
          <Link href="/profile">Story</Link>
          <Link className="hero__quick-link--primary" href="/resume">Resume</Link>
          <Link href="/life">Life</Link>
          <Link href="/giving-back">Giving back</Link>
          <Link className="hero__quick-link--primary" href="/contact">Contact</Link>
        </nav>
      </section>
    </main>
  );
}
