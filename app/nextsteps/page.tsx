export const metadata = {
  title: "Next Steps - Rami Hanna",
  description: "Future improvements and roadmap",
};

export default function NextSteps() {
  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-8">Next Steps</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 mb-6">
            <ol className="list-decimal list-inside space-y-3">
              <li>Good progress was made with the slideshow as seen in the Capstone page. Working on:</li>
              <li>Properly sizing the images</li>
              <li>Adding a hover option for description of the images</li>
            </ol>
          </div>
          
          <p className="text-center italic">
            Obviously, there is much more to be done with this website. This ordered 
            list is just to demonstrate where I currently see the priorities regardless 
            of appearance. Again, I am learning and this all takes time!
          </p>
        </div>
      </div>
    </div>
  );
}