import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Life | Rami Hanna",
  description: "Travel, movement, food, and the personal side of Rami Hanna.",
};

const interests = [
  ["Travel", "Maps, coastlines, cities, and the habit of paying attention to place.", "/travel", "Open atlas"],
  ["Movement", "Cycling, surfing, climbing, salsa, hiking, and any excuse to keep learning physically.", null, null],
  ["Food", "Cooking as craft, hospitality, and a small experiment worth repeating.", null, null],
  ["Language", "A reminder to stay curious, listen closely, and be comfortable being a beginner.", "/language", "Language notes"],
];

export default function LifePage() {
  return (
    <main>
      <SiteHeader />
      <section className="life-page site-shell">
        <div className="life-page__intro">
          <p className="eyebrow">Life</p>
          <h1>Things that keep me <em>awake to the world.</em></h1>
          <p>The work is only part of the picture. I like places, people, movement, cooking, and the routines that make life feel expansive rather than efficient.</p>
        </div>
        <div className="life-page__images" aria-label="Scenes from Rami Hanna's life">
          <figure><Image src="/portfolio/life/hiking-highlands.jpg" alt="Walking through the highlands" width={4032} height={3024} priority sizes="(max-width: 800px) 100vw, 60vw" /><figcaption>Get outside.</figcaption></figure>
          <figure><Image src="/portfolio/life/climbing-wall.jpeg" alt="Outdoor climbing" width={2048} height={1536} sizes="(max-width: 800px) 100vw, 35vw" /><figcaption>Keep moving.</figcaption></figure>
          <figure><Image src="/portfolio/life/cooking-table.jpg" alt="Dinner table prepared at home" width={1152} height={2048} sizes="(max-width: 800px) 100vw, 35vw" /><figcaption>Feed people.</figcaption></figure>
        </div>
        <div className="life-page__list">
          {interests.map(([title, body, href, label]) => (
            <article key={title}>
              <p className="eyebrow">{title}</p>
              <h2>{body}</h2>
              {href && label ? <Link className="text-link" href={href}>{label} <span aria-hidden="true">↗</span></Link> : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
