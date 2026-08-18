import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Language | Rami Hanna",
  description: "Why language learning matters to Rami Hanna outside technical work.",
};

const principles = [
  ["Attention", "You notice more when you cannot coast on fluency."],
  ["Patience", "Repetition, imperfect attempts, and slow accumulation are all part of the point."],
  ["Beginner mode", "A reliable way to keep humility and curiosity active together."],
];

export default function LanguagePage() {
  return (
    <main>
      <SiteHeader />
      <section className="language-page site-shell">
        <div className="language-page__intro">
          <p className="eyebrow">Language</p>
          <h1>Learning languages keeps me <em>teachable.</em></h1>
          <p>I do not treat it as a side credential. It is how I keep listening closely, stay comfortable being unfinished, and connect more thoughtfully with the places and people around me.</p>
        </div>
        <div className="language-page__principles">
          {principles.map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p className="eyebrow">{title}</p><h2>{body}</h2></div>
            </article>
          ))}
        </div>
        <div className="page-back-link"><Link className="text-link" href="/life">Back to life <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/travel">Travel atlas <span aria-hidden="true">↗</span></Link></div>
      </section>
    </main>
  );
}
