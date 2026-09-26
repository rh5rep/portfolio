import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Chat | Rami Hanna",
  description:
    "Schedule a short conversation with Rami Hanna about robotics, technical work, careers, or thoughtful collaboration.",
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
  ["15 min", "A quick introduction or focused question."],
  ["25 min", "The default for a useful conversation."],
  ["45 min", "A little more room for technical depth."],
];

export default function ChatPage() {
  return (
    <main>
      <SiteHeader />
      <section className="chat-page site-shell" aria-labelledby="chat-title">
        <div className="chat-page__intro">
          <p className="eyebrow">A conversation, not a pitch</p>
          <h1 id="chat-title">Let&apos;s find a time to <em>talk.</em></h1>
          <p className="chat-page__lead">
            I&apos;m always glad to compare notes on robotics, technical work, career paths, or an
            idea worth thinking through. Pick the amount of time that fits the conversation.
          </p>
          <div className="chat-page__actions">
            {schedulingUrl ? (
              <a className="button button--dark" href={schedulingUrl}>
                Find a time ↗
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
              Other ways to connect
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
            <p className="eyebrow">What to expect</p>
            <p>
              A browser-based video link will be included automatically. If another format is
              easier, reply to the confirmation and we&apos;ll adjust.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
