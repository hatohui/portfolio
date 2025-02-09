"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>();
  const [hamburger, setHamburger] = useState(false);
  const paths = [
    { name: "HOME", path: "/" },
    { name: "GALLERY", path: "/gallery" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="p-4 shadow-lg h-[57px] bg-black">
      <div className="mx-auto justify-center items-center gap-2 hidden md:flex">
        {paths.map(({ name, path }) => (
          <Link
            key={path}
            href={path}
            onMouseEnter={() => setHovered(path)}
            onMouseLeave={() => setHovered(null)}
            className={`px-2 relative overflow-hidden group transition-all duration-700`}
          >
            <span
              className={`absolute inset-0 bg-slate-100 duration-700 ease-out w-0 ${
                pathname === path
                  ? !hovered || pathname === hovered
                    ? "w-full"
                    : ""
                  : "group-hover:w-full"
              }`}
            ></span>
            <span
              className={`relative font-sans duration-200 font-semibold  ${
                pathname === path
                  ? !hovered || pathname === hovered
                    ? "text-slate-950"
                    : ""
                  : "group-hover:text-slate-900"
              }`}
            >
              {name}
            </span>
          </Link>
        ))}
      </div>
      {/* mobile here */}
      <div className="flex justify-end">
        <button
          className="md:hidden mx-1"
          onClick={() => setHamburger(!hamburger)}
        >
          {!hamburger ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      {hamburger && (
        <div
          className={`absolute inset-x-0 overflow-hidden bg-gray-200 top-[57px] transition-all ease-out max-h-0 duration-500 ${
            hamburger ? "max-h-screen" : ""
          }`}
        >
          <div className="h-screen"> Hello world</div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
