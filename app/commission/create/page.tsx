"use client";

import CommOptions from "@/components/Commission/CommOptions";
import CommTypeExample from "@/components/Commission/CommTypeExample";
import PersonalInfo from "@/components/Commission/PersonalInfo";
import SmallTOS from "@/components/Commission/SmallTOS";
import Summary from "@/components/Commission/Summary";
import {
  ICON_PRICE,
  FULL_PRICE,
  REFERENCE_PRICE,
  SKETCHPAGE_PRICE,
  EXTRA_CHARACTER_PRICE,
  BACKGROUND_PRICE,
  COMPLEX_COUNT,
  COMPLEX_FEE,
} from "@/constants/Prices";
import { createTrelloCard } from "@/services/TrelloService";
import { CommissionData, CommissionType } from "@/types/commission";
import { createTrelloCardPayload } from "@/types/trello";
import React, { ChangeEvent, useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState<CommissionData>({
    email: "",
    name: "",
    type: CommissionType.none,
    background: false,
    characters: 1,
    estimatedPricing: 0,
    reference: "",
    contact: "",
    platform: "",
  });

  const getPriceBasedOnType = (type: CommissionType) => {
    switch (type) {
      case CommissionType.icon:
        return ICON_PRICE;
      case CommissionType.full:
        return FULL_PRICE;
      case CommissionType.reference:
        return REFERENCE_PRICE;
      case CommissionType.sketchpage:
        return SKETCHPAGE_PRICE;
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

    if (event.target.name === "type" && newData.background) {
      if (event.target.value === CommissionType.reference) {
        newData.background = false;
      }
    }

    if (newData.type !== CommissionType.none) {
      newData.estimatedPricing =
        getPriceBasedOnType(newData.type) +
        (newData.characters - 1) * EXTRA_CHARACTER_PRICE +
        (newData.background
          ? newData.type === CommissionType.icon
            ? BACKGROUND_PRICE / 2
            : BACKGROUND_PRICE
          : 0) +
        (newData.characters >= COMPLEX_COUNT ? COMPLEX_FEE : 0);
    }
    setFormData(newData);

    console.log(newData);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createTrelloCard(createTrelloCardPayload(formData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-[57px] w-screen">
        <form
          className="grid gap-2 min-h-[calc(100vh-80px)] xl:grid-cols-[3fr_2fr_2fr] grid-rows-4 mx-10 md:mx-40"
          onSubmit={handleSubmit}
        >
          {/* examples */}
          <CommTypeExample className="row-span-2" formData={formData} />

          {/* summary */}
          <Summary formData={formData} />

          {/* userInformation */}
          <PersonalInfo formData={formData} handleChange={handleChange} />

          {/* comm options */}
          <CommOptions formData={formData} handleChange={handleChange} />

          {/* smoltos */}
          <SmallTOS />
        </form>
      </div>
    </>
  );
};

export default Page;
