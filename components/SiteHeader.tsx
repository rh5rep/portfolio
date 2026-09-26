import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/profile", label: "Story" },
  { href: "/life", label: "Life" },
  { href: "/resume", label: "Resume" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <div className="site-header__identity">
          <Link href="/" className="site-mark" aria-label="Rami Hanna home">
            <span className="site-mark__dot" aria-hidden="true" />
            Rami Hanna
          </Link>
          <p className="site-header__availability">Open to new roles</p>
        </div>
        <div className="site-header__nav-group">
          <nav className="site-nav" aria-label="Primary navigation">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <nav className="site-socials" aria-label="Professional links">
            <Link href="https://www.linkedin.com/in/ramiihanna/" target="_blank" rel="noreferrer" aria-label="Rami Hanna on LinkedIn"><FaLinkedinIn aria-hidden="true" /></Link>
            <Link href="https://github.com/rh5rep" target="_blank" rel="noreferrer" aria-label="Rami Hanna on GitHub"><FaGithub aria-hidden="true" /></Link>
            <Link href="mailto:rami@rami-hanna.com" aria-label="Email Rami Hanna"><HiOutlineEnvelope aria-hidden="true" /></Link>
          </nav>
          <Link href="/contact" className="site-nav__contact">Contact</Link>
        </div>
      </div>
    </header>
  );
}
