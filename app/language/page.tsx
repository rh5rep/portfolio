import Link from "next/link";
import { Reveal } from "@/components/Motion";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Language Learning | Rami Hanna",
  description:
    "A short page on why language learning matters to Rami Hanna beyond work and technical projects.",
};

const buttonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.92)] px-5 py-2.5 text-sm font-medium text-stone-900 shadow-[0_12px_30px_rgba(45,33,22,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white hover:text-stone-950";

const principles = [
  {
    eyebrow: "Attention",
    body: "You notice more when you cannot coast on fluency.",
  },
  {
    eyebrow: "Patience",
    body: "Language learning rewards repetition, imperfect attempts, and slow accumulation.",
  },
  {
    eyebrow: "Beginner mode",
    body: "It is one of the easiest ways I know to keep humility and curiosity active together.",
  },
];

export default function Language() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <Reveal as="section" className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="rounded-[2.25rem] border border-stone-200/80 bg-[rgba(255,249,241,0.92)] p-8 shadow-[0_28px_90px_rgba(45,33,22,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Language
              </p>
              <h1 className="max-w-4xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                Language learning keeps me <span className="text-[var(--accent)]">teachable</span>.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-stone-700">
                I do not treat it as a side credential. I like it because it keeps me attentive,
                patient, and comfortable not being polished yet.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/life" className={buttonClassName}>
                Back to life
              </Link>
              <Link href="/travel" className={buttonClassName}>
                Travel atlas
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal
              as="article"
              key={item.eyebrow}
              className={`rounded-[1.9rem] border border-stone-200/80 p-6 shadow-[0_20px_60px_rgba(45,33,22,0.06)] ${
                index === 1 ? "bg-[#efe3d6]" : "bg-[#f7f1e9]"
              }`}
              delay={index * 0.05}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                {item.eyebrow}
              </p>
              <p className="mt-4 text-base leading-7 text-stone-700">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
