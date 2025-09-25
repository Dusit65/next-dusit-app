"use client";
import React from "react";

export default function Page() {
  return (
    <div className=" flex-col h-full items-start justify-center p-7  text-white">
      <div className="flex flex-col space-y-2 mb-10">
        <h1 className="text-4xl mb-7 ">
          About<span className="text-orange-500 ml-2">Me</span>
        </h1>
        <h1 className="text-4xl font-bold">I find fulfillment in blending </h1>
        <h1 className="text-4xl font-bold">visual design with the power of </h1>
        <h1 className="text-4xl font-bold">coding to create meaningful </h1>
        <h1 className="text-4xl font-bold">experiences.</h1>
      </div>
      <p className="max-w-xl text-neutral-400 text-xl mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
        tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
        architecto earum voluptates obcaecati corrupti voluptatem .
      </p>
    </div>
  );
}
