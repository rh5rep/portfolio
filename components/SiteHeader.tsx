"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/profile", label: "About" },
  { href: "/life", label: "Life" },
  { href: "/resume", label: "Resume" },
];

const contactClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.92)] px-4 py-2 text-sm font-medium text-stone-900 shadow-[0_10px_28px_rgba(45,33,22,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white hover:text-stone-950";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[rgba(248,242,233,0.82)] shadow-[0_1px_0_rgba(255,255,255,0.42)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3 lg:gap-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-stone-900"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] transition group-hover:scale-125" />
              <span>Rami Hanna</span>
            </Link>

            <nav className="flex flex-wrap gap-2">
              {navLinks.map((item) => {
                const isActive =
                  item.href === "/#work"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:border-stone-300 hover:bg-[rgba(255,250,244,0.96)] hover:text-stone-950 ${
                      isActive
                        ? "border-[rgba(185,111,71,0.34)] bg-[rgba(185,111,71,0.1)] text-stone-950"
                        : "border-stone-200/90 bg-[rgba(255,249,241,0.72)] text-stone-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
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
