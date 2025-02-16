"use client";

import React, { ChangeEvent, useState } from "react";
import TypedText from "../TypedText";
import { CommissionData, CommissionType } from "@/types/commission";
import { createTrelloCardPayload } from "@/types/trello";
import { createTrelloCard } from "@/services/TrelloService";
import Link from "next/link";

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
      className={`border-2 truncate p-4 w-full backdrop-blur-sm md:col-span-2 lg:col-span-2 xl:col-span-1 bg-black/5 lg:row-span-3 ${
        mobile ? "hidden xl:block" : "block xl:hidden"
      }`}
    >
      <div className="font-extrabold truncate">
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
            {" "}
            <TypedText
              strings={["COMMISSION FORM"]}
              typeSpeed={10}
              onComplete={() => setIsFirstLoad(true)}
            />
          </>
        )}
      </div>

      {/* Form starts */}
      <form className="pt-4 truncate" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="md:mx-1 pb-2 flex flex-col">
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
            className="bg-[#e8f0fe] p-2 mt-2 text-slate-950 h-9 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
          />
        </div>

        {/* Name Field */}
        <div className="md:mx-1 pb-2 flex flex-col">
          <label htmlFor="name" className="text-sm/snug">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Bryan"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            className="bg-[#e8f0fe] p-2 mt-2 text-slate-950 h-9 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
          />
        </div>

        {/* Commission Type */}
        <div className="md:mx-1 pb-2 flex flex-col">
          <label htmlFor="type" className="text-sm/snug">
            Commission type <span className="text-red-500">*</span>
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="bg-[#e8f0fe] p-2 mt-2 text-slate-950 h-9 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
          >
            <option value={CommissionType.icon}>Icon</option>
            <option value={CommissionType.full}>Full</option>
            <option value={CommissionType.reference}>Reference Sheet</option>
            <option value={CommissionType.sketchpage}>Sketch Page</option>
          </select>
        </div>

        {/* Background Option */}
        <div className="md:mx-1 pb-2 flex flex-col">
          <label className="text-sm/snug">Background?</label>
          <div className="flex items-center gap-4 mt-2">
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

        {/* Number of Characters */}
        <div className="md:mx-1 pb-2 flex flex-col">
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
            className="bg-[#e8f0fe] p-2 mt-2 text-slate-950 h-9 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
          />
        </div>

        {/*Reference area  */}
        <div className="md:mx-1 pb-2 flex flex-col">
          <label htmlFor="name" className="text-sm/snug">
            Reference Link
          </label>
          <input
            id="reference"
            name="reference"
            type="text"
            value={formData.reference}
            placeholder="https://this.img/arandomstring"
            onChange={handleChange}
            autoComplete="name"
            className="bg-[#e8f0fe] p-2 mt-2 text-slate-950 h-9 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
          />
        </div>

        {/*Reference area  */}
        <div className="md:mx-1 pb-2 flex flex-col">
          <label htmlFor="name" className="text-sm/snug">
            Commission Details
          </label>
          <textarea
            id="idea"
            name="idea"
            value={formData.idea}
            onChange={handleChange}
            autoComplete="name"
            placeholder="Describe your character, pose, and any special details here!"
            className="bg-[#e8f0fe] p-2 mt-2 text-slate-950 h-28 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
          />
        </div>
        {/* Terms and Conditions */}
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
            <Link href="commission/tos" className="hover:text-blue-300">
              terms and conditions
            </Link>
            <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Submit Button */}
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
      </form>
      {/* Social Buttons */}
      <div className="flex justify-center mt-4 gap-4">
        <a
          href="https://x.com/_Hatohui"
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
        <a
          href="https://t.me/Hatohui"
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
        <a
          href="https://discord.com/users/693853363942719588"
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
              <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.165-.393-.405-.874-.617-1.249a.077.077 0 00-.079-.037c-1.69.288-3.328.804-4.885 1.515a.07.07 0 00-.032.027C.533 9.045-.32 13.579.099 18.057a.082.082 0 00.031.056c2.052 1.507 4.045 2.422 5.992 3.029a.078.078 0 00.084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.105c-.652-.247-1.27-.548-1.872-.892a.077.077 0 01-.008-.13c.125-.094.25-.192.371-.291a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 01.079.009c.122.099.246.197.371.291a.077.077 0 01-.006.13 12.298 12.298 0 01-1.873.891.076.076 0 00-.04.106c.36.699.772 1.364 1.226 1.993a.077.077 0 00.084.028c1.957-.607 3.95-1.522 6.001-3.029a.077.077 0 00.031-.056c.5-5.177-.838-9.673-4.548-13.661a.061.061 0 00-.031-.027zM8.02 15.331c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.085 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.96 0c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.085 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" />
            </svg>
          </span>
        </a>
        <a
          href="https://www.facebook.com/hatohui.azul/"
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
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Form;
