import { CommissionData } from "@/types/commission";
import React, { ChangeEvent } from "react";
import TypedText from "../Utils/TypedText";
import DiscordIcon from "../Icons/DiscordIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import TelegramIcon from "../Icons/TelegramIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import Link from "next/link";

const PersonalInfo = ({
  formData,
  handleChange,
}: {
  formData: CommissionData;
  handleChange: (
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => void;
}) => {
  return (
    <div className="border-2 truncate p-4 w-full backdrop-blur-md bg-black/40 block row-span-4 transition-all duration-150 hover:bg-black/50">
      <TypedText className="font-extrabold" strings={["PERSONAL INFO"]} />
      <div className="text-wrap mt-4 mb-3 text-sm text-left text-yellow-500">
        * You can leave commission details and reference url empty if you want
        to directly send those to me via one of my socials below.
      </div>
      <div className="md:mx-1 mt-4 mb-3 flex flex-col">
        <label htmlFor="email" className="text-sm/snug">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          placeholder="example@domain.com"
          onChange={handleChange}
          autoComplete="email"
          className="bg-[#e8f0fe] p-2 mt-1 text-slate-950 h-9 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
        />
      </div>
      <div className="md:mx-1 mb-3 flex flex-col">
        <label htmlFor="name" className="text-sm/snug">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="ex: Hatohui"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          className="bg-[#e8f0fe] p-2 mt-1 text-slate-950 h-9 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
        />
      </div>
      <div className="md:mx-1 mb-3 flex flex-col">
        <label htmlFor="name" className="text-sm/snug">
          Contacts Platform <span className="text-red-500">*</span>
        </label>
        <input
          id="platform"
          name="platform"
          type="text"
          required
          placeholder="ex: Discord"
          value={formData.platform}
          onChange={handleChange}
          className="bg-[#e8f0fe] p-2 mt-1 text-slate-950 h-9 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
        />
      </div>
      <div className="md:mx-1 mb-3 flex flex-col">
        <label htmlFor="name" className="text-sm/snug">
          Handle <span className="text-red-500">*</span>
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          placeholder="ex: @Hatohui"
          value={formData.contact}
          onChange={handleChange}
          className="bg-[#e8f0fe] p-2 mt-1 text-slate-950 h-9 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
        />
      </div>
      <div className="md:mx-1 mb-3 flex flex-col">
        <label htmlFor="reference" className="text-sm/snug">
          Reference Link
        </label>
        <input
          id="reference"
          name="reference"
          type="url"
          value={formData.reference}
          placeholder="https://this.img/arandomstring"
          onChange={handleChange}
          autoComplete="url"
          className="bg-[#e8f0fe] p-2 mt-1 text-slate-950 h-9 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
        />
      </div>
      <div className="md:mx-1 mb-3 flex flex-col">
        <label htmlFor="idea" className="text-sm/snug">
          Commission Details
        </label>
        <textarea
          id="idea"
          name="idea"
          value={formData.idea}
          onChange={handleChange}
          autoComplete="text"
          minLength={30}
          placeholder="Describe your character, pose, and any special details here!"
          className="bg-[#e8f0fe] thin-scrollbar resize-none p-2 mt-1 text-slate-950 h-28 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
        />
      </div>
      <div className="md:mx-1 mt-2 pb-2 flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="accent-blue-500"
        />
        <label htmlFor="terms" className="text-sm/snug ml-2">
          I accept the{" "}
          <Link
            href="/commission/tos"
            className="hover:text-blue-700 text-blue-300"
          >
            terms of services
          </Link>
          <span className="text-red-500"> *</span>
        </label>
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="px-12 py-3 border-2 border-slate-200 text-slate-100 bg-transparent relative group transition-all duration-700 transform group-hover:scale-90"
        >
          <span className="absolute inset-0 bg-slate-100 duration-700 ease-out group-hover:w-full w-0"></span>
          <span className="relative font-sans duration-200 font-semibold group-hover:text-slate-900">
            Submit
          </span>
        </button>
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <DiscordIcon />
        <TelegramIcon />
        <TwitterIcon />
        <FacebookIcon />
      </div>
    </div>
  );
};

export default PersonalInfo;
