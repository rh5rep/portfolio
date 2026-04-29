import Link from "next/link";
import { Reveal } from "@/components/Motion";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "About | Rami Hanna",
  description:
    "Background, current focus, experience, and contact information for Rami Hanna.",
};

const buttonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.92)] px-5 py-2.5 text-sm font-medium text-stone-900 shadow-[0_12px_30px_rgba(45,33,22,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white hover:text-stone-950";

const experience = [
  {
    period: "2025",
    organization: "PerPlant",
    detail: "ROS2 field sensing + dataset tooling.",
  },
  {
    period: "2024-2026",
    organization: "Technical University of Denmark",
    detail: "Autonomous Systems M.Sc. + soft-finger thesis.",
  },
  {
    period: "2022-2023",
    organization: "Harvard Microrobotics",
    detail: "Underwater robotics software + embedded tooling.",
  },
  {
    period: "2022",
    organization: "Raytheon Technologies",
    detail: "Robot automation + vision-guided manufacturing.",
  },
  {
    period: "2019-2021",
    organization: "DEKA Research and Development",
    detail: "Controls, instrumentation, and test benches.",
  },
];

const approach = [
  {
    title: "Build against reality",
    body: "I usually do best when software has to meet hardware, sensors, operators, field conditions, or lab constraints instead of living only in a clean demo.",
  },
  {
    title: "Debug across layers",
    body: "I like work where the problem can be in the code, the middleware, the sensor, the fixture, the calibration, or the assumptions connecting them.",
  },
  {
    title: "Make behavior observable",
    body: "Whether it is a robot, a dataset, or a small app, I care about making the behavior inspectable enough to test, explain, and improve.",
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
    body: "Earlier sensing, controls, and signal-processing work, including heart-rate extraction from phone video.",
    href: "/learnit",
    cta: "Open archive",
  },
];

export default function Profile() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="rounded-[2.25rem] border border-stone-200/80 bg-[rgba(255,249,241,0.92)] p-8 shadow-[0_28px_90px_rgba(45,33,22,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                About
              </p>
              <h1 className="max-w-4xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                A hands-on <span className="text-[var(--accent)]">robotics engineer</span> with
                software, controls, and mechatronics instincts.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-stone-700">
                I tend to do my best work where code has to touch the physical world: sensing,
                control, simulation, hardware constraints, and the debugging that happens between
                them. The common thread is making technical behavior concrete enough to test and
                improve.
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
                  Robotics software, controls, mechatronics, simulation, sensing, and applied
                  research.
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
      </Reveal>

      <Reveal as="section" className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 lg:grid-cols-[180px_minmax(0,1fr)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Short timeline
          </p>
          <div className="grid gap-2">
            <h2 className="max-w-4xl font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              The shape of the work has stayed close to implementation.
            </h2>
            <p className="max-w-3xl text-base leading-7 text-stone-700 sm:text-lg">
              For the full breakdown, the resume page has the role summaries and contribution
              details.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {experience.map((item, index) => (
            <Reveal
              as="article"
              key={item.organization}
              className={`rounded-[1.7rem] border border-stone-200/80 p-5 shadow-[0_20px_55px_rgba(45,33,22,0.06)] ${
                index === 0 ? "bg-[#e0e7e4]" : "bg-[rgba(255,249,241,0.9)]"
              }`}
              delay={index * 0.035}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                {item.period}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-stone-950">{item.organization}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 border-t border-stone-200/80 pt-10 lg:grid-cols-[180px_minmax(0,1fr)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Working style
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {approach.map((item, index) => (
              <Reveal
                as="article"
                key={item.title}
                className={`rounded-[1.9rem] border border-stone-200/80 p-6 shadow-[0_20px_60px_rgba(45,33,22,0.06)] ${
                  index === 1 ? "bg-[#efe3d6]" : "bg-[rgba(255,249,241,0.88)]"
                }`}
                delay={index * 0.05}
              >
                <h2 className="font-serif text-3xl leading-tight text-stone-950">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-stone-700">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
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
      </Reveal>

      <Reveal as="section" className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
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
      </Reveal>
    </main>
  );
}
