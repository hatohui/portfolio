import { TELEGRAM_URL } from "@/constants/Socials";
import React from "react";

const Telegram = () => {
  return (
    <a
      href={TELEGRAM_URL}
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
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.64 8.64l-1.68 8.04c-.12.54-.42.66-.84.42l-2.34-1.74-1.14 1.08c-.12.12-.24.24-.48.24l.18-2.52 4.62-4.14c.18-.18-.06-.3-.24-.18l-5.7 3.6-2.46-.78c-.54-.18-.54-.54.12-.78l9.54-3.66c.42-.18.78.06.66.72z" />
        </svg>
      </span>
    </a>
  );
};

export default Telegram;
