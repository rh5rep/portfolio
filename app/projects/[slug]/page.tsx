import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Motion";
import SiteHeader from "@/components/SiteHeader";

const buttonClassName =
  "inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-[rgba(255,250,244,0.94)] px-5 py-2.5 text-sm font-medium text-stone-900 shadow-[0_12px_30px_rgba(45,33,22,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white hover:text-stone-950";

const projects = {
  perplant: {
    name: "PerPlant",
    eyebrow: "Robotics field tooling + sensing",
    title: "ROS2 field sensing and dataset quality for agricultural robotics.",
    summary:
      "This work connected thermal sensing, GPS metadata, and computer-vision data workflows in a field setting where clean assumptions do not last long.",
    context:
      "PerPlant is an agtech startup using computer vision and AI to support precision agriculture. My role sat close to the robotics software layer: getting sensing data collected reliably, preserving useful metadata, and making downstream annotation work less redundant.",
    contributions: [
      "Integrated a thermal imaging workflow using ROS2 publishers/subscribers in C++ and Python.",
      "Enabled GPS-geotagged thermal image collection for field datasets.",
      "Built a dataset sampling workflow using ROI filtering, detector embeddings, UMAP, HDBSCAN, and grouped splits.",
      "Reduced repeated annotation effort by prioritizing representative and informative image batches.",
    ],
    stack: ["ROS2", "C++", "Python", "Thermal imaging", "GPS metadata", "HDBSCAN"],
  },
  thesis: {
    name: "Thesis",
    eyebrow: "Robotics research + modeling",
    title:
      "Biomechanical modeling and experimental validation of a soft variable-stiffness finger actuator.",
    summary:
      "M.Sc. thesis in progress: a simulation-first engineering framework for a simplified index-finger actuation system, moving from reduced-order modeling toward closed-loop benchtop validation.",
    context:
      "The work is rehabilitation-oriented, but it is not presented as a finished clinical device or a full glove. The focus is a bounded engineering question: can an inspectable model help screen tendon routing, stiffness, actuator leverage, stroke, and tension choices before hardware iteration gets expensive?",
    contributions: [
      "Reduced a soft finger-actuation concept into index-finger kinematics, tendon-routing geometry, and passive joint-torque assumptions that can be tested.",
      "Built Python simulation outputs for design screening around actuator leverage, tendon stroke, tension demand, and stiffness choices.",
      "Framed controllability and underactuation as explicit design trade-offs instead of hiding them behind device-level claims.",
      "Defined a benchtop validation path using force-displacement measurement, motion tracking, repeatability tests, calibration, and model-vs-experiment error analysis.",
    ],
    stack: [
      "Python simulation",
      "Biomechanical modeling",
      "Variable stiffness",
      "Motion tracking",
      "Benchtop validation",
    ],
    pdf: "/pdfs/rami-hanna-thesis.pdf",
  },
  sunnysips: {
    name: "SunnySips",
    eyebrow: "Applied software + environmental modeling",
    title: "Geometry, weather, and map data turned into a fast recommendation tool.",
    summary:
      "SunnySips takes physical outdoor conditions and translates them into a usable app experience without making the user think about the model.",
    context:
      "The project is not robotics, but it shows the same engineering instinct: model the real world, make the data contracts predictable, and surface results through an interface that feels simple because the technical work is hidden underneath.",
    contributions: [
      "Modeled sun position, urban occlusion, weather attenuation, and location context.",
      "Built a SwiftUI-facing product surface around live environmental logic.",
      "Tightened defaults and data contracts so recommendations stayed predictable.",
      "Used snapshots and compact data outputs to keep behavior easier to inspect.",
    ],
    stack: ["SwiftUI", "FastAPI", "Geospatial modeling", "Weather data"],
  },
  trybe: {
    name: "TRYBE",
    eyebrow: "Mobile software + product architecture",
    title: "Mobile architecture for making real-world participation easier.",
    summary:
      "TRYBE is the least robotics-heavy selected project, but it shows how I structure app behavior, states, backend assumptions, and user flows.",
    context:
      "The concept is built around beginner-friendly, instructor-led sessions. The technical value here is not a robot or control loop; it is the discipline of turning an ambiguous idea into concrete states, screens, constraints, and backend needs.",
    contributions: [
      "Mapped sessions, perks, partner logic, and user states into a concrete mobile flow.",
      "Planned backend concepts around real entities rather than vague product screens.",
      "Designed UX choices around sustainable real-world participation instead of addictive mechanics.",
      "Built a coherent visual and interaction system for the app concept.",
    ],
    stack: ["iOS structure", "Backend planning", "State design", "UX systems"],
  },
};

type ProjectSlug = keyof typeof projects;

const thesisWorkflow = [
  "Mathematical modeling",
  "Python simulation",
  "Design screening",
  "CAD / prototype planning",
  "Closed-loop benchtop validation",
  "Calibration + error analysis",
];

const thesisSections = [
  {
    eyebrow: "Short project overview",
    title: "A focused actuator-system study, not a finished rehabilitation product.",
    body:
      "The thesis investigates a simplified index-finger actuation system for neurorehabilitation-oriented hardware. The goal is to build a modeling and validation framework that can make design decisions more concrete before committing to physical prototypes.",
    bullets: [
      "Scope is intentionally limited to an index-finger actuator system.",
      "Claims stay at the engineering-validation level rather than clinical efficacy.",
    ],
  },
  {
    eyebrow: "Why it matters",
    title: "Soft finger-assistive systems need evidence before they need polish.",
    body:
      "Finger-assistive hardware can look convincing while hiding difficult trade-offs in tendon routing, stiffness, control authority, and measurement repeatability. This project uses simulation and benchtop data to expose those trade-offs early.",
    bullets: [
      "Compares actuator concepts before physical iteration becomes slow or expensive.",
      "Keeps the evaluation tied to measurable behavior: force, displacement, motion, and repeatability.",
    ],
  },
  {
    eyebrow: "Modeling approach",
    title: "Reduced-order mechanics with explicit assumptions.",
    body:
      "The model treats the finger and actuator as an inspectable engineering system: reduced-order index-finger kinematics, tendon-routing geometry, passive joint torque estimates, actuator leverage, tendon stroke, and tendon tension estimates.",
    bullets: [
      "Controllability and underactuation are treated as design trade-offs.",
      "Variable or adjustable stiffness is modeled as part of the design space rather than assumed as a solved feature.",
    ],
  },
  {
    eyebrow: "Current simulation outputs",
    title: "Python sweeps that narrow the design space.",
    body:
      "The current work uses Python simulation to compare candidate geometry and stiffness assumptions, estimate actuator requirements, and identify parameter regions worth taking into CAD and prototype planning.",
    bullets: [
      "Outputs support design screening around leverage, stroke, tension, and passive resistance.",
      "Simulation results are framed as hypotheses to validate, not proof that the device works.",
    ],
  },
  {
    eyebrow: "Planned benchtop validation",
    title: "Closed-loop measurement, not just a demo rig.",
    body:
      "The validation plan connects actuator input to measurable bench behavior: force-displacement measurement, motion tracking or computer-vision-based measurement, repeatability testing, and calibration against simulation predictions.",
    bullets: [
      "Closed-loop actuator input is a design goal for controlled experiments.",
      "Model-vs-experiment error analysis is used to revise assumptions and quantify limits.",
    ],
  },
  {
    eyebrow: "Engineering skills demonstrated",
    title: "A complete simulation-to-test workflow.",
    body:
      "The project demonstrates hands-on robotics engineering judgment: simplifying a physical system, writing simulations, screening designs, planning hardware tests, instrumenting measurements, and using experimental error to improve the model.",
    bullets: [
      "Relevant to robotics, medtech, controls, simulation, mechatronics, and product engineering roles.",
      "Shows comfort moving between math, software, hardware constraints, and validation data.",
    ],
  },
];

const thesisTechnicalPoints = [
  "Reduced-order index-finger kinematics",
  "Tendon-routing geometry",
  "Passive joint torque estimates",
  "Actuator leverage",
  "Tendon stroke",
  "Tendon tension estimates",
  "Controllability trade-offs",
  "Underactuation trade-offs",
  "Variable stiffness concept",
  "Closed-loop actuator input",
  "Force-displacement measurement",
  "Computer-vision motion tracking",
  "Repeatability testing",
  "Model validation",
];

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} | Rami Hanna`,
    description: project.summary,
  };
}

function ProjectVisual({ slug }: { slug: ProjectSlug }) {
  if (slug === "sunnysips") {
    return (
      <div className="rounded-[2rem] border border-stone-200/80 bg-[#f5ebdf] p-6">
        <div className="relative mx-auto flex max-w-[520px] items-end justify-center">
          <Image
            src="/portfolio/sunnysips-map.png"
            alt="SunnySips map interface"
            width={1206}
            height={2622}
            sizes="(max-width: 768px) 58vw, 280px"
            className="h-[520px] w-auto rounded-[1.6rem] border border-stone-300/70 shadow-[0_24px_44px_rgba(73,57,32,0.12)]"
          />
          <Image
            src="/portfolio/sunnysips-recommendations.png"
            alt="SunnySips recommendations view"
            width={1206}
            height={2622}
            sizes="(max-width: 768px) 34vw, 180px"
            className="-ml-12 h-[360px] w-auto rounded-[1.25rem] border border-stone-300/70 bg-white shadow-[0_20px_40px_rgba(73,57,32,0.12)]"
          />
        </div>
      </div>
    );
  }

  if (slug === "trybe") {
    return (
      <div className="rounded-[2rem] border border-stone-200/80 bg-[#f6eadb] p-6">
        <div className="flex flex-wrap items-center justify-center gap-5">
          {["/portfolio/trybe-sessions.png", "/portfolio/trybe-perks.png"].map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={index === 0 ? "TRYBE sessions screen" : "TRYBE perks screen"}
              width={520}
              height={980}
              sizes="(max-width: 768px) 42vw, 220px"
              className="h-[520px] w-auto rounded-[1.5rem] border border-stone-200 bg-[#fff7f1] p-3 shadow-[0_18px_40px_rgba(45,33,22,0.08)]"
            />
          ))}
        </div>
      </div>
    );
  }

  if (slug === "thesis") {
    return (
      <div className="rounded-[2rem] border border-stone-700/60 bg-[#2e2b28] p-6 text-stone-100 shadow-[0_26px_70px_rgba(31,26,22,0.18)]">
        <div className="rounded-[1.55rem] border border-stone-600/60 bg-[linear-gradient(180deg,rgba(255,248,240,0.08),rgba(255,248,240,0.03))] p-5">
          <div className="flex items-center gap-4 rounded-[1.3rem] border border-stone-600/60 bg-[rgba(255,248,240,0.04)] p-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] border border-stone-500/70 bg-[rgba(220,197,179,0.1)] text-lg font-semibold text-stone-100">
              SF
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                Thesis object
              </p>
              <p className="mt-1 font-serif text-2xl text-stone-100">
                Index-finger actuator model
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-300">
                Simulation-first validation framework under development.
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["Model kinematics", "Screen actuator designs", "Validate against bench data"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-stone-600/70 bg-[rgba(255,248,240,0.04)] p-4 text-sm font-medium text-stone-200"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-stone-200/80 bg-[#ede5dc] p-6">
      <div className="grid gap-4 lg:grid-cols-2">
        {[
          ["Collection", "ROS2 thermal imaging", "Thermal imagery published through ROS2 with GPS metadata folded into field collection."],
          ["Curation", "Representative subsets", "Embedding and clustering workflows used to reduce redundant annotation batches."],
        ].map(([eyebrow, title, body]) => (
          <div key={title} className="rounded-[1.45rem] border border-stone-200 bg-[rgba(255,250,244,0.92)] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-2xl text-stone-950">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-stone-700">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  if (!project) {
    notFound();
  }

  return (
    <main className="pb-24">
      <SiteHeader />

      <Reveal as="section" className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] lg:items-start">
          <div className="rounded-[2.25rem] border border-stone-200/80 bg-[rgba(255,249,241,0.92)] p-8 shadow-[0_28px_90px_rgba(45,33,22,0.08)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              {project.eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-stone-700">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#work" className={buttonClassName}>
                Back to work
              </Link>
              {"pdf" in project ? (
                <Link href={project.pdf} className={buttonClassName}>
                  Open thesis PDF
                </Link>
              ) : null}
            </div>
          </div>

          <ProjectVisual slug={slug as ProjectSlug} />
        </div>
      </Reveal>

      {slug === "thesis" ? (
        <>
          <Reveal as="section" className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] sm:p-8">
              <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Engineering workflow
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-700">
                    Built as an investigation that moves from model assumptions to measurable bench
                    evidence.
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
                  {thesisWorkflow.map((step, index) => (
                    <div
                      key={step}
                      className="rounded-[1.2rem] border border-stone-200 bg-[#f7f1e9] p-4"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-3 text-sm font-medium leading-6 text-stone-800">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal as="section" className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-2">
              {thesisSections.map((section) => (
                <article
                  key={section.eyebrow}
                  className="rounded-[2rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.07)] sm:p-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-4 font-serif text-2xl leading-tight text-stone-950 sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-700">{section.body}</p>
                  <div className="mt-5 grid gap-3">
                    {section.bullets.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.2rem] border border-stone-200/80 bg-[#f7f1e9] p-4 text-sm leading-7 text-stone-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal as="section" className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.74fr)_minmax(320px,0.42fr)]">
              <article className="rounded-[2rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Technical scope
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {thesisTechnicalPoints.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stone-200 bg-[#f7f1e9] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              <article className="rounded-[2rem] border border-stone-200/80 bg-[#efe3d6] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Stack / themes
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stone-200 bg-[rgba(255,250,244,0.92)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </Reveal>
        </>
      ) : (
        <>
          <Reveal as="section" className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.84fr)_minmax(300px,0.5fr)]">
              <article className="rounded-[2rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Context
                </p>
                <p className="mt-4 text-base leading-8 text-stone-700">{project.context}</p>
              </article>

              <article className="rounded-[2rem] border border-stone-200/80 bg-[#efe3d6] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Stack / themes
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stone-200 bg-[rgba(255,250,244,0.92)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </Reveal>

          <Reveal as="section" className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
            <article className="rounded-[2rem] border border-stone-200/80 bg-[rgba(255,249,241,0.9)] p-6 shadow-[0_24px_70px_rgba(45,33,22,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                Contributions
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.contributions.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.3rem] border border-stone-200/80 bg-[#f7f1e9] p-4 text-sm leading-7 text-stone-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </>
      )}
    </main>
  );
}
