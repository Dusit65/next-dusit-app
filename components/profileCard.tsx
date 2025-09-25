import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProfilePic from "./../app/images/profilePic.jpg";
import IcFacebook from "./../app/icons/social/facebook.png";
import IcX from "./../app/icons/social/X.png";
import IcInstagram from "./../app/icons/social/ig.png";
import IcLinkedin from "./../app/icons/social/in.png";
import IcGoogle from "./../app/icons/social/google.png";

export default function profileCard() {
  return (
    <div className=" bg-neutral-800 text-white rounded-3xl mx-auto p-5   w-70 h-full flex flex-col items-center ">
      {/* Header------------------------ */}
      <div className="flex  w-full">
        <h1 className="text-xl font-bold font-inter text-orange-500 ml-2">D</h1>

        <h1 className="text-xl font-bold font-inter text-white">usit</h1>
        <div className="w-3"></div>
      </div>

      {/* Profile Img-----*/}
      <div className=" w-full flex justify-center ">
        <Image
          src={ProfilePic}
          alt="Dusit Profile Picture"
          className="w-auto h-auto rounded-3xl"
          width={300}
          height={300}
        />
      </div>

      {/* Dusit Info--- */}
      <div className="mb-4 text-center">
        <p className="text-md font-semibold text-white font-inter mt-1">
          STU ID: 6552410011
        </p>
        <p className="text-sm text-neutral-400 font-inter">
          Fullstack Web Developer
        </p>
      </div>

      {/* Social Icons ------*/}
      <div className="flex justify-center items-center space-x-6 mt-6">
        <Link href="https://www.facebook.com/reel/2706186239674291">
          <Image src={IcFacebook} alt="" width={25} height={25} />
        </Link>
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <Image src={IcX} alt="" width={25} height={25} />
        </Link>
        <Link href="https://www.instagram.com/p/BgSlRglAKBn/">
          <Image src={IcInstagram} alt="" width={25} height={25} />
        </Link>
        <Link href="https://www.linkedin.com/in/rick-roll-6b3ab1218">
          <Image src={IcLinkedin} alt="" width={25} height={25} />
        </Link>
        <Link href="https://github.com">
          <Image src={IcGoogle} alt="" width={25} height={25} />
        </Link>
      </div>

      {/* Action Button */}
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <button className="cursor-pointer mt-8 text-neutral-800 bg-orange-500 hover:bg-orange-700 hover:text-white py-2 px-20 mx-auto rounded-xl transition-colors duration-200 shadow-md">
          HIRE ME !
        </button>
      </Link>
    </div>
  );
}
