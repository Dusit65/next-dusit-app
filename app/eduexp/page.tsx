"use client";
import React from "react";

export default function Page() {
  return (
    <div className="flex-col h-full items-start justify-center p-7  text-white">
        <div className="">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-white">Education & </span>
            <span className="text-orange-500">Experience</span>
          </h2>
          <div className="mb-8 pl-8">
            <p className="text-orange-500 font-semibold text-lg">
              2022 - Present
            </p>
            <h3 className="text-2xl font-bold text-white mt-2">
              UI/UX Designer
            </h3>
            <p className="text-gray-400">Freelance</p>
            <h3 className="text-2xl font-bold text-white mt-4">
              Fullstack Web Developer
            </h3>
            <p className="text-gray-400">Freelance</p>
          </div>
          <div className="mb-8 pl-8">
            <p className="text-gray-400 font-semibold text-lg">2022- 2025</p>
            <h3 className="text-2xl font-bold text-white mt-2">
              Bachelor Degree in Technology Digital and Innovation
            </h3>
            <p className="text-gray-400">Southeast Asia University</p>
          </div>
          <div className="pl-8">
            <p className="text-gray-400 font-semibold text-lg">2016- 2021</p>
            <h3 className="text-2xl font-bold text-white mt-2">High school</h3>
            <p className="text-gray-400">Taweethapiseck School</p>
          </div>
        </div>
      </div>
  );
}
