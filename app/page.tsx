import Image from "next/image";
import Link from "next/link";

const projects = [
  { href: "/resume", title: "My Résumé" },
  { href: "/learnit", title: "Learn-It" },
  { href: "/capstone", title: "Senior Capstone" },
  { href: "/heartrate", title: "Extracting Heartrate from Cell Phone Videos" },
  { href: "/pomodoro", title: "Pomodoro Timer!" },
  { href: "/caradapter", title: "Bluetooth Car Adapter" },
];

const hobbies = [
  { href: "/travel", title: "Travel" },
  { href: "/language", title: "Language" },
  { href: "/exercise", title: "Exercise" },
];

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold text-center p-5 bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Hello, I am Rami Hanna.
        </h1>
        <div className="w-48 h-48 mt-6 relative drop-shadow-2xl">
          <Image src="/rami.png" fill alt="Profile picture" className="object-contain rounded-full" />
        </div>
      </div>

      {/* Intro Text */}
      <div className="max-w-2xl w-full mx-auto space-y-4 text-center">
        <p className="text-lg">
          Welcome to my website. Not only is this portfolio a Work in Progress, but it is also the first website I am building from scratch.
        </p>
        <p className="text-lg">
          Please check back often for updates and give me any feedback you may have.
        </p>
      </div>

      <hr className="w-full my-8 border-gray-300 dark:border-slate-700" />

      {/* Projects Section */}
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
        Résumé and Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
        {projects.map((project) => (
          <Link key={project.href} href={project.href}>
            <div className="group p-6 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105 hover:border-cyan-400 dark:hover:border-purple-600">
              <p className="text-center group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {project.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <hr className="w-full my-8 border-gray-300 dark:border-slate-700" />

      {/* Hobbies Section */}
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
        Hobbies and Interests
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
        {hobbies.map((hobby) => (
          <Link key={hobby.href} href={hobby.href}>
            <div className="group p-6 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105 hover:border-cyan-400 dark:hover:border-purple-600">
              <p className="text-center group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {hobby.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <hr className="w-full my-8 border-gray-300 dark:border-slate-700" />

      {/* Next Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="md:col-start-2">
          <Link href="/nextsteps">
            <div className="group p-6 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105 hover:border-cyan-400 dark:hover:border-purple-600">
              <p className="text-center group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Next Steps
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}