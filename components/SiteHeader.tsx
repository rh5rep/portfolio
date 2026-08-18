import Link from "next/link";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/profile", label: "Story" },
  { href: "/writing", label: "Writing" },
  { href: "/life", label: "Life" },
  { href: "/resume", label: "Resume" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Link href="/" className="site-mark" aria-label="Rami Hanna home">
          <span className="site-mark__dot" aria-hidden="true" />
          Rami Hanna
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="site-nav__contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
