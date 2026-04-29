import Image from "next/image";
import Link from "next/link";
import { FloatOnScroll, Reveal } from "@/components/Motion";
import SiteHeader from "@/components/SiteHeader";

const buttonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.94)] px-5 py-2.5 text-sm font-medium text-stone-900 shadow-[0_12px_30px_rgba(45,33,22,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white hover:text-stone-950";

const quietButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-200/80 bg-transparent px-4 py-2 text-sm font-medium text-stone-700 transition duration-300 hover:-translate-y-0.5 hover:border-stone-300 hover:bg-[rgba(255,250,244,0.72)] hover:text-stone-950";

const atlasButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-[#c4d6db] bg-[#dbe8eb] px-5 py-2.5 text-sm font-medium text-stone-900 shadow-[0_12px_30px_rgba(45,33,22,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[#aabfc5] hover:bg-[#d2e1e5]";

const focusAreas = [
  "Robotics software",
  "Controls + autonomy",
  "Mechatronics + sensing",
];

const projects = [
  {
    name: "SunnySips",
    eyebrow: "Applied software + environmental modeling",
    title: "SunnySips turns geometry, weather, and map data into a fast outdoor recommendation tool.",
    body: "The useful part is the translation layer: taking physical conditions like sun angle, urban occlusion, and weather attenuation, then making the computation reliable enough to drive a simple user-facing app.",
    bullets: [
      "Modeled changing outdoor conditions rather than relying on static cafe lists.",
      "Tightened data contracts, defaults, and snapshots so the app behavior stayed predictable.",
    ],
    pills: ["SwiftUI", "FastAPI", "Geospatial modeling", "Weather data"],
    href: "/projects/sunnysips",
    media: (
      <div className="rounded-[2rem] border border-stone-200/80 bg-[#f5ebdf] p-5">
        <div className="relative mx-auto max-w-[330px] pb-16">
          <div className="mx-auto w-[78%] overflow-hidden rounded-[1.8rem] border border-stone-300/70 shadow-[0_24px_44px_rgba(73,57,32,0.12)]">
            <Image
              src="/portfolio/sunnysips-map.png"
              alt="SunnySips map interface"
              width={1206}
              height={2622}
              loading="eager"
              sizes="(max-width: 1024px) 62vw, 22vw"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[42%] overflow-hidden rounded-[1.35rem] border border-stone-300/70 bg-white shadow-[0_20px_40px_rgba(73,57,32,0.12)]">
            <Image
              src="/portfolio/sunnysips-recommendations.png"
              alt="SunnySips recommendations view"
              width={1206}
              height={2622}
              loading="eager"
              sizes="(max-width: 1024px) 30vw, 10vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "TRYBE",
    eyebrow: "Mobile software + product architecture",
    title: (
      <>
        <span className="font-sans text-[0.84em] font-semibold uppercase italic tracking-[0.08em] text-[#d46a2e]">
          TRYBE
        </span>{" "}
        explores how mobile architecture and interaction design can make a new behavior feel easy to try.
      </>
    ),
    body: "This is the least robotics-heavy project, but it still shows how I think about software: define the loop, make the states concrete, plan the backend shape, and keep the interface honest about what the app can actually do.",
    bullets: [
      "Mapped sessions, perks, and partner logic into a concrete mobile flow.",
      "Used interface decisions to expose real constraints instead of hiding them behind vague product language.",
    ],
    pills: ["iOS structure", "Backend planning", "State design", "UX systems"],
    href: "/projects/trybe",
    media: (
      <div className="rounded-[2rem] border border-stone-200/80 bg-[#f6eadb] p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-[#fff7f1] p-3 shadow-[0_18px_40px_rgba(45,33,22,0.08)]">
            <Image
              src="/portfolio/trybe-sessions.png"
              alt="TRYBE sessions screen"
              width={520}
              height={980}
              loading="eager"
              sizes="(max-width: 1024px) 40vw, 16vw"
              className="h-auto w-full"
            />
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-[#fff7f1] p-3 shadow-[0_18px_40px_rgba(45,33,22,0.08)]">
            <Image
              src="/portfolio/trybe-perks.png"
              alt="TRYBE perks screen"
              width={520}
              height={980}
              loading="eager"
              sizes="(max-width: 1024px) 40vw, 16vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Thesis",
    eyebrow: "Robotics research + modeling",
    title:
      "Biomechanical modeling and experimental validation for a soft variable-stiffness finger actuator.",
    body:
      "M.Sc. thesis in progress: a simulation-first framework for a simplified index-finger actuation system, moving from reduced-order modeling and Python simulation toward closed-loop benchtop validation.",
    bullets: [
      "Models tendon-routing geometry, passive joint torque, actuator leverage, tendon stroke, and tension estimates.",
      "Plans validation through force-displacement measurement, motion tracking, repeatability tests, and model-vs-experiment error analysis.",
    ],
    pills: ["Python simulation", "Variable stiffness", "Benchtop validation", "Motion tracking"],
    href: "/projects/thesis",
    media: (
      <div className="rounded-[2rem] border border-stone-700/60 bg-[#2e2b28] p-5 text-stone-100 shadow-[0_26px_70px_rgba(31,26,22,0.18)]">
        <div className="rounded-[1.55rem] border border-stone-600/60 bg-[linear-gradient(180deg,rgba(255,248,240,0.08),rgba(255,248,240,0.03))] p-5">
          <div className="flex items-center gap-4 rounded-[1.3rem] border border-stone-600/60 bg-[rgba(255,248,240,0.04)] p-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] border border-stone-500/70 bg-[rgba(220,197,179,0.1)] text-lg font-semibold text-stone-100">
              SF
            </div>
            <div className="grid gap-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                Thesis object
              </p>
              <p className="font-serif text-2xl text-stone-100">Index-finger actuator model</p>
              <p className="text-sm leading-6 text-stone-300">
                Reduced-order simulation and validation framework under development.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            {[
              "Model kinematics",
              "Screen actuator designs",
              "Validate against bench data",
            ].map((item, index) => (
              <div key={item} className="contents">
                <div className="rounded-[1.2rem] border border-stone-600/70 bg-[rgba(255,248,240,0.04)] p-4 text-sm font-medium text-stone-200">
                  {item}
                </div>
                {index < 2 ? (
                  <div className="mx-auto hidden h-px w-8 bg-stone-600 sm:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {["Tendon routing", "Closed-loop input", "Error analysis"].map((item) => (
            <div
              key={item}
              className="rounded-[1.2rem] border border-stone-600/70 bg-[rgba(255,248,240,0.06)] px-4 py-4 text-sm font-medium text-stone-100"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "PerPlant",
    eyebrow: "Robotics field tooling + sensing",
    title: "PerPlant combined ROS2 field sensing with cleaner computer-vision dataset workflows.",
    body: "This is closest to the robotics-software story: wiring sensing into field collection, carrying metadata through the workflow, and building data tools that make downstream perception work less brittle.",
    bullets: [
      "Thermal + GPS collection was built around real field conditions, not ideal capture.",
      "Filtering, embeddings, clustering, and grouped splits were used to reduce leakage and redundancy.",
    ],
    pills: ["ROS2", "Thermal + GPS", "Field tooling", "Dataset quality"],
    href: "/projects/perplant",
    media: (
      <div className="rounded-[2rem] border border-stone-200/80 bg-[#ede5dc] p-5">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.45rem] border border-stone-200 bg-[rgba(255,250,244,0.92)] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Collection
            </p>
            <h4 className="mt-3 font-serif text-2xl text-stone-950">ROS2 thermal imaging</h4>
            <p className="mt-3 text-sm leading-7 text-stone-700">
              Thermal imagery published through ROS2 in C++ and Python, with GPS geotagging folded
              directly into the field workflow.
            </p>
          </div>
          <div className="rounded-[1.45rem] border border-stone-200 bg-[rgba(255,250,244,0.92)] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Curation
            </p>
            <h4 className="mt-3 font-serif text-2xl text-stone-950">Representative subsets</h4>
            <p className="mt-3 text-sm leading-7 text-stone-700">
              ROI filtering, detector embeddings, UMAP, HDBSCAN, and grouped splits used to shrink
              annotation batches without losing coverage.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const projectOrder = ["PerPlant", "Thesis", "SunnySips", "TRYBE"];
const selectedProjects = projectOrder
  .map((name) => projects.find((project) => project.name === name))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

export default function Home() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start lg:gap-12">
          <div className="grid gap-7">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
              Copenhagen, Denmark | DTU M.Sc. Autonomous Systems
            </p>
            <h1 className="max-w-5xl font-serif text-5xl leading-[0.94] text-stone-950 sm:text-6xl lg:text-[4.85rem]">
              I build <span className="text-[var(--accent)]">robotics</span> software, controls,
              and sensing tools that hold up outside ideal conditions.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-stone-700 sm:text-xl">
              My work sits where software, physical hardware, and messy data meet. I care about
              practical implementation, simulation, evaluation, and interfaces that make technical
              behavior clear to the people using the tool.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#work" className={buttonClassName}>
                View selected work
              </Link>
              <Link href="/profile" className={buttonClassName}>
                About
              </Link>
              <Link href="/resume" className={buttonClassName}>
                Resume
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-stone-200 bg-[rgba(255,249,241,0.86)] px-4 py-2 text-sm font-medium text-stone-700"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <FloatOnScroll className="grid gap-4" distance={18}>
            <div className="relative overflow-hidden rounded-[2.25rem] border border-stone-200/80 bg-[#eadbcc] p-4 shadow-[0_28px_90px_rgba(45,33,22,0.1)]">
              <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(185,111,71,0.2),rgba(185,111,71,0))]" />
              <div className="relative overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/portfolio/rami-profile-2026.jpg"
                  alt="Portrait of Rami Hanna"
                  width={1536}
                  height={2048}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="aspect-[4/5] h-auto w-full object-cover object-[52%_42%]"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-5 shadow-[0_18px_50px_rgba(45,33,22,0.06)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Currently
                </p>
                <p className="mt-3 text-[15px] leading-7 text-stone-700">
                  Finishing a DTU thesis on soft-finger actuation modeling and looking for work in
                  robotics software, controls, simulation, and sensing-heavy robotics work.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-stone-200/80 bg-[#efe3d6] p-5 shadow-[0_18px_50px_rgba(45,33,22,0.06)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Read / reach
                </p>
                <div className="mt-3 grid gap-2 text-[15px] font-semibold text-stone-900">
                  <Link href="/pdfs/rami-hanna-thesis.pdf" className="transition hover:text-stone-950">
                    Thesis PDF
                  </Link>
                  <Link href="/life" className="transition hover:text-stone-950">
                    Life outside work
                  </Link>
                  <Link href="mailto:s242507@dtu.dk" className="transition hover:text-stone-950">
                    s242507@dtu.dk
                  </Link>
                </div>
              </div>
            </div>
          </FloatOnScroll>
        </div>
      </Reveal>

      <Reveal as="section" id="work" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="grid gap-3 lg:grid-cols-[180px_minmax(0,1fr)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Selected work
          </p>
          <div className="grid gap-2">
            <h2 className="max-w-4xl font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              Four projects that show the range.
            </h2>
            <p className="max-w-3xl text-base leading-7 text-stone-700 sm:text-lg">
              The first two are closest to robotics, sensing, and hardware. The later work shows
              the same software instincts applied to modeling, data, and user-facing tools.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {selectedProjects.map((project, index) => (
            <Reveal
              key={project.name}
              as="article"
              className="overflow-hidden rounded-[2rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] shadow-[0_24px_70px_rgba(45,33,22,0.08)]"
              delay={Math.min(index * 0.04, 0.16)}
            >
              <div
                className={`flex min-h-[240px] items-center justify-center overflow-hidden p-5 ${
                  project.name === "Thesis" ? "bg-[#2e2b28]" : "bg-[#f4eadf]"
                }`}
              >
                {project.name === "SunnySips" ? (
                  <div className="relative mx-auto flex h-[220px] w-full max-w-[360px] items-end justify-center">
                    <Image
                      src="/portfolio/sunnysips-map.png"
                      alt="SunnySips map interface"
                      width={1206}
                      height={2622}
                      sizes="260px"
                      className="h-full w-auto rounded-[1.1rem] border border-stone-300/70 shadow-[0_16px_34px_rgba(73,57,32,0.12)]"
                    />
                    <Image
                      src="/portfolio/sunnysips-recommendations.png"
                      alt="SunnySips recommendations view"
                      width={1206}
                      height={2622}
                      sizes="140px"
                      className="-ml-8 h-[68%] w-auto rounded-[0.9rem] border border-stone-300/70 shadow-[0_14px_30px_rgba(73,57,32,0.12)]"
                    />
                  </div>
                ) : project.name === "TRYBE" ? (
                  <div className="flex h-[220px] items-center justify-center gap-4">
                    {["/portfolio/trybe-sessions.png", "/portfolio/trybe-perks.png"].map(
                      (src, imageIndex) => (
                        <Image
                          key={src}
                          src={src}
                          alt={imageIndex === 0 ? "TRYBE sessions screen" : "TRYBE perks screen"}
                          width={520}
                          height={980}
                          sizes="150px"
                          className="h-full w-auto rounded-[1.1rem] border border-stone-200 bg-[#fff7f1] p-2 shadow-[0_14px_30px_rgba(45,33,22,0.08)]"
                        />
                      ),
                    )}
                  </div>
                ) : (
                  <div className="w-full scale-[0.88]">{project.media}</div>
                )}
              </div>

              <div className="grid gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                    {project.eyebrow}
                  </p>
                </div>

                <div className="grid gap-3">
                  <h3 className="font-serif text-2xl leading-tight text-stone-950 sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-7 text-stone-700">{project.body}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {project.pills.slice(0, 3).map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-stone-200 bg-[rgba(255,250,244,0.9)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <Link href={project.href} className={quietButtonClassName}>
                  Project details
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-t border-stone-200/80 pt-10 lg:grid-cols-[minmax(0,0.84fr)_minmax(320px,1.16fr)] lg:items-start">
          <div className="grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
              Away from work
            </p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              Travel, water, mountains, movement, and cooking keep the rest of the work grounded.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-stone-700 sm:text-lg">
              Outside work, I spend a lot of time around places, routines, and hobbies that keep
              curiosity concrete.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/life" className={buttonClassName}>
                Open life page
              </Link>
              <Link href="/travel" className={atlasButtonClassName}>
                Travel atlas
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[1.9rem] border border-stone-200/80 shadow-[0_22px_56px_rgba(45,33,22,0.08)]">
              <Image
                src="/portfolio/life/surfing-bali.jpeg"
                alt="Rami preparing to surf"
                width={2048}
                height={1536}
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 20vw"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.9rem] border border-stone-200/80 shadow-[0_22px_56px_rgba(45,33,22,0.08)]">
              <Image
                src="/portfolio/life/copenhagen-gainer.jpeg"
                alt="Backflip into the water in Copenhagen"
                width={1536}
                height={2048}
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 20vw"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.9rem] border border-stone-200/80 shadow-[0_22px_56px_rgba(45,33,22,0.08)]">
              <Image
                src="/portfolio/life/hiking-highlands.jpg"
                alt="Walking through the highlands"
                width={4032}
                height={3024}
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 20vw"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.9rem] border border-stone-200/80 shadow-[0_22px_56px_rgba(45,33,22,0.08)]">
              <Image
                src="/portfolio/life/cooking-table.jpg"
                alt="Home-cooked meal on the table"
                width={1152}
                height={2048}
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 20vw"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-t border-stone-200/80 pt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
              Contact
            </p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              Open to robotics software, controls, mechatronics, simulation, and applied research
              work.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/profile" className={buttonClassName}>
              About
            </Link>
            <Link href="mailto:s242507@dtu.dk" className={quietButtonClassName}>
              s242507@dtu.dk
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
