import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Giving Back | Rami Hanna",
  description: "Community, mentorship, and the values behind Rami Hanna's engineering work.",
};

export default function GivingBackPage() {
  return (
    <main>
      <SiteHeader />
      <section className="purpose-page site-shell">
        <p className="eyebrow">Giving back</p>
        <h1>Technical opportunity should feel <em>within reach.</em></h1>
        <div className="purpose-page__grid">
          <div>
            <p>
              Having left Lebanon with my family as a young child, I care about access, community,
              and making people feel that technical work is something they can belong in.
            </p>
            <p>
              I have supported robotics and programming mentorship and community service, and I
              enjoy sharing what I learn—especially when a small bit of practical help makes a
              complicated path feel more possible.
            </p>
          </div>
          <aside>
            <p className="eyebrow">How I can help</p>
            <ul>
              <li>Robotics and programming mentorship</li>
              <li>Hands-on technical teaching</li>
              <li>Early product and prototype feedback</li>
            </ul>
            <Link className="button button--dark" href="mailto:rami@rami-hanna.com?subject=Community%20or%20mentorship%20idea">
              Start a conversation
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
