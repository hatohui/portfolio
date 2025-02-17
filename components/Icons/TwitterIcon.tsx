import { TWITTER_URL } from "@/constants/Socials";
import React from "react";

const TwitterIcon = () => {
  return (
    <a
      href={TWITTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center border-2 border-slate-200 text-slate-100 bg-transparent rounded-full relative group transition-all duration-700 transform group-hover:scale-90 hover:bg-slate-100"
    >
      <span className="relative font-sans duration-200 font-semibold group-hover:text-slate-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
        </svg>
      </span>
    </a>
  );
};

export default TwitterIcon;
