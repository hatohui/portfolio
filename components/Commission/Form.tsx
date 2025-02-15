"use client";

import React, { useState } from "react";
import TypedText from "../TypedText";
import { CommissionData, CommissionType } from "@/types/commission";

const Form = ({ mobile }: { mobile: boolean }) => {
  const [formData, setFormData] = useState<CommissionData>({
    email: "",
    name: "",
    type: CommissionType.icon,
    background: false,
    characters: 1,
  });

  const handleChange = () => {
    setFormData(formData);
  };

  return (
    <div
      className={`border-2 p-4 w-full h-full backdrop-blur-sm md:col-span-2 lg:col-span-1 bg-black/5 lg:row-span-3 ${
        mobile ? "hidden lg:block" : "block lg:hidden"
      }`}
    >
      <div className="font-extrabold">
        <TypedText strings={["COMMISSION FORM"]} typeSpeed={10} />
      </div>
      <form className="pt-4">
        <div className="md:mx-1">
          <label htmlFor="email" className="text-sm/snug">
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-black/10 h-7 shadow-inner border border-slate-300 w-full"
          />
        </div>
        <div className="md:mx-1">
          <label className="text-sm/snug"> Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="bg-black/10 h-7 shadow-inner border border-slate-300 w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
