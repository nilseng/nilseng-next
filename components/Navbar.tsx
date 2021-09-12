import Link from "next/link";
import { useState } from "react";

import { INavPopoverProps, NavPopover } from "./NavPopover";
import { AnimatedLogo } from "./AnimatedLogo";

const randomFunPopover: INavPopoverProps = {
  buttonText: "Random fun",
  linkGroups: [
    {
      id: "3D",
      links: [
        {
          id: "spheres",
          name: "Spheres",
          link: "/3D/spheres",
        },
      ],
    },
  ],
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>();

  return (
    <nav className="flex items-center flex-wrap p-4">
      <Link href="/">
        <a className="flex items-center">
          <AnimatedLogo color="#f8f9fa" height="2rem" width="2rem" />
          <span className="font-light text-xl text-gray-50 mx-4">
            Teodor&apos;s Portfolio
          </span>
        </a>
      </Link>
      <button
        className="inline-flex p-3 rounded lg:hidden text-gray-50 ml-auto hover:text-white outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          isMenuOpen ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/blog">
            <a className="text-sm lg:inline-flex lg:w-auto w-full px-6 py-2 rounded text-gray-50 font-light items-center justify-center hover:text-white">
              Blog
            </a>
          </Link>
          <Link href="/">
            <a className="text-sm lg:inline-flex lg:w-auto w-full px-6 py-2 rounded text-gray-50 font-light items-center justify-center hover:text-white ">
              Projects
            </a>
          </Link>
          <NavPopover {...randomFunPopover} />
          <Link href="/about-you">
            <a className="text-sm lg:inline-flex lg:w-auto w-full px-6 py-2 rounded text-gray-50 font-light items-center justify-center hover:text-white">
              About you
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
