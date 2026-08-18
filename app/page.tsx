import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero hero--home site-shell" aria-labelledby="hero-title">
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
          <p className="hero__kicker">Boston, MA · Robotics systems · 2026</p>
          <h1 id="hero-title">I build robotics systems that <em>help people</em> and work in the real world.</h1>
          <p className="hero__intro">
            I work where software meets sensing, controls, mechanics, and the messy details that
            make a system useful. My goal is to build technology that improves lives—from
            rehabilitation robotics to smarter field systems and safer autonomy.
          </p>
          <div className="hero__actions">
            <Link className="button button--dark" href="/work">Selected work</Link>
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
          <Link href="/work">Work</Link>
          <Link href="/profile">Story</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/life">Life</Link>
          <Link href="/giving-back">Giving back</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </section>
    </main>
  );
}
