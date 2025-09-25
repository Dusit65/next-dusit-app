"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import IcHome from "./../app/icons/sidebar/home.png";
import IcAboutme from "./../app/icons/sidebar/aboutme.png";
import IcEduexp from "./../app/icons/sidebar/eduexp.png";
import IcSpec from "./../app/icons/sidebar/spec.png";
import IcProjects from "./../app/icons/sidebar/projects.png";
import IcSkills from "./../app/icons/sidebar/skills.png";
import IcContact from "./../app/icons/sidebar/contactme.png";

import Orhome from "./../app/icons/sidebar/Orhome.png";
import OrAboutme from "./../app/icons/sidebar/Oraboutme.png";
import OrEduexp from "./../app/icons/sidebar/Oreduexp.png";
import OrSpec from "./../app/icons/sidebar/Orspec.png";
import OrProject from "./../app/icons/sidebar/Orprojects.png";
import OrSkills from "./../app/icons/sidebar/Orskills.png";
import OrContact from "./../app/icons/sidebar/Orcontact.png";

const menu = [
  { href: "/", label: "Home", iconDefault: IcHome, iconActive: Orhome },
  { href: "/aboutme", label: "About Me", iconDefault: IcAboutme, iconActive: OrAboutme },
  { href: "/eduexp", label: "Education & Experience", iconDefault: IcEduexp, iconActive: OrEduexp },
  { href: "/spec", label: "Specializations", iconDefault: IcSpec, iconActive: OrSpec },
  { href: "/projects", label: "Projects", iconDefault: IcProjects, iconActive: OrProject },
  { href: "/skills", label: "Skills", iconDefault: IcSkills, iconActive: OrSkills },
  { href: "/contactme", label: "Contact Me", iconDefault: IcContact, iconActive: OrContact },
];

export default function SideBar() {
  const pathname = usePathname();

  return (
    <nav className="border border-neutral-600 rounded-3xl p-2 w-12 flex flex-col items-center justify-center">
      {menu.map(({ href, label, iconDefault, iconActive }) => {
        const isActive = pathname === href;
        return (
          <Link key={href} href={href}>
            <Image
              src={isActive ? iconActive : iconDefault}
              alt={label}
              width={20}
              height={20}
              className="my-4 transition duration-200 cursor-pointer hover:opacity-50"
            />
          </Link>
        );
      })}
    </nav>
  );
}
