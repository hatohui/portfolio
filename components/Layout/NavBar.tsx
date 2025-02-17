"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [hamburger, setHamburger] = useState(false);
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  const paths = [
    { name: "HOME", path: "/" },
    { name: "GALLERY", path: "/gallery" },
    { name: "COMMISSION", path: "/commission" },
    { name: "CONTACT", path: "/contact" },
  ];

  const controlNavbar = useCallback(() => {
    const scrollY = window.scrollY;
    if (!hamburger) {
      if (scrollY > lastScrollY.current && show) {
        setShow(false);
      } else if (scrollY < lastScrollY.current && !show) {
        setShow(true);
      }
    }
    lastScrollY.current = scrollY;
  }, [show, hamburger]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [show, controlNavbar]);

  useEffect(() => {
    setHamburger(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 select-none right-0 z-[100] min-h-[57px] w-full overflow-hidden p-4 bg-gradient-to-t from-transparent via-[#2a2640]/60 to-[#1b1626]/80 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${hamburger ? "h-full" : ""}`}
    >
      {/* Desktop Nav */}
      <div className="mx-auto justify-center items-center gap-2 hidden md:flex">
        {paths.map(({ name, path }) => {
          const isActive = pathname === path;
          const isHovered = hovered === path;
          return (
            <Link
              key={path}
              href={path}
              onMouseEnter={() => setHovered(path)}
              onMouseLeave={() => setHovered(null)}
              className="px-2 relative overflow-hidden group transition-all duration-700"
            >
              <span
                className={`absolute inset-0 bg-slate-100 duration-700 ease-out ${
                  isActive && (!hovered || isHovered) ? "w-full" : "w-0"
                } ${!isActive && "group-hover:w-full"}`}
              ></span>
              <span
                className={`relative font-sans duration-200 font-semibold ${
                  isActive && (!hovered || isHovered)
                    ? "text-slate-950"
                    : "group-hover:text-slate-900"
                }`}
              >
                {name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex justify-end">
        <button
          aria-label="Toggle menu"
          aria-expanded={hamburger}
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

      {/* Mobile Dropdown */}
      <div
        className={`absolute inset-x-0 top-[57px] md:hidden h-[calc(100vh-57px)] transition-all duration-300 backdrop-blur-sm bg-gradient-to-b from-transparent to-black/10 ${
          hamburger
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none max-h-0"
        }`}
      >
        <div className="flex flex-col items-center text-center justify-center transition-colors pt-8">
          {paths.map(({ name, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                onClick={() => setHamburger(false)}
                className={`p-3 w-full duration-200 ${
                  isActive ? "bg-slate-100 text-black" : "hover:bg-slate-500"
                }`}
              >
                {name}
              </Link>
            );
          })}
          <div className="absolute p-3 bottom-0 flex justify-evenly gap-5 text-sm">
            <span>© hatohui</span>
            <span>Hi</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
