export type Project = {
  slug: string;
  name: string;
  index: string;
  category: string;
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
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    slug: "thesis",
    name: "Soft-finger thesis",
    index: "01",
    category: "Rehabilitation robotics · simulation + validation",
    title: "Building a measurable path from soft-actuator models to benchtop evidence.",
    summary:
      "A focused engineering study of a variable-stiffness finger actuator for rehabilitation-oriented hardware.",
    context:
      "The work turns an intuitive assistive-device concept into an inspectable system of geometry, mechanics, control inputs, and repeatable measurements.",
    contributions: [
      "Built reduced-order models for finger kinematics, tendon routing, passive torque, leverage, stroke, and tension.",
      "Used Python sweeps to screen stiffness and geometry choices before hardware iteration.",
      "Designed a benchtop validation loop around force, displacement, motion tracking, repeatability, and model error.",
    ],
    proof: ["Simulation-to-bench workflow", "Rehabilitation-oriented", "Hardware + measurement"],
    stack: ["Python", "Controls", "Motion tracking", "FDM prototypes"],
    image: {
      src: "/portfolio/thesis-wearable-hero.jpg",
      alt: "Finished wearable soft-finger actuator on a hand",
      width: 1055,
      height: 1491,
    },
    detailImage: {
      src: "/portfolio/thesis-wearable-onhand.png",
      alt: "Finished wearable soft-finger actuator shown on a hand",
      width: 462,
      height: 708,
    },
    link: { href: "/pdfs/rami-hanna-thesis.pdf", label: "Read thesis" },
  },
  {
    slug: "perplant",
    name: "PerPlant",
    index: "02",
    category: "Agtech robotics · sensing + data quality",
    title: "Making field sensing and visual-data workflows hold up outside ideal conditions.",
    summary:
      "Robotics co-op work connecting thermal imagery, GPS metadata, ROS2, and more deliberate dataset curation for precision agriculture.",
    context:
      "The challenge was not a clean lab demo: it was making sensing and downstream computer-vision data useful in field conditions with correlated imagery and human annotation constraints.",
    contributions: [
      "Integrated thermal capture with ROS2 publishers/subscribers in C++ and Python.",
      "Linked field capture to GPS metadata for structured collection.",
      "Used ROI filtering, detector embeddings, UMAP, HDBSCAN, and grouped splits to create representative annotation batches.",
    ],
    proof: ["ROS2 + C++", "Thermal + GPS", "Representative data selection"],
    stack: ["ROS2", "C++", "Python", "UMAP", "HDBSCAN"],
    image: {
      src: "/portfolio/perplant-field-aerial.png",
      alt: "Aerial agricultural field imagery showing the kind of real-world setting PerPlant works in",
      width: 1177,
      height: 713,
    },
  },
  {
    slug: "teradyne",
    name: "Teradyne robotic test system",
    index: "03",
    category: "Mechatronics · closed-loop automation",
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
    link: { href: "/pdfs/modified_capstone.pdf", label: "Read IEEE paper" },
  },
  {
    slug: "sunnysips",
    name: "SunnySips",
    index: "04",
    category: "Independent software · real-world recommendations",
    title: "Turning weather, geometry, and place into a simple outdoor recommendation experience.",
    summary:
      "A released personal iOS and web project that hides environmental modeling beneath an approachable interface.",
    context:
      "SunnySips shows the same underlying instinct as the robotics work: model the real world carefully, then make the result useful to a person who should not need to see the complexity.",
    contributions: [
      "Built SwiftUI workflows alongside Python/FastAPI data generation.",
      "Modeled sun position, weather, venue context, and urban occlusion.",
      "Added snapshots, caching/fallback behavior, testing, and release tooling.",
    ],
    proof: ["Released personal project", "Environmental modeling", "Human-centered interface"],
    stack: ["SwiftUI", "FastAPI", "Python", "Geospatial data"],
    image: {
      src: "/portfolio/sunnysips-map.png",
      alt: "SunnySips outdoor recommendation map",
      width: 1206,
      height: 2622,
      className: "object-top",
    },
    link: { href: "https://github.com/rh5rep/SunnySips", label: "View code" },
  },
  {
    slug: "trybe",
    name: "TRYBE",
    index: "05",
    category: "Independent prototype · participation systems",
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
  },
];

export const primaryProjects = projects.slice(0, 3);
export const supportingProjects = projects.slice(3);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
