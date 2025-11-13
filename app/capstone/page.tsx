"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import Image from "next/image";
import Link from "next/link";

const mediaItems = [
  {
    type: "image",
    source: "/images/Cartesian-Robot.jpg",
    description: "The prior capstone group robot. Many mechanical changes such as adding a linear rail, tool-changer, and programming changes were all made.",
  },
  {
    type: "image",
    source: "/images/RobotRender.jpg",
    description: "Solidworks model of our initial redesign.",
  },
  {
    type: "image",
    source: "/images/30_min_drift_10_min_tare_2.png",
    description: "A major addition to the project was adding a load cell to determine ample force needed to mate a connector -- for automation purposes. Here is an initial test of 50g on a cantilever load cell with 10 minute tares.",
  },
  {
    type: "image",
    source: "/images/30_min_drift_no_tare.png",
    description: "This test had no taring involved, but same mass and same total duration.",
  },
  {
    type: "image",
    source: "/images/RobotPicture.jpg",
    description: "Our first assembly day. Two linear rails on the X-Axis for additional support, base plate for the Maxwell Kinematic Coupling, and anti-backlash nuts.",
  },
  {
    type: "video",
    source: "/images/GUI Redesign Explaination_Trim.mp4",
    description: "Now it was my time to shine -- Develop a redesigned, easy to use GUI that is powerful for automation. This video is commentated over to describe the scheduler I implemented.",
  },
  {
    type: "video",
    source: "/images/vid1.MOV",
    description: "One mate with conductivity verification. Make sure your volume is up!",
  },
];

export default function Capstone() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const handleNextMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrevMedia = () => {
    setCurrentMediaIndex(
      (prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length
    );
  };

  const currentMediaItem = mediaItems[currentMediaIndex];

  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-center p-4">
          Teradyne Senior Design Project
        </h1>
        <hr className="w-1/2 mx-auto my-4 border-gray-300 dark:border-gray-700" />
        
        <p className="text-lg text-center p-4 w-full">
          The purpose of this project was to create a device that automates the mating of coaxial connectors during testing. A Cartesian robot was designed and built that locates a specific connector within an array of connectors and then executes the desired mate using a Z-axis motion system. Additionally, an integrated tool-changer system is being developed that automatically swaps between the various toolheads used during a testing procedure.
          <br /><br />
          The team behind this capstone project consists of three Electromechanical Engineering students at Wentworth Institute of Technology: Sam Baliki, Rami Hanna, and Paul Miller. They are supported and mentored by Professor James McCusker and Brian C. Wadell at Teradyne.
        </p>

        {/* Media Gallery */}
        <div className="flex justify-center items-center p-4 my-8">
          <div className="flex items-center gap-4 max-w-4xl">
            <button
              onClick={handlePrevMedia}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <FaArrowLeft size={40} />
            </button>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMediaIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl overflow-hidden"
                >
                  {currentMediaItem.type === "video" ? (
                    <div className="aspect-video">
                      <ReactPlayer
                        url={currentMediaItem.source}
                        controls
                        width="100%"
                        height="100%"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={currentMediaItem.source}
                        alt="Capstone project image"
                        fill
                        className="object-contain rounded-2xl"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <p className="text-center p-4 mt-4">
                {currentMediaItem.description}
              </p>
            </div>

            <button
              onClick={handleNextMedia}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <FaArrowRight size={40} />
            </button>
          </div>
        </div>

        {/* Research Paper */}
        <Link
          href="/pdfs/modified_capstone.pdf"
          download="RHanna - IEEE SII/SICE 2024 - Capstone"
          className="block text-center p-4 underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          I have included our Research Paper that got published to IEEE below (click here to download pdf):
        </Link>

        <iframe
          src="/pdfs/modified_capstone.pdf"
          width="100%"
          height="600px"
          className="border-none rounded-2xl"
          title="Capstone Research Paper"
        />
      </div>
    </div>
  );
}