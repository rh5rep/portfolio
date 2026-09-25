export type Project = {
  slug: string;
  name: string;
  index: string;
  category: string;
  scope: string;
  evidence: string;
  system: string;
  title: string;
  summary: string;
  context: string;
  contributions: string[];
  proof: string[];
  stack: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  detailImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  gallery: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
    className?: string;
  }[];
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    slug: "thesis",
    name: "Wearable finger-actuator thesis",
    index: "01",
    category: "Wearable rehabilitation robotics · modeling + evaluation",
    scope: "M.Sc. thesis · 2026",
    evidence: "1,000 / 1,000 rigid-fixture cycles · supervised 3 interns",
    system: "Reduced-order routing model → ESP32-S3 actuator control → camera and encoder measurement.",
    title: "A wearable tendon-driven finger actuator, built and evaluated for neuro\u00adrehabilitation tasks.",
    summary:
      "An M.Sc. engineering feasibility study—from simplified mechanics to repeatable benchtop experiments and an on-hand wearable prototype.",
    context:
      "The thesis turns an assistive-device concept into an inspectable system of tendon routing, mechanics, control inputs, and repeatable measurements. It evaluates engineering behavior and wearable transfer—not clinical outcomes.",
    contributions: [
      "Built reduced-order models for finger kinematics, tendon routing, passive torque, leverage, stroke, and tension.",
      "Used Python sweeps to screen stiffness and geometry choices before hardware iteration.",
      "Designed a benchtop validation loop around force, displacement, motion tracking, repeatability, and model error.",
      "Supervised three student interns contributing to fixture, control, computer-vision, and sensing work.",
    ],
    proof: ["1,000 / 1,000 rigid-fixture cycles", "97.5% of 49.93° comparator", "3 student interns supervised"],
    stack: ["Python", "OpenCV", "ESP32-S3", "Motor + encoder control", "FDM prototypes"],
    image: {
      src: "/portfolio/thesis-wearable-hero-rotated.png",
      alt: "Finished wearable soft-finger actuator on a hand",
      width: 1491,
      height: 1055,
    },
    detailImage: {
      src: "/portfolio/thesis-wearable-onhand.png",
      alt: "Finished wearable soft-finger actuator shown on a hand",
      width: 462,
      height: 708,
    },
    gallery: [
      { src: "/portfolio/thesis-bench.jpg", alt: "Benchtop setup for the wearable actuator study", width: 4032, height: 3024, caption: "Benchtop iteration and measurement.", },
      { src: "/portfolio/thesis-workflow.png", alt: "Modeling and experimental workflow for the thesis", width: 1818, height: 1022, caption: "A model-to-measurement workflow." },
      { src: "/portfolio/thesis-wearable-onhand.png", alt: "Wearable finger actuator fitted to a hand", width: 462, height: 708, caption: "Final on-hand wearable prototype." },
    ],
    link: { href: "/pdfs/rami-hanna-thesis.pdf", label: "Read thesis" },
  },
  {
    slug: "perplant",
    name: "PerPlant",
    index: "02",
    category: "Agtech robotics · sensing + data quality",
    scope: "Robotics co-op · 2025",
    evidence: "ROS2 · OpenCV · NVIDIA Jetson · MicroROS",
    system: "Multi-camera + thermal fixture → Jetson/OpenCV + ROS2/MicroROS capture → GPS-linked image sets → data-curation workflow.",
    title: "Making field sensing and visual-data workflows hold up outside ideal conditions.",
    summary:
      "Robotics co-op work connecting field hardware, ROS2/OpenCV sensing, GPS metadata, and representative data curation for precision agriculture.",
    context:
      "The challenge was not a clean lab demo: it was translating farmer feedback into technical requirements, then making sensing and downstream computer-vision data useful under field conditions.",
    contributions: [
      "Integrated thermal/GPS field sensing in C++ and Python using ROS2, OpenCV, NVIDIA Jetson, and MicroROS.",
      "Redesigned a multi-camera fixture to add thermal imaging and translated farmer feedback into technical requirements.",
      "Used ROI filtering, detector embeddings, UMAP, HDBSCAN, and grouped splits to create representative annotation and evaluation batches from a 150,000+ image field dataset.",
    ],
    proof: ["Thermal + GPS field sensing", "150,000+ image dataset", "Stakeholder-to-requirement translation"],
    stack: ["ROS2", "C++", "Python", "OpenCV", "NVIDIA Jetson", "MicroROS", "UMAP", "HDBSCAN"],
    image: {
      src: "/portfolio/perplant-field-aerial.png",
      alt: "Aerial agricultural field imagery showing the kind of real-world setting PerPlant works in",
      width: 1177,
      height: 713,
    },
    gallery: [
      { src: "/portfolio/perplant-thermal-output.png", alt: "Thermal imagery output from an agricultural sensing workflow", width: 1512, height: 982, caption: "Thermal data in a field workflow." },
      { src: "/portfolio/perplant-field-aerial.png", alt: "Agricultural field from above", width: 1177, height: 713, caption: "Field conditions define the real problem." },
    ],
  },
  {
    slug: "teradyne",
    name: "Teradyne robotic test system",
    index: "04",
    category: "Mechatronics · closed-loop automation",
    scope: "Senior project · 2023",
    evidence: "IEEE SII/SICE 2024 publication",
    system: "Raspberry Pi scheduler + ESP32 control → HX711 load feedback → Cartesian robot and tool changer.",
    title: "A force-aware Cartesian robot for repeatable connector mating and test data collection.",
    summary:
      "An end-to-end senior project combining embedded control, sensing, automation logic, and a physical robot system.",
    context:
      "The system automated a delicate coaxial connector-mating workflow, where repeatability depended on motion, load feedback, and the practical realities of the fixture.",
    contributions: [
      "Programmed remote operation, scheduling, automatic tool changing, and load-cell-based mating logic.",
      "Integrated Raspberry Pi, ESP32, HX711, and closed-loop sensing into the robot workflow.",
      "Contributed to an IEEE-published project with verified 0.01 mm travel precision and 0.5 g load standard deviation.",
    ],
    proof: ["IEEE publication", "0.01 mm travel precision", "0.5 g load standard deviation"],
    stack: ["Raspberry Pi", "ESP32", "Load cell", "Embedded control"],
    image: {
      src: "/images/RobotRender.jpg",
      alt: "CAD render of the Teradyne Cartesian robotic test system",
      width: 1495,
      height: 473,
      className: "object-contain",
    },
    gallery: [
      { src: "/images/Cartesian-Robot.jpg", alt: "Teradyne Cartesian robotic test system", width: 1000, height: 750, caption: "The physical Cartesian test platform." },
      { src: "/portfolio/teradyne-load-cell.png", alt: "Load-cell readout from the test system", width: 1495, height: 473, caption: "Feedback made the motion measurable." },
      { src: "/images/1MateData.png", alt: "Force profile from a connector-mating test", width: 1178, height: 869, caption: "Force data made the connector-mating sequence inspectable.", className: "object-contain" },
      { src: "/images/RobotPicture.jpg", alt: "Teradyne project team and robot system", width: 1000, height: 750, caption: "The system at the senior-project showcase." },
    ],
    link: { href: "/pdfs/modified_capstone.pdf", label: "Read IEEE paper" },
  },
  {
    slug: "harvard-microrobotics",
    name: "Harvard Microrobotics",
    index: "03",
    category: "Underwater robotics · interfaces + embedded systems",
    scope: "Robotics co-op · 2022–23",
    evidence: "HTML / Flask · sockets · Embedded C · MicroROS",
    system: "Operator interface → sockets and embedded communication → teleoperated and autonomous fleet workflows.",
    title: "Making robotic fleet operation more concrete for the people using it.",
    summary:
      "Robotics co-op work spanning robot-operation interfaces, embedded communication, and mechanical subsystem integration for underwater robots.",
    context:
      "On a startup-style research team, the work connected the tools people used to operate robots with the communication and mechanical details that made the fleet usable.",
    contributions: [
      "Developed robot-operation interfaces using HTML, Flask, and sockets.",
      "Supported teleoperated and autonomous robot workflows with embedded C and MicroROS communication.",
      "Contributed to planetary-gearbox design and broader subsystem integration.",
    ],
    proof: ["Fleet-operation interfaces", "Embedded communication", "Mechanical subsystem integration"],
    stack: ["Flask", "HTML", "Sockets", "Embedded C", "MicroROS"],
    image: {
      src: "/portfolio/harvard-fleet-robots.png",
      alt: "Fleet Robotics underwater robots against a red wall",
      width: 2500,
      height: 1406,
    },
    gallery: [],
  },
  {
    slug: "sunnysips",
    name: "SunnySips",
    index: "05",
    category: "Independent software · real-world recommendations",
    scope: "Released independent product",
    evidence: "Released iOS/web product · in-person customer discovery",
    system: "Python/FastAPI model pipeline → SwiftUI interface → caching and fallback behavior.",
    title: "Turning weather, geometry, and place into a simple outdoor recommendation experience.",
    summary:
      "A released personal iOS and web project that hides environmental modeling beneath an approachable interface.",
    context:
      "SunnySips shows the same underlying instinct as the robotics work: model the real world carefully, then make the result useful to a person who should not need to see the complexity.",
    contributions: [
      "Built SwiftUI workflows alongside Python/FastAPI data generation.",
      "Modeled sun position, weather, venue context, and urban occlusion.",
      "Used in-person café and user discovery to change feature priorities, including future-planning functionality.",
      "Added caching and fallback behavior, automated testing, Docker, GitHub Actions CI/CD, and release tooling.",
    ],
    proof: ["Released iOS/web product", "Customer discovery changed priorities", "Automated testing + CI/CD"],
    stack: ["SwiftUI", "FastAPI", "Python", "Docker", "GitHub Actions", "Geospatial data"],
    image: {
      src: "/portfolio/sunnysips-time-it-right.png",
      alt: "SunnySips forecasting and recommended visit-times interface",
      width: 1080,
      height: 1080,
      className: "object-top",
    },
    gallery: [
      { src: "/portfolio/sunnysips-product-triptych.png", alt: "SunnySips product overview showing live map, discovery, and forecasting", width: 3240, height: 1080, caption: "Live discovery, saved places, and forecast planning in one product system.", className: "object-contain" },
      { src: "/portfolio/sunnysips-recommendations.png", alt: "SunnySips outdoor café recommendations", width: 1206, height: 2622, caption: "Recommendations made approachable." },
      { src: "/portfolio/sunnysips-detail.png", alt: "SunnySips venue detail interface", width: 1206, height: 2622, caption: "Environmental context without the clutter." },
    ],
    link: { href: "https://github.com/rh5rep/SunnySips", label: "View code" },
  },
  {
    slug: "trybe",
    name: "TRYBE",
    index: "06",
    category: "Independent prototype · participation systems",
    scope: "Independent product prototype",
    evidence: "Partner-pilot materials + interaction design",
    system: "Sessions, partners, perks, and booking rules translated into web and iOS prototype states.",
    title: "Exploring a more welcoming way into real-world movement and community.",
    summary:
      "A product prototype for beginner-friendly, instructor-led sessions, with careful attention to states, partner rules, and the experience of trying something new.",
    context:
      "TRYBE is supporting evidence for how I approach interfaces: make an ambiguous behavior concrete, respect real-world constraints, and use design to remove friction rather than create noise.",
    contributions: [
      "Mapped sessions, perks, partners, and booking rules into concrete user flows.",
      "Built and iterated prototype implementations across web and iOS directions.",
      "Created partner-pilot materials and tested the behavior of booking/perk rules.",
    ],
    proof: ["Prototype systems thinking", "Partner-pilot materials", "Interaction design"],
    stack: ["React", "SwiftUI", "Node.js", "UX systems"],
    image: {
      src: "/portfolio/trybe-boulders-sessions.png",
      alt: "TRYBE Boulders Sessions mobile interface",
      width: 520,
      height: 980,
    },
    gallery: [
      { src: "/portfolio/trybe-sessions.png", alt: "TRYBE sessions interface", width: 520, height: 980, caption: "A clearer entry point to trying something new." },
      { src: "/portfolio/trybe-perks.png", alt: "TRYBE perks interface", width: 520, height: 980, caption: "Partner rules expressed as usable product states." },
      { src: "/portfolio/trybe-concept.png", alt: "TRYBE concept screen", width: 520, height: 980, caption: "An early product direction." },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
