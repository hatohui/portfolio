"use client";

import React, { ChangeEvent, useState } from "react";
import TypedText from "../Utils/TypedText";
import { CommissionData, CommissionType } from "@/types/commission";
import { createTrelloCardPayload } from "@/types/trello";
import { createTrelloCard } from "@/services/TrelloService";
import Link from "next/link";
import TelegramIcon from "../Icons/TelegramIcon";
import DiscordIcon from "../Icons/DiscordIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import FacebookIcon from "../Icons/FacebookIcon";

const Form = ({ mobile }: { mobile: boolean }) => {
  const [formData, setFormData] = useState<CommissionData>({
    email: "",
    name: "",
    type: CommissionType.icon,
    background: false,
    characters: 1,
    estimatedPricing: 0,
  });
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(false);

  const getPriceBasedOnType = (type: CommissionType) => {
    switch (type) {
      case CommissionType.icon:
        return 40;
      case CommissionType.full:
        return 100;
      case CommissionType.reference:
        return 150;
      case CommissionType.sketchpage:
        return 200;
      default:
        return 0;
    }
  };

  const handleChange = (
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    let newData: CommissionData;
    if (event.target.name === "background") {
      newData = { ...formData, background: event.target.value === "true" };
    } else {
      newData = { ...formData, [event.target.name]: event.target.value };
    }
    newData.estimatedPricing =
      getPriceBasedOnType(newData.type) +
      (newData.characters - 1) * 60 +
      (newData.background
        ? newData.type === CommissionType.icon
          ? 15
          : 30
        : 0) +
      (newData.characters >= 3 ? 30 : 0);
    setFormData(newData);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await createTrelloCard(createTrelloCardPayload(formData));
    console.log(result);
  };

  return (
    <div
      className={`border-2 truncate p-4 w-full backdrop-blur-md md:col-span-2 lg:col-span-2 xl:col-span-1 bg-black/5 lg:row-span-3 ${
        mobile ? "hidden xl:flex xl:flex-col" : "block xl:hidden"
      }`}
    >
      <div className="font-extrabold truncate pb-2">
        {isFirstLoad ? (
          <div className="flex justify-between ">
            <div>COMMISSION FORM</div>
            {formData.estimatedPricing === 0 ? (
              ""
            ) : (
              <div className="text-slate-300">
                Est: ${formData.estimatedPricing}
              </div>
            )}
          </div>
        ) : (
          <>
            <TypedText
              strings={["COMMISSION FORM"]}
              typeSpeed={10}
              onComplete={() => setIsFirstLoad(true)}
            />
          </>
        )}
      </div>

      <form className="mt-4 thin-scrollbar  h-full" onSubmit={handleSubmit}>
        <div className="md:mx-1 mb-3 flex flex-col">
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
          <label htmlFor="type" className="text-sm/snug">
            Commission type <span className="text-red-500">*</span>
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="bg-[#e8f0fe] p-2 mt-1 text-slate-950 h-9 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
          >
            <option value={CommissionType.icon}>Icon</option>
            <option value={CommissionType.full}>Full</option>
            <option value={CommissionType.reference}>Reference Sheet</option>
            <option value={CommissionType.sketchpage}>Sketch Page</option>
          </select>
        </div>

        <div className="md:mx-1 mb-3 flex flex-col">
          <label className="text-sm/snug">Background?</label>
          <div className="flex items-center gap-4">
            <label
              htmlFor="background-no"
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                id="background-no"
                type="radio"
                name="background"
                value="false"
                checked={!formData.background}
                onChange={handleChange}
                className="accent-blue-500"
              />
              No
            </label>
            <label
              htmlFor="background-yes"
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                id="background-yes"
                type="radio"
                name="background"
                value="true"
                checked={formData.background}
                onChange={handleChange}
                className="accent-blue-500"
              />
              Yes
            </label>
          </div>
        </div>

        <div className="md:mx-1 mb-3 flex flex-col">
          <label htmlFor="characters" className="text-sm/snug">
            Number of Character(s)
          </label>
          <input
            id="characters"
            name="characters"
            type="number"
            value={formData.characters}
            onChange={handleChange}
            min={1}
            max={formData.type === CommissionType.full ? 6 : 2}
            autoComplete="off"
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
            placeholder="Describe your character, pose, and any special details here!"
            className="bg-[#e8f0fe] p-2 mt-1 text-slate-950 h-28 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
          />
        </div>

        <div className="md:mx-1 pb-2 flex items-center">
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
              href="commission/tos"
              className="hover:text-blue-700 text-blue-300"
            >
              terms and conditions
            </Link>
            <span className="text-red-500"> *</span>
          </label>
        </div>

        <div className="flex justify-center mt-3">
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
      </form>
    </div>
  );
};

export default Form;
