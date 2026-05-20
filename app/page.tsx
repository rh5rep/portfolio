import Image from "next/image";
import Link from "next/link";
import { FloatOnScroll, Reveal } from "@/components/Motion";
import SiteHeader from "@/components/SiteHeader";

const buttonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.94)] px-5 py-2.5 text-sm font-medium text-stone-900 shadow-[0_12px_30px_rgba(45,33,22,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white hover:text-stone-950";

const quietButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-200/80 bg-transparent px-4 py-2 text-sm font-medium text-stone-700 transition duration-300 hover:-translate-y-0.5 hover:border-stone-300 hover:bg-[rgba(255,250,244,0.72)] hover:text-stone-950";

const exploreLinks = [
  {
    href: "/resume",
    label: "Resume",
    description: "Experience, skills, and a concise overview of the work.",
  },
  {
    href: "/profile",
    label: "About",
    description: "Background, thesis context, and the longer version of my fit.",
  },
  {
    href: "#coursework",
    label: "Coursework",
    description: "Autonomy mapping, marine robotics, and ADLCV kept separate from industry work.",
  },
  {
    href: "/learnit",
    label: "Archive",
    description: "Older experiments, notes, and smaller side projects.",
  },
  {
    href: "/life",
    label: "Life",
    description: "Travel, movement, cooking, and the personal side without crowding the work.",
  },
];

const projects = [
  {
    name: "PerPlant",
    eyebrow: "Robotics field tooling + sensing",
    title: "PerPlant combined ROS2 field sensing with cleaner computer-vision dataset workflows.",
    body: "This is the closest match to the robotics-software story: wiring sensing into field collection, carrying metadata through the workflow, and building data tools that make downstream perception work less brittle.",
    bullets: [
      "Thermal + GPS collection was built around real field conditions, not ideal capture.",
      "Filtering, embeddings, clustering, and grouped splits were used to reduce leakage and redundancy.",
    ],
    pills: ["ROS2", "Thermal + GPS", "Dataset quality"],
    href: "/projects/perplant",
  },
  {
    name: "Thesis",
    eyebrow: "Robotics research + modeling",
    title:
      "Biomechanical modeling and experimental validation for a soft variable-stiffness finger actuator.",
    body: "M.Sc. thesis in progress: a simulation-first framework for a simplified index-finger actuation system, moving from reduced-order modeling and Python simulation toward closed-loop benchtop validation.",
    bullets: [
      "Models tendon-routing geometry, passive joint torque, actuator leverage, tendon stroke, and tension estimates.",
      "Plans validation through force-displacement measurement, motion tracking, repeatability tests, and model-vs-experiment error analysis.",
    ],
    pills: ["Python simulation", "Variable stiffness", "Benchtop validation"],
    href: "/projects/thesis",
  },
  {
    name: "SunnySips",
    eyebrow: "Applied software + environmental modeling",
    title: "SunnySips turns geometry, weather, and map data into a fast outdoor recommendation tool.",
    body: "The useful part is the translation layer: taking physical conditions like sun angle, urban occlusion, and weather attenuation, then making the computation reliable enough to drive a simple user-facing app.",
    bullets: [
      "Modeled changing outdoor conditions rather than relying on static cafe lists.",
      "Tightened data contracts, defaults, and snapshots so the app behavior stayed predictable.",
    ],
    pills: ["SwiftUI", "FastAPI", "Geospatial modeling"],
    href: "/projects/sunnysips",
  },
  {
    name: "TRYBE",
    eyebrow: "Mobile software + product architecture",
    title: "TRYBE explores how mobile architecture and interaction design can make a new behavior feel easy to try.",
    body: "This is the least robotics-heavy project, but it still shows how I think about software: define the loop, make the states concrete, plan the backend shape, and keep the interface honest about what the app can actually do.",
    bullets: [
      "Mapped sessions, perks, and partner logic into a concrete mobile flow.",
      "Used interface decisions to expose real constraints instead of hiding them behind vague product language.",
    ],
    pills: ["iOS structure", "Backend planning", "State design"],
    href: "/projects/trybe",
  },
];

const projectOrder = ["PerPlant", "Thesis", "SunnySips", "TRYBE"];
const selectedProjects = projectOrder
  .map((name) => projects.find((project) => project.name === name))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

type CourseworkProject = {
  title: string;
  eyebrow: string;
  subtitle: string;
  summary: string;
  bullets?: string[];
  evidence?: string[];
  imageSrc?: string;
  imageAlt?: string;
  pills: string[];
};

const courseworkProjects: CourseworkProject[] = [
  {
    title: "Autonomy Sensor Data & Mapping Coursework",
    eyebrow: "Coursework + academic projects",
    subtitle:
      "ROS2, LiDAR, GNSS/IMU, odometry, point-cloud processing, occupancy-grid mapping, autonomy simulation/debugging",
    summary:
      "DTU coursework and team projects across robot autonomy, unmanned systems, and marine robotics.",
    bullets: [
      "Built ROS2 occupancy-grid mapping from `/odom` and `/scan`, using TF2 transforms and Bresenham ray tracing to publish `nav_msgs/OccupancyGrid`.",
      "Worked on Crazyflie coursework using ROS2, MATLAB, and OptiTrack for controller validation and shared-lab debugging across networking, radio, and motion-capture issues.",
      "Used ROS, Gazebo, and RViz in marine robotics workflows, including GPS extraction and path reconstruction from ROS bags plus Ouster `PointCloud2` extraction and visualization.",
      "AMR project work compared GNSS/INS, LiDAR-based odometry, and sonar-based navigation in a USV data-collection context.",
    ],
    evidence: ["/odom", "/scan", "TF2", "OccupancyGrid", "GNSS/INS", "PointCloud2"],
    imageSrc: "/portfolio/autonomy-coursework-poster.png",
    imageAlt: "Poster preview for the autonomy sensor data and mapping coursework",
    pills: ["ROS2", "LiDAR", "GNSS/IMU", "Gazebo", "RViz", "Point clouds"],
  },
  {
    title: "ADLCV",
    eyebrow: "Coursework + academic projects",
    subtitle: "DDPMs, UNets, conditional generation, discrete tile encodings",
    summary:
      "Coursework project on DDPM-style Super Mario level generation using 14x14 ASCII data from the VGLC dataset. The project used a tile-to-sprite decoder plus unconditional and conditional UNet variants, with discrete levels represented through one-hot tile encodings.",
    evidence: ["2,866 ASCII levels", "VGLC", "UNet", "conditional DDPM", "FID 5.692"],
    imageSrc: "/portfolio/adlcv-poster.png",
    imageAlt: "Poster preview for the ADLCV Super Mario diffusion coursework project",
    pills: ["DDPM", "UNet", "Conditional generation", "VGLC", "One-hot tiles"],
  },
];

function renderProjectMedia(name: string) {
  if (name === "PerPlant") {
    return (
      <div className="grid gap-4">
        <div className="overflow-hidden rounded-[1.7rem] border border-stone-200/80 bg-[#efe7dc] p-3 shadow-[0_18px_40px_rgba(45,33,22,0.08)]">
          <Image
            src="/portfolio/perplant-thermal-output.png"
            alt="Thermal imaging output from the PerPlant sensing workflow"
            width={1024}
            height={768}
            sizes="(max-width: 1024px) 78vw, 360px"
            className="h-auto w-full rounded-[1.15rem] object-cover"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["Collection", "ROS2 thermal imaging"],
            ["Metadata", "GPS-tagged field capture"],
            ["Curation", "Representative subsets"],
          ].map(([eyebrow, label]) => (
            <div
              key={label}
              className="rounded-[1.2rem] border border-stone-200 bg-[rgba(255,250,244,0.92)] px-4 py-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                {eyebrow}
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-stone-800">{label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (name === "Thesis") {
    return (
      <div className="overflow-hidden rounded-[1.7rem] border border-stone-200/80 bg-white shadow-[0_18px_40px_rgba(45,33,22,0.08)]">
        <Image
          src="/portfolio/thesis-workflow.png"
          alt="Workflow diagram for the thesis from task framing to validated mock-up"
          width={1600}
          height={900}
          sizes="(max-width: 1024px) 78vw, 420px"
          className="h-auto w-full"
        />
      </div>
    );
  }

  if (name === "SunnySips") {
    return (
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
    );
  }

  return (
    <div className="flex h-[220px] items-center justify-center gap-4">
      {["/portfolio/trybe-sessions.png", "/portfolio/trybe-perks.png"].map((src, imageIndex) => (
        <Image
          key={src}
          src={src}
          alt={imageIndex === 0 ? "TRYBE sessions screen" : "TRYBE perks screen"}
          width={520}
          height={980}
          sizes="150px"
          className="h-full w-auto rounded-[1.1rem] border border-stone-200 bg-[#fff7f1] p-2 shadow-[0_14px_30px_rgba(45,33,22,0.08)]"
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.72fr)] lg:items-start lg:gap-12">
          <div className="grid gap-7">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
              Copenhagen, Denmark | DTU M.Sc. Autonomous Systems
            </p>
            <h1 className="max-w-5xl font-serif text-5xl leading-[0.94] text-stone-950 sm:text-6xl lg:text-[4.55rem]">
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
                Featured work
              </Link>
              <Link href="/resume" className={buttonClassName}>
                Resume
              </Link>
              <Link href="mailto:s242507@dtu.dk" className={buttonClassName}>
                Email
              </Link>
            </div>
          </div>

          <FloatOnScroll className="grid gap-4" distance={14}>
            <div className="rounded-[1.8rem] border border-stone-200/80 bg-[rgba(255,249,241,0.92)] p-5 shadow-[0_18px_50px_rgba(45,33,22,0.06)]">
              <div className="grid items-start gap-4 sm:grid-cols-[112px_minmax(0,1fr)]">
                <div className="overflow-hidden rounded-[1.4rem] border border-stone-200/80 bg-white/80">
                  <Image
                    src="/portfolio/rami-profile-2026.jpg"
                    alt="Portrait of Rami Hanna"
                    width={448}
                    height={560}
                    priority
                    sizes="112px"
                    className="h-36 w-28 object-cover object-[50%_28%]"
                  />
                </div>
                <div className="grid gap-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                    Currently
                  </p>
                  <p className="text-[15px] leading-7 text-stone-700">
                    Finishing a DTU thesis on soft-finger actuation modeling and looking for work
                    in robotics software, controls, simulation, and sensing-heavy robotics work.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-stone-900">
                <Link href="/pdfs/rami-hanna-thesis.pdf" className="transition hover:text-stone-950">
                  Thesis PDF
                </Link>
                <Link
                  href="https://github.com/rh5rep"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-stone-950"
                >
                  GitHub
                </Link>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-stone-200/80 bg-[rgba(255,250,244,0.9)] p-5 shadow-[0_18px_50px_rgba(45,33,22,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                Around the site
              </p>
              <div className="mt-3 grid divide-y divide-stone-200/80">
                {exploreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="grid gap-1 py-3 transition hover:translate-x-0.5"
                  >
                    <span className="font-medium text-stone-950">{item.label}</span>
                    <span className="text-sm leading-6 text-stone-600">{item.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </FloatOnScroll>
        </div>
      </Reveal>

      <Reveal as="section" id="work" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-3 lg:grid-cols-[180px_minmax(0,1fr)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Featured work
          </p>
          <div className="grid gap-2">
            <h2 className="max-w-4xl font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              The homepage stays on the projects that represent the work best.
            </h2>
            <p className="max-w-3xl text-base leading-7 text-stone-700 sm:text-lg">
              The main work sits first. Coursework, background, and the rest of the site stay one
              step lower so the hierarchy is clearer.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {selectedProjects.map((project, index) => (
            <Reveal
              key={project.name}
              as="article"
              className="overflow-hidden rounded-[1.9rem] border border-stone-200/80 bg-[rgba(255,249,241,0.92)] shadow-[0_18px_50px_rgba(45,33,22,0.06)]"
              delay={Math.min(index * 0.04, 0.16)}
            >
              <div
                className={`grid lg:items-stretch ${
                  index === 0
                    ? "lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]"
                    : "lg:grid-cols-[minmax(0,1fr)_minmax(280px,400px)]"
                }`}
              >
                <div className={`grid gap-4 ${index === 0 ? "p-7 lg:p-8" : "p-6 lg:p-7"}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    {index === 0 ? (
                      <span className="rounded-full border border-[rgba(185,111,71,0.24)] bg-[rgba(185,111,71,0.1)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-800">
                        Lead project
                      </span>
                    ) : null}
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                      {project.eyebrow}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    <h3
                      className={`max-w-3xl font-serif leading-tight text-stone-950 ${
                        index === 0 ? "text-3xl sm:text-[2.35rem]" : "text-2xl sm:text-3xl"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-7 text-stone-700">{project.body}</p>
                  </div>

                  <ul className="grid gap-3 text-sm leading-7 text-stone-700">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.pills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-stone-200 bg-[rgba(255,250,244,0.9)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link href={project.href} className={quietButtonClassName}>
                      Project details
                    </Link>
                  </div>
                </div>

                <div
                  className={`flex min-h-[260px] items-center justify-center overflow-hidden border-t border-stone-200/80 p-5 lg:border-l lg:border-t-0 ${
                    project.name === "Thesis" ? "bg-[#eef2ef]" : "bg-[#f4eadf]"
                  }`}
                >
                  <div className="w-full">{renderProjectMedia(project.name)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-3 border-t border-stone-200/80 pt-10 lg:grid-cols-[180px_minmax(0,1fr)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Other areas
          </p>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {exploreLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[1.4rem] border border-stone-200/80 bg-[rgba(255,250,244,0.8)] p-4 transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:bg-white"
              >
                <p className="font-medium text-stone-950">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" id="coursework" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-3 border-t border-stone-200/80 pt-10 lg:grid-cols-[180px_minmax(0,1fr)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Coursework
          </p>
          <div className="grid gap-2">
            <h2 className="max-w-4xl font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
              Academic work, kept separate on purpose.
            </h2>
            <p className="max-w-3xl text-base leading-7 text-stone-700 sm:text-lg">
              These projects reinforce the autonomy and sensing thread, but they stay visually
              lighter than the featured work above so the scope remains clear.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5">
          {courseworkProjects.map((project, index) => (
            <Reveal
              key={project.title}
              as="article"
              className="overflow-hidden rounded-[1.7rem] border border-stone-200/80 bg-[rgba(255,249,241,0.84)] shadow-[0_18px_50px_rgba(45,33,22,0.05)]"
              delay={index * 0.05}
            >
              <div className="grid gap-0 lg:grid-cols-[180px_minmax(0,1fr)_240px]">
                <div className="border-b border-stone-200/80 px-6 py-5 lg:border-b-0 lg:border-r">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                    {project.eyebrow}
                  </p>
                </div>

                <div className="p-6">
                  <div className="grid gap-3">
                    <h3 className="font-serif text-2xl leading-tight text-stone-950">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-600">
                      {project.subtitle}
                    </p>
                    <p className="text-base leading-7 text-stone-700">{project.summary}</p>
                  </div>

                  {project.evidence?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.evidence.slice(0, 6).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-stone-200 bg-[rgba(255,250,244,0.8)] px-3 py-1 font-mono text-[11px] text-stone-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {project.bullets?.length ? (
                    <ul className="mt-4 grid gap-3 text-sm leading-7 text-stone-700">
                      {project.bullets.slice(0, 3).map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.pills.slice(0, 4).map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-stone-200 bg-[rgba(255,250,244,0.9)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-stone-200/80 bg-[rgba(255,250,244,0.6)] p-4 lg:border-l lg:border-t-0">
                  {project.imageSrc && project.imageAlt ? (
                    <div className="overflow-hidden rounded-[1.25rem] border border-stone-200 bg-white/85 shadow-[0_10px_24px_rgba(45,33,22,0.05)]">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        width={900}
                        height={1200}
                        unoptimized
                        loading="eager"
                        sizes="(max-width: 1024px) 56vw, 240px"
                        className="aspect-[4/3] h-auto w-full object-cover object-center"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
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
            <Link
              href="https://github.com/rh5rep"
              target="_blank"
              rel="noreferrer"
              className={quietButtonClassName}
            >
              GitHub
            </Link>
            <Link href="mailto:s242507@dtu.dk" className={quietButtonClassName}>
              Email
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
