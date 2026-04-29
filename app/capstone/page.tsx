import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Teradyne Capstone | Rami Hanna",
  description: "Cartesian robotics, controls, and automation work from the Teradyne senior design project.",
};

const media = [
  {
    type: "image" as const,
    source: "/images/Cartesian-Robot.jpg",
    title: "Integrated Cartesian robot",
    description:
      "The full system combined motion hardware, connector targeting, and the broader automation flow around mating and verification.",
  },
  {
    type: "image" as const,
    source: "/images/RobotRender.jpg",
    title: "Early redesign model",
    description:
      "An early CAD-stage view of the redesign, used to work through the mechanical layout before integration.",
  },
  {
    type: "image" as const,
    source: "/images/RobotPicture.jpg",
    title: "Assembly and integration",
    description:
      "Initial assembly with linear rails, anti-backlash hardware, and the base structure for the coupling setup.",
  },
  {
    type: "image" as const,
    source: "/images/30_min_drift_10_min_tare_2.png",
    title: "Load-cell characterization",
    description:
      "Bench testing around the cantilever load cell used for force-aware mating logic and closed-loop behavior.",
  },
  {
    type: "video" as const,
    source: "/images/GUI Redesign Explaination_Trim.mp4",
    title: "Automation interface walkthrough",
    description:
      "A narrated look at the GUI redesign and scheduling flow developed for more usable automation control.",
  },
  {
    type: "video" as const,
    source: "/images/vid1.MOV",
    title: "Single automated mate",
    description:
      "One example of the robot executing a connector mating sequence with verification on the system side.",
  },
];

const linkClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-white/80 px-5 py-2.5 text-sm font-medium text-stone-800 shadow-[0_12px_30px_rgba(45,33,22,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white hover:text-stone-950";

export default function Capstone() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="rounded-[2.2rem] border border-stone-200/90 bg-[rgba(255,249,241,0.9)] p-8 shadow-[0_30px_90px_rgba(42,35,26,0.08)] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
            <div className="grid gap-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Robotics + controls
              </p>
              <h1 className="font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                <span className="text-[var(--accent)]">Teradyne</span> senior design project
              </h1>
              <p className="text-lg leading-8 text-stone-700">
                This project focused on automating coaxial connector mating during test procedures
                with a Cartesian robot, tool-changing logic, and sensing-informed control.
              </p>
              <div className="grid gap-4 text-sm leading-7 text-stone-700 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-stone-950">What I contributed</p>
                  <p>
                    I handled the programming side of the robot, including remote operation,
                    automatic tool changing, load-cell-based closed-loop control, and a redesigned
                    GUI for running automation workflows more clearly.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-stone-950">What came out of it</p>
                  <p>
                    The project reached 0.01 mm travel precision and 0.5 g load standard deviation,
                    and the work was associated with an IEEE publication.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/pdfs/modified_capstone.pdf"
                  download="Rami_Hanna_Teradyne_IEEE_Paper.pdf"
                  className={linkClassName}
                >
                  Download paper
                </Link>
                <Link href="/learnit" className={linkClassName}>
                  Back to archive
                </Link>
              </div>
            </div>

            <aside className="rounded-[1.9rem] border border-stone-200 bg-[#efe3d6] p-6 text-stone-900">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                Project frame
              </p>
              <div className="mt-5 grid gap-5 text-sm leading-7 text-stone-700">
                <p>
                  Team: three Electromechanical Engineering students at Wentworth Institute of
                  Technology with guidance from Professor James McCusker and Brian C. Wadell at
                  Teradyne.
                </p>
                <p>
                  System scope: detect and execute connector mating within an array, support
                  automation around changing toolheads, and make the operator workflow much more
                  practical than a one-off demo.
                </p>
                <p>
                  Technical themes: Cartesian robotics, scheduling, instrumentation, closed-loop
                  control, verification logic, and operator tooling for real engineering use.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto mt-8 grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8 xl:grid-cols-3">
        {media.map((item, index) => (
          <Reveal
            as="article"
            key={item.source}
            className="overflow-hidden rounded-[1.8rem] border border-stone-200/90 bg-white/85 shadow-[0_24px_60px_rgba(42,35,26,0.08)]"
            delay={index * 0.035}
          >
            {item.type === "image" ? (
              <div className="relative aspect-[4/3] bg-stone-100">
                <Image
                  src={item.source}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="aspect-video bg-stone-950">
                <video
                  src={item.source}
                  controls
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="grid gap-3 p-5">
              <h2 className="font-serif text-2xl text-stone-950">{item.title}</h2>
              <p className="text-sm leading-7 text-stone-700">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </Reveal>

      <Reveal as="section" className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-stone-200/90 bg-[rgba(255,249,241,0.92)] p-3 shadow-[0_26px_70px_rgba(42,35,26,0.08)] sm:p-4">
          <iframe
            src="/pdfs/modified_capstone.pdf"
            width="100%"
            height="900"
            className="min-h-[72vh] w-full rounded-[1.4rem] border-0 bg-white"
            title="Teradyne capstone paper"
          />
        </div>
      </Reveal>
    </main>
  );
}
