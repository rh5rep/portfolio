export const metadata = {
  title: "Heart Rate Extraction - Rami Hanna",
  description: "Extracting heart rate from cell phone videos using FFT and BSS",
};

export default function Heartrate() {
  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="w-full max-w-7xl">
        <div className="m-8">
          <h1 className="text-3xl font-bold mb-4">
            Extracting Heart rate from Cell Phone Videos Using Fast Fourier
            Transform (FFT) and Blind Source Separation (BSS) with Active Face
            Tracking using MATLAB
          </h1>
          <hr className="my-4 border-gray-300 dark:border-gray-700" />
          
          <p className="text-lg text-center mb-8">
            For this project, I took the lead in developing the majority of the
            MATLAB code, leveraging essential tools such as the Computer Vision
            Toolbox, Signal Processing Toolbox, and PCA and ICA Data Package. I
            also played a significant role in crafting the PowerPoint
            presentation and conducting thorough data analysis. While my partner
            primarily focused on writing the research paper, both the
            presentation and research paper are seamlessly embedded on this page.
            For a closer look at the MATLAB scripts used in this project, you can
            find them conveniently located in the appendix of the research paper.
          </p>

          <p className="text-center mb-8">
            Below, you can see a video of the program, followed by the research
            paper, followed by the powerpoint.
          </p>
        </div>

        <iframe
          src="/images/heartrate.mp4"
          width="100%"
          height="600px"
          className="border-none rounded-2xl mb-8"
          title="Heart Rate Demo Video"
        />

        <iframe
          src="/pdfs/FinalFinalDSPProject.pdf"
          width="100%"
          height="600px"
          className="border-none rounded-2xl mb-8"
          title="Research Paper"
        />

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <iframe
          src="/pdfs/FinalDSPProject.pdf"
          width="100%"
          height="600px"
          className="border-none rounded-2xl"
          title="PowerPoint Presentation"
        />
      </div>
    </div>
  );
}