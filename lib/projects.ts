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
  heroImage?: {
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
  gallery: (
    | {
        type?: "image";
        src: string;
        alt: string;
        width: number;
        height: number;
        caption: string;
        className?: string;
      }
    | {
        type: "video";
        src: string;
        poster: string;
        label: string;
        caption: string;
        className?: string;
      }
  )[];
  galleryLayout?: "wide-first";
  caseStudy?: {
    title: string;
    intro: string;
    origin?: string;
    architecture?: {
      afterSection: number;
      label: string;
      title: string;
      intro: string;
      stages: {
        title: string;
        body: string;
        note: string;
      }[];
    };
    evolution?: {
      afterSection: number;
      label: string;
      title: string;
      intro: string;
      items: {
        title: string;
        body: string;
        src: string;
        alt: string;
        width: number;
        height: number;
      }[];
    };
    sections: {
      label: string;
      title: string;
      body: string;
      media:
        | {
            type: "image";
            src: string;
            alt: string;
            width: number;
            height: number;
          }
        | {
            type: "video";
            src: string;
            poster: string;
            label: string;
          };
      caption: string;
    }[];
  };
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
    system: "Reduced-order routing model → Arduino Uno motor/encoder control in C → camera and encoder measurement.",
    title: "A wearable tendon-driven finger actuator, built and evaluated for neuro\u00adrehabilitation tasks.",
    summary:
      "An M.Sc. engineering feasibility study spanning simplified mechanics, repeatable benchtop experiments, and an on-hand wearable prototype.",
    context:
      "The thesis turns an assistive-device concept into a working system of tendon routing, mechanics, control, and repeatable measurement. The final prototype moved from rigid benchtop tests to trials on the hand.",
    contributions: [
      "Built reduced-order models for finger kinematics, tendon routing, passive torque, leverage, stroke, and tension.",
      "Used Python sweeps to screen stiffness and geometry choices before hardware iteration.",
      "Programmed the final Arduino Uno motor/encoder control loop in C and built Python host and analysis tooling.",
      "Designed a benchtop validation loop around force, displacement, motion tracking, repeatability, and model error.",
      "Integrated the wrist unit, tendon path, and finger interface into a wearable prototype for on-hand testing.",
      "Supervised three student interns contributing to fixture, control, computer-vision, and sensing work.",
    ],
    proof: ["1,000 / 1,000 rigid-fixture cycles", "97.5% of 49.93° comparator", "On-hand wearable testing", "3 student interns supervised"],
    stack: ["Python", "OpenCV", "Arduino Uno", "C motor + encoder control", "FDM prototypes"],
    image: {
      src: "/portfolio/thesis-wearable-hero-rotated.png",
      alt: "Finished wearable soft-finger actuator on a hand",
      width: 1491,
      height: 1055,
    },
    gallery: [],
    caseStudy: {
      title: "The decisions behind the final prototype.",
      intro:
        "The model did not hand me a finished design. I used it to choose what to build next, measured the drive and load sides separately, and changed the routing when the hardware disagreed.",
      origin:
        "Before I modeled the mechanism, I spoke with clinicians and patients about rehabilitation needs and the practical limits of existing devices. Those conversations set the direction for a wearable design that could be tested on the hand.",
      architecture: {
        afterSection: 1,
        label: "Control architecture",
        title: "The controller changed as the hardware got faster.",
        intro:
          "The first rig could wait for the camera. The wearable could not, so timing moved into firmware and vision became a slower correction channel.",
        stages: [
          {
            title: "Visual guidance",
            body: "The webcam measured angle online between small encoder jogs. Each move ended with a pause and another measurement.",
            note: "Useful for calibration, too slow for tapping",
          },
          {
            title: "Firmware timing",
            body: "A half-cosine trajectory ran on the Arduino while encoder and velocity feedback set motor PWM. The camera moved offline.",
            note: "Deterministic motion on the rigid fixture",
          },
          {
            title: "Two-layer control",
            body: "The encoder handled the fast inner loop. A bounded camera loop near 50 Hz trimmed the reference as the wearable load path changed.",
            note: "Fast motor control with load-side correction",
          },
        ],
      },
      evolution: {
        afterSection: 3,
        label: "Wearable evolution",
        title: "How the wearable changed.",
        intro:
          "The hand interface went through rings, straps, a failed resin transmission, and removable guides before the final build.",
        items: [
          {
            title: "Ring concepts",
            body: "Printed rings tested simple ways to route the tendon around the finger.",
            src: "/portfolio/thesis/evolution/01-ring-concepts.jpg",
            alt: "Six early 3D-printed ring concepts arranged on a workbench",
            width: 1600,
            height: 1200,
          },
          {
            title: "Adjustable straps",
            body: "Straps made the finger interface easier to fit and reposition.",
            src: "/portfolio/thesis/evolution/02-adjustable-straps.jpg",
            alt: "Early adjustable finger straps guiding tubing along a finger",
            width: 1098,
            height: 1400,
          },
          {
            title: "Resin transmission",
            body: "The rigid resin path failed during development and was dropped.",
            src: "/portfolio/thesis/evolution/03-resin-transmission.jpg",
            alt: "Two failed transparent resin transmission pieces from the wearable prototype",
            width: 1200,
            height: 1600,
          },
          {
            title: "Velcro interface",
            body: "A removable guide made placement and rework faster between tests.",
            src: "/portfolio/thesis/evolution/04-velcro-interface.jpg",
            alt: "Intermediate wearable interface using a Velcro strap and removable tendon guide",
            width: 1098,
            height: 1400,
          },
          {
            title: "Integrated wearable",
            body: "The final build joined the wrist unit, tendon path, and finger interface.",
            src: "/portfolio/thesis/evolution/05-integrated-system.png",
            alt: "Integrated tendon-driven finger actuator worn on a hand",
            width: 462,
            height: 708,
          },
        ],
      },
      sections: [
        {
          label: "Measurement loop",
          title: "The rig made lost motion visible.",
          body:
            "The Arduino commanded the motor while the encoder measured the drive side and the camera measured the finger side. That separation mattered. Motor motion alone could not show whether the tendon path actually transferred motion to the load.",
          media: {
            type: "image",
            src: "/portfolio/thesis/system-overview.jpg",
            alt: "Thesis test setup with finger fixture, Arduino controller, encoder wiring, and camera measurement system",
            width: 2200,
            height: 1650,
          },
          caption: "The final measurement setup connected motor control, encoder feedback, and camera-side motion tracking.",
        },
        {
          label: "Route A to Route B",
          title: "A small routing change came from the model.",
          body:
            "A reduced-order screen pointed toward moving the fixed guide. I used that result to revise the routing and chose a 29 mm shift near the high end of the screened range.",
          media: {
            type: "image",
            src: "/portfolio/thesis/route-a-b-redesign.png",
            alt: "Side-by-side diagram comparing the original Route A tendon guide with the revised Route B guide position",
            width: 1448,
            height: 1086,
          },
          caption: "Route B moved the fixed guide by about 29 mm to change the tendon leverage and available excursion.",
        },
        {
          label: "Rigid validation",
          title: "The revised setup completed all 1,000 commanded cycles.",
          body:
            "The endurance sequence ran 20 consecutive sets of 50 cycles without changing the installation or configuration. Across the run means, measured excursion reached 97.5% of the 49.93 degree engineering reference, with about 0.26% mean period error.",
          media: {
            type: "image",
            src: "/portfolio/thesis/rigid-endurance.png",
            alt: "Plot of projected marker amplitude across twenty rigid-fixture endurance runs totaling one thousand cycles",
            width: 975,
            height: 351,
          },
          caption: "Twenty runs, fifty commanded cycles per run. The first-cycle points also show why inspecting individual cycles mattered.",
        },
        {
          label: "Working prototype",
          title: "The final controller ran on the hand.",
          body:
            "The encoder handled the fast motor loop while the camera measured what reached the finger. This run shows the reinforced wearable cycling with the acquisition overlay recording commanded and measured angle.",
          media: {
            type: "video",
            src: "/portfolio/thesis/wearable-motion.mp4",
            poster: "/portfolio/thesis/wearable-motion-poster.jpg",
            label: "The final reinforced tendon-driven wearable cycling on a hand with measurement data overlaid",
          },
          caption: "An eight-second on-hand run from the final 250:1 test series.",
        },
        {
          label: "Wearable transfer",
          title: "The wearable exposed the real constraint.",
          body:
            "On-hand measurements fell below the commanded excursion even when the motor-side system continued to move. Slack, compliance, calibration, and the changing load path absorbed part of the motion. The wearable load path, rather than motor travel, became the limiting part of the system.",
          media: {
            type: "image",
            src: "/portfolio/thesis/onhand-commanded-measured.png",
            alt: "Comparison of commanded and camera-measured on-hand projected excursion across three configurations",
            width: 862,
            height: 369,
          },
          caption: "Camera-side measurements separated commanded motion from the motion that reached the wearable load path.",
        },
      ],
    },
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
      { src: "/portfolio/perplant-thermal-output.png", alt: "Thermal imagery output from an agricultural sensing workflow", width: 1512, height: 982, caption: "Thermal data in a field workflow.", className: "thermal-data" },
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
      src: "/portfolio/teradyne-robot.jpg",
      alt: "Completed Teradyne Cartesian robotic test system installed over the connector fixture",
      width: 624,
      height: 468,
    },
    gallery: [],
    caseStudy: {
      title: "A robot built around measurable contact.",
      intro:
        "The mechanism had to do more than reach the connector. It needed to detect contact, change tools, schedule tests, and leave behind force data that could be inspected afterward.",
      origin:
        "Senior engineers at Teradyne described a testing process that still depended on careful manual connector mating and repeatable data collection. That conversation became the brief for the robot.",
      architecture: {
        afterSection: 2,
        label: "Automation architecture",
        title: "One workflow coordinated motion, tooling, and force.",
        intro:
          "The Raspberry Pi ran the operator-facing workflow. Tool changes and connector moves became scheduled robot actions, while the load path stayed measurable throughout the test.",
        stages: [
          {
            title: "Schedule",
            body: "The Raspberry Pi hosted remote operation, test scheduling, manual controls, and the data viewer.",
            note: "Python workflow with remote access",
          },
          {
            title: "Change tools",
            body: "The robot moved to the rack, coupled to the toolhead, and actuated the servo-driven locking shaft before continuing the test.",
            note: "Automatic pickup and release logic",
          },
          {
            title: "Measure contact",
            body: "The HX711 sampled the load cell, the ESP32 forwarded force readings, and the Raspberry Pi used and stored that feedback during mating.",
            note: "Force-aware motion and recorded evidence",
          },
        ],
      },
      sections: [
        {
          label: "Mating cycle",
          title: "Load feedback turned contact into a control signal.",
          body:
            "I programmed the Raspberry Pi and ESP32 workflow that combined robot motion with HX711 load-cell readings. Closed-loop load detection let the system respond to the connector instead of relying on position alone.",
          media: {
            type: "video",
            src: "/portfolio/teradyne/connector-mating.mp4",
            poster: "/portfolio/teradyne/connector-mating-poster.jpg",
            label: "Close view of the Cartesian robot mating coaxial connectors",
          },
          caption: "A 12-second close view of the tool settling onto a connector and completing the mating step.",
        },
        {
          label: "Automatic tool changer",
          title: "The robot could pick up and release its own toolhead.",
          body:
            "The tool changer used a Maxwell-style kinematic coupling to locate the toolhead repeatably. A servo rotated the locking shaft and compressed a preload spring, while the cable toolhead waited on a rack between operations. I implemented the automatic tool-change logic used by the scheduled test workflow.",
          media: {
            type: "image",
            src: "/portfolio/teradyne/tool-changer-exploded.png",
            alt: "Exploded CAD view of the servo-actuated automatic tool changer, showing its base plate, locking shafts, preload spring, toolhead plate, and cable toolhead",
            width: 2136,
            height: 1279,
          },
          caption: "The spring-loaded coupling locked the cable toolhead to the robot and left room for future toolheads.",
        },
        {
          label: "Test evidence",
          title: "Each connector left a force signature.",
          body:
            "The force trace made the mating sequence inspectable across multiple connectors. Together with 0.01 mm travel precision and a measured 0.5 g load standard deviation, it gave the project evidence beyond a working demonstration.",
          media: {
            type: "image",
            src: "/images/4PlugData.png",
            alt: "Force versus time plot showing four connector-mating events",
            width: 1100,
            height: 586,
          },
          caption: "Four connector-mating events recorded as force over time.",
        },
      ],
    },
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
    heroImage: {
      src: "/portfolio/harvard/gearbox-electronics-bench.jpg",
      alt: "Two open underwater robot drive modules showing motors, gears, electronics, and integration wiring",
      width: 768,
      height: 1024,
    },
    gallery: [
      {
        src: "/portfolio/harvard/gearbox-electronics-bench.jpg",
        alt: "Two open underwater robot drive modules with motors, planetary gears, control boards, and temporary wiring on a workbench",
        width: 768,
        height: 1024,
        caption: "Two open drive modules during planetary-gearbox and electronics integration.",
        className: "harvard-hardware",
      },
      {
        type: "video",
        src: "/portfolio/harvard/gearbox-wiring-prototype.mp4",
        poster: "/portfolio/harvard/gearbox-wiring-prototype.jpg",
        label: "Open underwater robot drive module being handled during subsystem bring-up",
        caption: "A seven-second view of the open drive module during subsystem bring-up.",
        className: "harvard-hardware",
      },
    ],
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
    galleryLayout: "wide-first",
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
