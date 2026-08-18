import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Writing | Rami Hanna",
  description: "Working notes on robotics, experimentation, and making technical systems useful.",
};

const notes = [
  {
    number: "01",
    title: "Make the real constraint observable.",
    body: "The useful first step is rarely adding complexity. It is finding the physical, data, or human constraint that is already shaping the system—and giving the team a way to see it.",
  },
  {
    number: "02",
    title: "A prototype should teach you something specific.",
    body: "I care about the line between a convincing demonstration and an experiment that exposes what is actually happening. The second one is usually more valuable.",
  },
  {
    number: "03",
    title: "Good interfaces respect the work beneath them.",
    body: "Whether it is field sensing or a small consumer app, the interface should remove friction without pretending that the real-world system is simple.",
  },
];

export default function WritingPage() {
  return (
    <main>
      <SiteHeader />
      <section className="writing-page site-shell">
        <div className="writing-page__intro">
          <p className="eyebrow">Writing</p>
          <h1>Notes on making technical work more <em>useful.</em></h1>
          <p>Short working ideas from projects at the intersection of robotics, experiments, and product thinking.</p>
        </div>
        <div className="writing-list">
          {notes.map((note) => (
            <article key={note.number}>
              <span>{note.number}</span>
              <div>
                <h2>{note.title}</h2>
                <p>{note.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="writing-page__footer">
          <p>More notes will grow out of the work as the projects do.</p>
          <Link className="text-link" href="mailto:s242507@dtu.dk?subject=Writing%20or%20project%20note">Continue the conversation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
