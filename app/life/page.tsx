import Image from "next/image";
import Link from "next/link";
import { FloatOnScroll, Reveal } from "@/components/Motion";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Life | Rami Hanna",
  description:
    "Travel, movement, language learning, food, and the rest of the personal side of Rami Hanna.",
};

const buttonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.92)] px-5 py-2.5 text-sm font-medium text-stone-900 shadow-[0_12px_30px_rgba(45,33,22,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white hover:text-stone-950";

const sections = [
  {
    eyebrow: "Travel",
    title: "Maps, cities, coastlines, and the habit of paying attention to place.",
    body: "The atlas lives on its own page now, with the map and the places doing most of the talking.",
    href: "/travel",
    cta: "Open atlas",
    tone: "bg-[#dde7e8]",
  },
  {
    eyebrow: "Movement",
    title: "Surfing, climbing, salsa, hiking, training, and finding excuses to stay in motion.",
    body: "A lot of curiosity is physical for me. I like learning with my body as much as I like learning at a desk.",
    tone: "bg-[rgba(255,249,241,0.9)]",
  },
  {
    eyebrow: "Food",
    title: "Cooking is part craft, part hospitality, part experiment.",
    body: "I like making meals that feel considered without feeling precious.",
    tone: "bg-[#efe3d6]",
  },
  {
    eyebrow: "Language",
    title: "Language learning keeps me attentive and comfortable being a beginner.",
    body: "It is one of the cleanest ways I know to keep curiosity active without pretending fluency too early.",
    href: "/language",
    cta: "Open language page",
    tone: "bg-[rgba(255,249,241,0.9)]",
  },
];

export default function Life() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(320px,1.14fr)] lg:items-start">
          <div className="rounded-[2.25rem] border border-stone-200/80 bg-[rgba(255,249,241,0.92)] p-8 shadow-[0_28px_90px_rgba(45,33,22,0.08)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              Life
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
              Travel, <span className="text-[var(--accent)]">movement</span>, food, and the rest of
              the habits that keep me awake to the world.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
              The work is only part of the picture. I like coastlines, mountain trails,
              climbing walls, cooking for people, language learning, and the kinds of routines that
              make life feel expansive rather than efficient.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/travel" className={buttonClassName}>
                Travel atlas
              </Link>
              <Link href="/language" className={buttonClassName}>
                Language
              </Link>
            </div>
          </div>

          <FloatOnScroll className="grid gap-4 sm:grid-cols-2" distance={16}>
            <div className="overflow-hidden rounded-[1.9rem] border border-stone-200/80 shadow-[0_22px_56px_rgba(45,33,22,0.08)] sm:col-span-2">
              <Image
                src="/portfolio/life/hiking-highlands.jpg"
                alt="Walking through the highlands"
                width={4032}
                height={3024}
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="aspect-[16/10] h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.9rem] border border-stone-200/80 shadow-[0_22px_56px_rgba(45,33,22,0.08)]">
              <Image
                src="/portfolio/life/climbing-wall.jpeg"
                alt="Outdoor climbing"
                width={2048}
                height={1536}
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 24vw"
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.9rem] border border-stone-200/80 shadow-[0_22px_56px_rgba(45,33,22,0.08)]">
              <Image
                src="/portfolio/life/cooking-table.jpg"
                alt="Dinner table prepared at home"
                width={1152}
                height={2048}
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 24vw"
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>
          </FloatOnScroll>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {sections.map((item) => (
            <Reveal
              as="article"
              key={item.title}
              className={`rounded-[2rem] border border-stone-200/80 p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] ${item.tone}`}
              delay={sections.indexOf(item) * 0.045}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                {item.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-stone-950">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-stone-700">{item.body}</p>
              {item.href ? (
                <div className="mt-6">
                  <Link href={item.href} className={buttonClassName}>
                    {item.cta}
                  </Link>
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.1rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] sm:p-8">
          <div className="flex flex-wrap gap-2">
            {[
              "Sydney",
              "Bali",
              "Komodo",
              "Sri Lanka",
              "New Zealand",
              "Surfing",
              "Hiking",
              "Salsa",
              "Cooking",
              "Language learning",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-stone-200 bg-[rgba(255,250,244,0.96)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-stone-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </main>
  );
}
