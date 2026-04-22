import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "About | Rami Hanna",
  description:
    "Background, current focus, experience, and contact information for Rami Hanna.",
};

const buttonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.92)] px-5 py-2.5 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-stone-950";

const experience = [
  {
    period: "2025",
    organization: "PerPlant",
    detail: "Thermal sensing, CV data workflows, and robotics field tooling for precision agriculture.",
  },
  {
    period: "2024-2026",
    organization: "Technical University of Denmark",
    detail: "M.Sc. Autonomous Systems, with thesis work in soft-finger actuation modeling.",
  },
  {
    period: "2022-2023",
    organization: "Harvard Microrobotics",
    detail: "Robotics software and embedded systems in a startup-style lab environment.",
  },
  {
    period: "2022",
    organization: "Raytheon Technologies",
    detail: "Automation and vision-guided manufacturing systems.",
  },
  {
    period: "2019-2021",
    organization: "DEKA Research and Development",
    detail: "Controls, instrumentation, and data collection infrastructure.",
  },
];

const approach = [
  {
    title: "Start from reality",
    body: "I usually do best when the system is physical, the data is messy, and there are real users or operators somewhere in the loop.",
  },
  {
    title: "Make data usable",
    body: "A lot of my work has been about turning noisy sensing or field collection into something structured enough to trust and build on.",
  },
  {
    title: "Keep interfaces honest",
    body: "Whether it is a robot, a dataset, or a product surface, I care about making the behavior understandable instead of magical.",
  },
];

const archiveLinks = [
  {
    title: "Teradyne capstone",
    body: "Cartesian robotics, tool changing, load-cell feedback, and an IEEE-backed paper.",
    href: "/capstone",
    cta: "Open capstone",
  },
  {
    title: "Technical archive",
    body: "Earlier sensing and systems work, including heart-rate extraction from phone video.",
    href: "/learnit",
    cta: "Open archive",
  },
];

export default function Profile() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="rounded-[2.25rem] border border-stone-200/80 bg-[rgba(255,249,241,0.92)] p-8 shadow-[0_28px_90px_rgba(45,33,22,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                About
              </p>
              <h1 className="max-w-4xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                A systems engineer with product instincts and a high tolerance for messy reality.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-stone-700">
                I tend to do my best work where sensing, software, simulation, and human use all
                overlap. The common thread is taking something technically difficult and making it
                clearer, more structured, and more useful.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="rounded-[1.5rem] border border-stone-200 bg-[#efe3d6] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Base
                </p>
                <p className="mt-2 text-sm leading-7 text-stone-700">Copenhagen, Denmark</p>
              </div>
              <div className="rounded-[1.5rem] border border-stone-200 bg-[#e0e7e4] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Looking for
                </p>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  Robotics software, simulation, sensing systems, evaluation, and applied research.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/resume" className={buttonClassName}>
              Resume
            </Link>
            <Link href="mailto:s242507@dtu.dk" className={buttonClassName}>
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/ramiihanna/"
              target="_blank"
              rel="noreferrer"
              className={buttonClassName}
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 lg:grid-cols-[180px_minmax(0,1fr)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Experience
          </p>
          <div className="grid gap-2">
            <h2 className="max-w-4xl font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              Research environments, startups, and shipped systems all fed the same skill set.
            </h2>
            <p className="max-w-3xl text-base leading-7 text-stone-700 sm:text-lg">
              The settings changed. The pattern did not.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {experience.map((item, index) => (
            <article
              key={item.organization}
              className={`rounded-[1.7rem] border border-stone-200/80 p-5 shadow-[0_20px_55px_rgba(45,33,22,0.06)] ${
                index === 0 ? "bg-[#e0e7e4]" : "bg-[rgba(255,249,241,0.9)]"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                {item.period}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-stone-950">{item.organization}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 border-t border-stone-200/80 pt-10 lg:grid-cols-[180px_minmax(0,1fr)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Working style
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {approach.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[1.9rem] border border-stone-200/80 p-6 shadow-[0_20px_60px_rgba(45,33,22,0.06)] ${
                  index === 1 ? "bg-[#efe3d6]" : "bg-[rgba(255,249,241,0.88)]"
                }`}
              >
                <h2 className="font-serif text-3xl leading-tight text-stone-950">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-stone-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 border-t border-stone-200/80 pt-10 lg:grid-cols-[180px_minmax(0,1fr)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Earlier work
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            {archiveLinks.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)]"
              >
                <h2 className="font-serif text-3xl leading-tight text-stone-950">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-stone-700">{item.body}</p>
                <div className="mt-6">
                  <Link href={item.href} className={buttonClassName}>
                    {item.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-t border-stone-200/80 pt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
              Contact
            </p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              Easiest to reach by email or LinkedIn.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="mailto:s242507@dtu.dk" className={buttonClassName}>
              s242507@dtu.dk
            </Link>
            <Link href="/life" className={buttonClassName}>
              Life
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
