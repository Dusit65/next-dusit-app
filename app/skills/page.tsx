"use client";

import React from "react";
import Skills from "./../../components/Skills";

// import icon จาก react-icons
import { FaReact, FaFigma, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiHtml5 } from "react-icons/si";

export default function Page() {
  return (
    <div className="flex flex-col items-start p-7 text-white">
      <h1 className="text-4xl font-bold mb-12">
        My <span className="text-orange-500">Skills</span>
      </h1>

      {/* Skill list*/}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <Skills icon={<FaReact />} title="React" percent={60} />
        <Skills icon={<FaFigma />} title="Figma" percent={85} />
        <Skills icon={<SiHtml5 />} title="HTML/CSS" percent={80} />
        <Skills icon={<SiNextdotjs />} title="Next.js" percent={80} />
        <Skills icon={<FaNodeJs />} title="Java Script" percent={60} />
        <Skills icon={<FaGithub />} title="GitHub" percent={90} />
      </div>
    </div>
  );
}