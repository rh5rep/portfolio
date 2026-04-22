import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Technical Archive | Rami Hanna",
  description:
    "Archived technical projects and experiments that still show useful parts of how Rami Hanna learns and builds.",
};

const buttonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.92)] px-5 py-2.5 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-stone-950";

const archiveItems = [
  {
    eyebrow: "Signal processing",
    title: "Heart-rate extraction from cellphone video",
    body: "FFT, blind source separation, noisy inputs, and one of the earliest clear examples of the sensing instinct that kept showing up later.",
    href: "/heartrate",
    cta: "Open project",
  },
  {
    eyebrow: "Robotics systems",
    title: "Teradyne capstone and IEEE paper",
    body: "Tool changing, load-cell-informed control, automation workflows, and a project that forced controls and usability to coexist.",
    href: "/capstone",
    cta: "Open capstone",
  },
];

export default function LearnIt() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="rounded-[2.25rem] border border-stone-200/80 bg-[rgba(255,249,241,0.92)] p-8 shadow-[0_28px_90px_rgba(45,33,22,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Technical archive
              </p>
              <h1 className="max-w-4xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                A few earlier projects that still say something useful.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-stone-700">
                This is the smaller, earlier part of the technical story: sensing, controls, signal
                processing, and experiments that still connect cleanly to the work I do now.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/profile" className={buttonClassName}>
                Back to about
              </Link>
              <Link href="/#work" className={buttonClassName}>
                Current work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {archiveItems.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[2rem] border border-stone-200/80 p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] ${
                index === 1 ? "bg-[#efe3d6]" : "bg-[rgba(255,249,241,0.9)]"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                {item.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-stone-950">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-stone-700">{item.body}</p>
              <div className="mt-6">
                <Link href={item.href} className={buttonClassName}>
                  {item.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
