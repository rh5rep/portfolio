import Link from "next/link";

export const metadata = {
  title: "Résumé - Rami Hanna",
  description: "Rami Hanna's professional résumé",
};

export default function Resume() {
  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="w-full max-w-7xl">
        <Link 
          href="/resume.pdf" 
          download="RHanna - Resume"
          className="text-center underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 block"
        >
          Click here to download my résumé!
        </Link>
        
        <iframe
          src="/resume.pdf"
          width="100%"
          height="800px"
          className="border-none rounded-lg shadow-lg"
          title="Rami Hanna Resume"
        />
      </div>
    </div>
  );
}