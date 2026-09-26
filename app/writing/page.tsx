import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Writing | Rami Hanna",
  description: "Notes from Rami Hanna on robotics, systems, experiments, and the human side of technical work.",
};

const posts = [
  {
    label: "Field note",
    title: "Make the real constraint observable.",
    deck: "A system gets easier to improve when its physical, data, or human constraints become visible to everyone working on it.",
    topic: "Robotics · experiments",
  },
  {
    label: "Field note",
    title: "A prototype should teach you something specific.",
    deck: "The line between a convincing demonstration and an experiment that exposes what is actually happening is usually where the useful work begins.",
    topic: "Engineering practice",
  },
  {
    label: "Field note",
    title: "Good interfaces respect the work beneath them.",
    deck: "An interface should remove friction without pretending that a real-world system is simple. That applies equally to sensing tools and small consumer products.",
    topic: "Product · systems",
  },
];

export default function WritingPage() {
  return (
    <main>
      <SiteHeader />
      <section className="writing-page site-shell">
        <header className="writing-page__masthead">
          <p className="eyebrow">Rami&apos;s notebook</p>
          <h1>Thoughts from the bench, the field, and the <em>work-in-progress.</em></h1>
          <p>Short, occasional posts on robotics, product, experiments, and whatever I am learning in public. This is intentionally a living page—not a polished archive.</p>
          <Link className="button button--dark" href="mailto:rami@rami-hanna.com?subject=Writing%20note%20or%20conversation">Reply by email</Link>
        </header>
        <div className="writing-list writing-list--publication">
          {posts.map((post, index) => (
            <article key={post.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="eyebrow">{post.label} · {post.topic}</p>
                <h2>{post.title}</h2>
                <p>{post.deck}</p>
                <button className="text-link" type="button" disabled aria-label={`${post.title} will be published soon`}>Publishing soon</button>
              </div>
            </article>
          ))}
        </div>
        <div className="writing-page__footer"><p>Want to suggest a topic or talk through an idea?</p><Link className="text-link" href="mailto:rami@rami-hanna.com?subject=Writing%20or%20project%20note">Get in touch <span aria-hidden="true">↗</span></Link></div>
      </section>
    </main>
  );
}
