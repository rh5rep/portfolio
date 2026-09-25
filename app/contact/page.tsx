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
          <h1>Let&apos;s build something that matters.</h1>
          <p>For roles, research collaborations, mentorship, or a good technical conversation.</p>
          <div className="contact__links">
            <Link className="button button--dark" href="mailto:s242507@dtu.dk">Email me</Link>
            <Link href="https://www.linkedin.com/in/ramiihanna/" target="_blank" rel="noreferrer">LinkedIn ↗</Link>
            <Link href="https://github.com/rh5rep" target="_blank" rel="noreferrer">GitHub ↗</Link>
            <Link href="/resume.pdf" download="Rami_Hanna_Robotics_Systems_Resume.pdf">Download CV ↓</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
