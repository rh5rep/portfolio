export const metadata = {
  title: "Learn-It - Rami Hanna",
  description: "Learn-It STEM toy project",
};

export default function LearnIt() {
  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-8">Learn-It</h1>
        
        <div className="flex flex-col gap-6">
          <p className="text-lg text-center p-2">
            Learn-It was my first major multidisciplinary project at Wentworth. 
            The Problem Statement: The need is an increase of STEM related toys. 
            This is important because there is a higher demand for STEM related 
            jobs with diminishing numbers of qualified employees. Currently available 
            designs include building blocks, magnetic gears, robots and take-apart toys. 
            The users need a design to be attractive to young children and user-friendly. 
            Our solution will encourage STEM learning at a young age by focusing on 
            aspects of STEM fields working together in a safe manner. It will be at 
            most $150, portable, and have at least one 3D printed/laser cut component.
          </p>
          
          <p className="text-lg text-center p-2">
            Background Information: Guided to children between the ages of 3 - 6 
            (preschool - kindergarten). At that age children can recognize and recall 
            information. Toy needs to keep child's interest and still educate them.
          </p>
        </div>
      </div>
    </div>
  );
}