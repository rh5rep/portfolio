import Link from "next/link";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/profile", label: "About" },
  { href: "/life", label: "Life" },
  { href: "/resume", label: "Resume" },
];

const contactClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.92)] px-4 py-2 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-stone-950";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[rgba(248,242,233,0.86)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3 lg:gap-5">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-900"
            >
              Rami Hanna
            </Link>

            <nav className="flex flex-wrap gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center justify-center rounded-full border border-stone-200/90 bg-[rgba(255,249,241,0.76)] px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-[rgba(255,250,244,0.96)] hover:text-stone-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link href="mailto:s242507@dtu.dk" className={contactClassName}>
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
