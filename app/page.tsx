"use client";
import React from 'react'
export default function HomePage() {
  return (
    <div className=" flex-col h-full items-start justify-center p-7  text-white">
      <div className="flex flex-col space-y-2 mb-10">
        <h1 className="text-4xl mb-7 ">Lets Work <span className="text-orange-500">Together !</span></h1>
        <h1 className="text-4xl font-bold">Hi From <span className="text-orange-500">Dusit</span> ,</h1>
        <h1 className="text-4xl font-bold">Interactive Designer & Fullstack</h1>
        <h1 className="text-4xl font-bold">Web Developer</h1>
      </div>
      <p className="max-w-xl text-neutral-400 text-xl mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem .
      </p>
      <div className="flex space-x-12">
        <div>
          <h2 className="text-5xl  text-orange-500">3+</h2>
          <p className="text-sm text-neutral-400">Years of Experience</p>
        </div>
        <div>
          <h2 className="text-5xl  text-orange-500">10+</h2>
          <p className="text-sm text-neutral-400">Projects Completed</p>
        </div>
      </div>
    </div>
  )
}
