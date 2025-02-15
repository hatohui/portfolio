"use client";

import React, { ChangeEvent, useState } from "react";
import TypedText from "../TypedText";
import { CommissionData, CommissionType } from "@/types/commission";
import ImageInput from "./ImageInput";
import { CreateCardPayload, createTrelloCardPayload } from "@/types/trello";
import { createTrelloCard } from "@/services/TrelloService";

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
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const newData = { ...formData, [event.target.name]: event.target.value };
    newData.estimatedPricing =
      getPriceBasedOnType(newData.type) +
      (newData.characters - 1) * 60 +
      (newData.background ? 30 : 0);
    console.log(newData);

    setFormData(newData);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createTrelloCard(createTrelloCardPayload(formData));
  };

  return (
    <div
      className={`border-2 truncate p-4 w-full backdrop-blur-sm md:col-span-2 lg:col-span-2 xl:col-span-1 bg-black/5 lg:row-span-3 ${
        mobile ? "hidden xl:block" : "block xl:hidden"
      }`}
    >
      <div className="font-extrabold truncate">
        {isFirstLoad ? (
          "COMMISSION FORM"
        ) : (
          <TypedText
            strings={["COMMISSION FORM"]}
            typeSpeed={10}
            onComplete={() => setIsFirstLoad(true)}
          />
        )}
      </div>

      {/*Form starts */}
      <form className="pt-4 truncate" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="md:mx-1 pb-2 flex flex-col">
          <label htmlFor="email" className="text-sm/snug">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-[#e8f0fe] p-2 mt-2 text-slate-950 h-9 shadow-inner 
                 border border-slate-300 rounded w-full 
                 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                 transition-all duration-300"
          />
        </div>

        {/* Name Field */}
        <div className="md:mx-1 pb-2 flex flex-col">
          <label htmlFor="name" className="text-sm/snug">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-[#e8f0fe] p-2 mt-2 text-slate-950 h-9 shadow-inner 
                 border border-slate-300 rounded w-full 
                 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                 transition-all duration-300"
          />
        </div>

        {/* Commission Type */}
        <div className="md:mx-1 pb-2 flex flex-col">
          <label htmlFor="type" className="text-sm/snug">
            Commission type <span className="text-red-500">*</span>
          </label>
          <select
            name="type"
            id="type"
            value={formData.type}
            onChange={handleChange}
            className="bg-[#e8f0fe] p-2 mt-2 text-slate-950 h-9 shadow-inner 
                 border border-slate-300 rounded w-full 
                 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                 transition-all duration-300"
          >
            <option value="" className="text-slate-500">
              Select
            </option>
            <option value={CommissionType.icon}>Icon</option>
            <option value={CommissionType.full}>Full</option>
            <option value={CommissionType.reference}>Reference Sheet</option>
            <option value={CommissionType.sketchpage}>Sketch Page</option>
          </select>
        </div>

        {/* Number of Characters */}
        <div className="md:mx-1 pb-2 flex flex-col">
          <label className="text-sm/snug">Number of Character(s)</label>
          <input
            name="characters"
            type="number"
            value={formData.characters}
            onChange={handleChange}
            min={1}
            max={6}
            className="bg-[#e8f0fe] p-2 mt-2 text-slate-950 h-9 shadow-inner 
                 border border-slate-300 rounded w-full 
                 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                 transition-all duration-300"
          />
        </div>
        {/* Image input */}
        <ImageInput setFormData={setFormData} />

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-12 py-3 border-2 border-slate-200 text-slate-100
               bg-transparent relative group transition-all duration-700 transform group-hover:scale-90"
          >
            <span className="absolute inset-0 bg-slate-100 duration-700 ease-out group-hover:w-full w-0"></span>
            <span className="relative font-sans duration-200 font-semibold group-hover:text-slate-900">
              Submit
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
