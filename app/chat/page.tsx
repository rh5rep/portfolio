import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Chat | Rami Hanna",
  description:
    "Find a time to chat with Rami Hanna about robots, travel, cooking, ideas, or whatever is on your mind.",
  robots: {
    index: false,
    follow: false,
  },
};

const configuredSchedulingUrl =
  process.env.NEXT_PUBLIC_SCHEDULING_URL?.trim() || "https://cal.com/ramihanna/chat";
const schedulingUrl = configuredSchedulingUrl?.startsWith("https://")
  ? configuredSchedulingUrl
  : undefined;

const durations = [
  ["15 min", "A quick hello, a question, or one good tangent."],
  ["30 min", "Enough time to settle in and have a real conversation."],
  ["45 min", "For a story, a deep dive, or a proper rabbit hole."],
];

export default function ChatPage() {
  return (
    <main>
      <SiteHeader />
      <section className="chat-page site-shell" aria-labelledby="chat-title">
        <div className="chat-page__intro">
          <p className="eyebrow">Curiosity welcome</p>
          <h1 id="chat-title">Let&apos;s have a <em>chat.</em></h1>
          <p className="chat-page__lead">
            I always love a new perspective and a good conversation. Robots? Travel? Cooking? A
            half-formed idea? Or maybe you just want to talk to someone. No pitch or polished
            agenda needed—pick whatever time feels right.
          </p>
          <div className="chat-page__actions">
            {schedulingUrl ? (
              <a className="button button--dark" href={schedulingUrl}>
                Pick a time ↗
              </a>
            ) : (
              <Link
                className="button button--dark"
                href="mailto:rami@rami-hanna.com?subject=Conversation%20with%20Rami"
              >
                Suggest a time by email
              </Link>
            )}
            <Link className="button button--quiet" href="/contact">
              Other ways to say hello
            </Link>
          </div>
          <p className="chat-page__note">
            {schedulingUrl
              ? "Booking is handled through Cal.com. Your timezone is detected automatically, and private calendar details are never shown."
              : "Online booking is being set up. Email works in the meantime, and I am happy to work around your schedule."}
          </p>
        </div>

        <div className="chat-page__details">
          <p className="eyebrow">Choose what fits</p>
          <div className="chat-page__durations">
            {durations.map(([duration, description], index) => (
              <article key={duration}>
                <span>0{index + 1}</span>
                <div>
                  <h2>{duration}</h2>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="chat-page__expectation">
            <p className="eyebrow">Come as you are</p>
            <p>
              No preparation needed. You&apos;ll get a browser-based video link automatically; if
              another format is easier, just reply and we&apos;ll figure it out.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
