"use client";

import React from "react";
import Image from "next/image";
import MockVideo from "./../images/mockVideo.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Page() {
  return (
    <div className="flex flex-col justify-center p-7 text-white ">
      <div className="flex flex-col space-y-2 mb-4">
        <h1 className="text-4xl font-bold">
          Featured<span className="text-orange-500 ml-2">Projects</span>
        </h1>
        <h2 className="text-xl font-bold">
          Manage Task App - fullstack web development
        </h2>
      </div>

      <p className="max-w-xl text-neutral-400 text-xl mb-10">
        Heres my latest project built with Next.js and Laravel, using
        TailwindCSS on the front-end. Watch the video to see the responsive
        landing page in action!
      </p>

      <div className="cursor-pointer">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showArrows={false}
          emulateTouch
          showIndicators={true}
          width={500}
        >
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative">
              <Image
                src={MockVideo}
                alt={`slide ${i}`}
                className="rounded-md"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
