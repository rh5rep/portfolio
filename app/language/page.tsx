export const metadata = {
  title: "Language - Rami Hanna",
  description: "Language learning and interests",
};

export default function Language() {
  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-8">Language</h1>
        
        <div className="text-center">
          <p className="text-lg mb-4">Content coming soon...</p>
          <ol className="list-decimal list-inside text-left max-w-2xl mx-auto space-y-2">
            <li>I want to include a map with a pin to everywhere in the world I have been. You click the pin, and images/videos and descriptions will show up</li>
            <li>Do include languages/Pimsu</li>
          </ol>
        </div>
      </div>
    </div>
  );
}