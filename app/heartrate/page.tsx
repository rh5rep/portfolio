import Link from "next/link";
import { Reveal } from "@/components/Motion";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Archived Experiment | Heart Rate Extraction",
  description:
    "An archived signal-processing project using FFT and blind source separation for heart-rate extraction from video.",
};

const linkClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-white/86 px-5 py-2.5 text-sm font-medium text-stone-800 shadow-[0_12px_30px_rgba(45,33,22,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white hover:text-stone-950";

export default function Heartrate() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="rounded-[2.2rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-8 shadow-[0_28px_90px_rgba(45,33,22,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Archived experiment
              </p>
              <h1 className="font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                Heart-rate extraction from cellphone video using <span className="text-[var(--accent)]">FFT</span>{" "}
                and blind source separation.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-stone-700">
                Older work, but a real example of signal processing, observability, and turning
                noisy inputs into something measurable.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/learnit" className={linkClassName}>
                Back to archive
              </Link>
              <Link href="/travel" className={linkClassName}>
                Travel atlas
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto mt-8 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.04fr)_minmax(340px,0.96fr)] lg:px-8">
        <article className="rounded-[2rem] border border-stone-200/80 bg-white/88 p-4 shadow-[0_24px_70px_rgba(51,42,33,0.08)] sm:p-5">
          <video
            src="/images/heartrate.mp4"
            controls
            preload="metadata"
            className="w-full rounded-[1.5rem] bg-stone-950"
          />
        </article>

        <article className="rounded-[2rem] border border-stone-200/80 bg-[#f2eae0]/88 p-6 shadow-[0_24px_70px_rgba(51,42,33,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
            What mattered
          </p>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-stone-700">
            <li>Signal extraction under noisy capture conditions.</li>
            <li>MATLAB implementation using computer vision and signal-processing tooling.</li>
            <li>A good early example of the same instinct that shows up in later sensing work.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/pdfs/FinalFinalDSPProject.pdf" className={linkClassName}>
              Open paper
            </Link>
            <Link href="/pdfs/FinalDSPProject.pdf" className={linkClassName}>
              Open slides
            </Link>
          </div>
        </article>
      </Reveal>

      <Reveal as="section" className="mx-auto mt-8 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-[2rem] border border-stone-200/80 bg-white/88 p-3 shadow-[0_24px_70px_rgba(51,42,33,0.08)] sm:p-4">
          <iframe
            src="/pdfs/FinalFinalDSPProject.pdf"
            width="100%"
            height="760"
            className="min-h-[60vh] w-full rounded-[1.3rem] border-0 bg-white"
            title="Heart-rate extraction paper"
          />
        </article>
        <article className="rounded-[2rem] border border-stone-200/80 bg-white/88 p-3 shadow-[0_24px_70px_rgba(51,42,33,0.08)] sm:p-4">
          <iframe
            src="/pdfs/FinalDSPProject.pdf"
            width="100%"
            height="760"
            className="min-h-[60vh] w-full rounded-[1.3rem] border-0 bg-white"
            title="Heart-rate extraction slides"
          />
        </article>
      </Reveal>
    </main>
  );
}
