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
        </div>
        <div className="hero__portrait-wrap">
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
          <Link href="/resume">Resume</Link>
          <Link href="/life">Life</Link>
          <Link href="/giving-back">Giving back</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </section>
    </main>
  );
}
