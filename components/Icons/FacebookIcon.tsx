import { FACEBOOK_URL } from "@/constants/Socials";
import React from "react";

const FacebookIcon = () => {
  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center border-2 border-slate-200 text-slate-100 bg-transparent rounded-full relative group transition-all duration-700 transform group-hover:scale-90 hover:bg-slate-100"
    >
      <span className="relative font-sans duration-200 font-semibold group-hover:text-slate-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
        </svg>
      </span>
    </a>
  );
};

export default FacebookIcon;
