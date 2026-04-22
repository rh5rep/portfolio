import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const buttonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.94)] px-5 py-2.5 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-stone-950";

const quietButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-200/80 bg-transparent px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:text-stone-950";

const atlasButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-[#c4d6db] bg-[#dbe8eb] px-5 py-2.5 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:border-[#aabfc5] hover:bg-[#d2e1e5]";

const focusAreas = [
  "Robotics software",
  "Sensing + data quality",
  "Simulation + evaluation",
];

const projects = [
  {
    name: "SunnySips",
    eyebrow: "Consumer product + environmental modeling",
    title: "SunnySips turns solar geometry and weather into a product people can use in seconds.",
    body: "Built around sun position, urban occlusion, and weather attenuation, then shaped into a consumer interface that feels fast and obvious instead of technical for its own sake.",
    bullets: [
      "Modeled live outdoor conditions rather than relying on static cafe lists.",
      "Tightened defaults, contracts, and snapshots to make the experience feel trustworthy.",
    ],
    pills: ["SwiftUI", "FastAPI", "Geospatial logic", "Weather systems"],
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
    eyebrow: "Product direction + systems thinking",
    title: (
      <>
        <span className="font-sans text-[0.84em] font-semibold uppercase italic tracking-[0.08em] text-[#d46a2e]">
          TRYBE
        </span>{" "}
        explores how product, brand, and system design can lower the friction of trying new things.
      </>
    ),
    body: "The interesting part is the coherence. Product behavior, mobile structure, backend planning, and visual language were treated as one system with real constraints around adoption, safety, and repeat use.",
    bullets: [
      "Designed sessions, perks, and partner logic as one believable loop.",
      "Used UX decisions to make the concept feel concrete instead of aspirational.",
    ],
    pills: ["Product direction", "iOS architecture", "Backend planning", "Design system"],
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
    eyebrow: "Research + modeling",
    title: "A simulation-first thesis on soft-finger actuation for rehabilitation-oriented hardware.",
    body: "Current DTU thesis work focused on simplified, interpretable modeling before physical iteration gets expensive. The emphasis is on explicit assumptions, bounded claims, and bench checks that keep the model honest.",
    bullets: [
      "Using simulation to narrow tendon routing and stiffness decisions.",
      "Treating bench validation as a calibration step, not decoration.",
    ],
    pills: ["DTU", "Biomechanical modeling", "Simulation-first", "Bench validation"],
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
              <p className="font-serif text-2xl text-stone-100">Soft-finger actuator model</p>
              <p className="text-sm leading-6 text-stone-300">
                Simplified modeling for rehabilitation-oriented design choices.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            {[
              "Define assumptions",
              "Sweep parameters in simulation",
              "Compare against bench measurements",
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
          {["Model assumptions", "Simulation sweeps", "Bench checks"].map((item) => (
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
    eyebrow: "Robotics + data quality",
    title: "PerPlant combined field sensing infrastructure with cleaner computer-vision dataset design.",
    body: "Two distinct threads mattered here: ROS2 thermal capture with GPS metadata in the field, and a separate curation workflow for choosing smaller, more representative annotation sets from highly redundant agricultural imagery.",
    bullets: [
      "Thermal + GPS collection was built around real field conditions, not ideal capture.",
      "Filtering, embeddings, clustering, and grouped splits were used to reduce leakage and redundancy.",
    ],
    pills: ["ROS2 sensing", "Thermal + GPS", "Embeddings + clustering", "Leakage control"],
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

export default function Home() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start lg:gap-12">
          <div className="grid gap-7">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
              Copenhagen, Denmark | DTU M.Sc. Autonomous Systems
            </p>
            <h1 className="max-w-5xl font-serif text-5xl leading-[0.94] text-stone-950 sm:text-6xl lg:text-[4.85rem]">
              I build robotics, sensing, and data systems that hold up outside ideal conditions.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-stone-700 sm:text-xl">
              My work sits where software, physical systems, and messy data meet. I care about
              evaluation, simulation, useful interfaces, and making technical logic legible to the
              people who need to use it.
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

          <aside className="grid gap-4">
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
                  robotics software, simulation, and sensing-heavy systems.
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
          </aside>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="grid gap-3 lg:grid-cols-[180px_minmax(0,1fr)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Selected work
          </p>
          <div className="grid gap-2">
            <h2 className="max-w-4xl font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              Four projects worth starting with.
            </h2>
            <p className="max-w-3xl text-base leading-7 text-stone-700 sm:text-lg">
              They show the mix of product thinking, research discipline, and field-facing
              engineering most clearly.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-16">
          {projects.map((project, index) => {
            const isDark = project.name === "Thesis";

            return (
              <article key={project.name} className="border-t border-stone-200/80 pt-10">
                <div
                  className={`grid gap-8 lg:items-center ${
                    index % 2 === 0
                      ? "lg:grid-cols-[minmax(320px,0.92fr)_minmax(0,1.08fr)]"
                      : "lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]"
                  }`}
                >
                  {index % 2 === 0 ? project.media : null}

                  <div className="grid gap-5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          isDark ? "bg-[#dcc5b3]" : "bg-[var(--accent)]"
                        }`}
                      />
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.26em] ${
                          isDark ? "text-stone-400" : "text-stone-500"
                        }`}
                      >
                        {project.eyebrow}
                      </p>
                    </div>

                    <div className="grid gap-3">
                      <h3 className="max-w-3xl font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
                        {project.title}
                      </h3>
                      <p className="max-w-3xl text-base leading-8 text-stone-700 sm:text-lg">
                        {project.body}
                      </p>
                    </div>

                    <ul className="grid gap-3 text-sm leading-7 text-stone-700">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.pills.map((pill) => (
                        <span
                          key={pill}
                          className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                            project.name === "Thesis"
                              ? "border-stone-300 bg-[rgba(255,249,241,0.9)] text-stone-700"
                              : "border-stone-200 bg-[rgba(255,250,244,0.9)] text-stone-600"
                          }`}
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    {project.name === "Thesis" ? (
                      <div>
                        <Link href="/pdfs/rami-hanna-thesis.pdf" className={quietButtonClassName}>
                          Open thesis PDF
                        </Link>
                      </div>
                    ) : null}
                  </div>

                  {index % 2 !== 0 ? project.media : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
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
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-t border-stone-200/80 pt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
              Contact
            </p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              Open to robotics software, sensing systems, simulation, and applied research work.
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
      </section>
    </main>
  );
}
