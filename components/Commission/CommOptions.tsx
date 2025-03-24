import { CommissionData, CommissionType } from "@/types/commission";
import React, { ChangeEvent } from "react";
import TypedText from "../Utils/TypedText";
import PricePreview from "./PricePreview";

const CommOptions = ({
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
    <div className="border-2 truncate p-4 w-full transition-all duration-150 hover:bg-black/50 backdrop-blur-md bg-black/40 block row-span-2">
      <TypedText className="font-extrabold" strings={["OPTIONS"]} />

      <div className="md:mx-1 mb-4 mt-4 flex flex-col">
        <label htmlFor="type" className="text-sm/snug">
          Commission type <span className="text-red-500">*</span>
        </label>
        <select
          id="type"
          name="type"
          required
          value={formData.type}
          onChange={handleChange}
          className={`bg-[#e8f0fe] p-2 mt-1 h-9 shadow-inner border border-slate-300 rounded w-full hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300
            ${formData.type ? "text-slate-950" : "text-slate-500"}`}
        >
          <option
            disabled
            className="text-slate-500"
            value={CommissionType.none}
          >
            select comm type
          </option>
          <option value={CommissionType.icon}>Icon</option>
          <option value={CommissionType.full}>Full</option>
          <option value={CommissionType.reference}>Reference Sheet</option>
          <option value={CommissionType.sketchpage}>Sketch Page</option>
        </select>
      </div>

      <div
        className="md:mx-1 mb-4 flex flex-
      col"
      >
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
              className="accent-blue-500 ml-2 "
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

      <div className="md:mx-1 mb-4 flex flex-col">
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

      <PricePreview price={formData.estimatedPricing} />
    </div>
  );
};

export default CommOptions;
