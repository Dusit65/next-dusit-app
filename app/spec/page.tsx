import React from "react";
import Image from "next/image";
import IcFrontend from "./../icons/specIcon/frontend.png";
import IcUi from "./../icons/specIcon/ui.png";
import IcDesign from "./../icons/specIcon/design.png";

export default function Page() {
  return (
    <div className="flwx flex-col h-full items-start justify-center p-7  text-white">
      <div className="mx-auto ">
        <div className="max-w-2xl">
          {/* Header */}
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-white">My </span>
            <span className="text-orange-500">Specializations</span>
          </h2>

          <div className="space-y-5">
            <div className="border border-orange-500 rounded-2xl px-6 py-4 flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-2xl font-bold text-white">
                  Front end-developer
                </h3>
                <Image
                  src={IcFrontend}
                  alt="frontend"
                  className="flex flex-col items-center my-4"
                  width={30}
                  height={30}
                />
              </div>
              <p className="text-gray-400">
                Front-end is where I weave code and creativity to shape
                captivating and user-centric digital experiences.
              </p>
            </div>

            <div className="border border-orange-500 rounded-2xl px-6 py-4 flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-2xl font-bold text-white">
                  UI/UX Designer
                </h3>
                <Image
                  src={IcUi}
                  alt="frontend"
                  className="flex flex-col items-center my-4"
                  width={30}
                  height={30}
                />
              </div>
              <p className="text-gray-400">
                UI/UX design is my palette for blending art and user psychology
                into seamless and delightful interactions.
              </p>
            </div>

            <div className="border border-orange-500 rounded-2xl px-6 py-4 flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-2xl font-bold text-white">
                  Graphic designer
                </h3>
                <Image
                  src={IcDesign}
                  alt="frontend"
                  className="flex flex-col items-center my-4"
                  width={30}
                  height={30}
                />
              </div>
              <p className="text-gray-400">
                As a graphic designer, I transform ideas into visually striking
                and impactful designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
