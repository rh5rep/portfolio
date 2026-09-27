import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Contact | Rami Hanna",
  description: "Contact Rami Hanna about robotics engineering roles, research, mentorship, or technical collaboration.",
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="contact contact--page">
        <div className="site-shell">
          <p className="availability"><span aria-hidden="true" /> Open to robotics engineering roles</p>
          <h1>Got a problem that refuses to stay inside one discipline?</h1>
          <p>I&apos;m always happy to talk robotics, research, prototypes, mentoring, or the strange bug that only appears on real hardware.</p>
          <div className="contact__links">
            <Link className="button button--dark" href="mailto:rami@rami-hanna.com">Email me</Link>
            <Link className="button button--quiet" href="/chat">Find a time</Link>
            <Link href="https://www.linkedin.com/in/ramiihanna/" target="_blank" rel="noreferrer">LinkedIn</Link>
            <Link href="https://github.com/rh5rep" target="_blank" rel="noreferrer">GitHub</Link>
            <Link href="/resume.pdf" download="Rami_Hanna_Robotics_Systems_Resume_2026.pdf">Download CV</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
