import Link from "next/link";
import { FloatOnScroll, Reveal } from "@/components/Motion";
import SiteHeader from "@/components/SiteHeader";
import MapPanel from "./map-panel";
import { totalTravelPlaces, travelLocations, travelRegions } from "./travel-data";

export const metadata = {
  title: "Travel Atlas | Rami Hanna",
  description: "Travel, curiosity, and a map-first record of places Rami Hanna has spent time in.",
};

const buttonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.92)] px-5 py-2.5 text-sm font-medium text-stone-900 shadow-[0_12px_30px_rgba(45,33,22,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white hover:text-stone-950";

export default function Travel() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start">
          <div className="rounded-[2.25rem] border border-stone-200/80 bg-[rgba(255,249,241,0.92)] p-8 shadow-[0_28px_90px_rgba(45,33,22,0.08)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              Travel atlas
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
              A map of places I keep <span className="text-[var(--accent)]">returning to</span> in
              my head.
            </h1>
            <div className="mt-5 grid gap-4 text-base leading-7 text-stone-700 sm:text-lg">
              <p>
                I like noticing how geography changes routine, pace, and attention. The atlas is a
                simple way to keep that part of life visible.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.4rem] border border-stone-200 bg-[#f7f1e9] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Places logged
                </p>
                <p className="mt-2 font-serif text-4xl text-stone-950">{totalTravelPlaces}</p>
              </div>
              <div className="rounded-[1.4rem] border border-stone-200 bg-[#dde7e8] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Regions
                </p>
                <p className="mt-2 font-serif text-4xl text-stone-950">{travelRegions.length}</p>
              </div>
              <div className="rounded-[1.4rem] border border-stone-200 bg-[#f7f1e9] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Current base
                </p>
                <p className="mt-2 font-serif text-[2rem] leading-none text-stone-950">
                  Copenhagen
                </p>
                <p className="mt-2 text-sm text-stone-600">Denmark</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Australia", "Indonesia", "Sri Lanka", "New Zealand"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-200 bg-[rgba(255,250,244,0.96)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-stone-600"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/life" className={buttonClassName}>
                Back to life
              </Link>
              <Link href="/language" className={buttonClassName}>
                Language
              </Link>
            </div>
          </div>

          <FloatOnScroll
            className="rounded-[2.25rem] border border-stone-200/80 bg-[rgba(255,249,241,0.88)] p-4 shadow-[0_28px_90px_rgba(45,33,22,0.08)] sm:p-5"
            distance={14}
          >
            <MapPanel locations={travelLocations} heightClassName="h-[560px]" />
          </FloatOnScroll>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="rounded-[2.1rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Region overview
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {travelRegions.map((group, index) => (
              <Reveal
                as="article"
                key={group.region}
                className="rounded-[1.5rem] border border-stone-200/80 bg-[#f7f1e9] p-5"
                delay={index * 0.035}
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-serif text-2xl text-stone-950">{group.region}</h2>
                  <p className="text-sm font-medium text-stone-500">{group.places.length} places</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.places.map((place) => (
                    <span
                      key={place}
                      className="rounded-full border border-stone-200 bg-[rgba(255,250,244,0.96)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-stone-600"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}
