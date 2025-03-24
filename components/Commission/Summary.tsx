import { CommissionData, CommissionType } from "@/types/commission";
import React from "react";
import TypedText from "../Utils/TypedText";

const commissionTypeMap: Record<CommissionType, string> = {
  [CommissionType.icon]: "Icon",
  [CommissionType.full]: "Full Illustration",
  [CommissionType.sketchpage]: "Sketch Page",
  [CommissionType.reference]: "Reference Sheet",
  [CommissionType.other]: "Other",
  [CommissionType.none]: "N/A",
};

const Summary = ({ formData }: { formData: CommissionData }) => {
  const getDisplayValue = (value: string | number | boolean | undefined) => {
    if (value === undefined || value === "" || value === null) {
      return <span className="text-rose-500">N/A</span>;
    }
    return (
      <span className="text-green-500">
        {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
      </span>
    );
  };

  return (
    <div className="border-2 truncate transition-all duration-150 hover:bg-black/50 p-4 w-full h-full backdrop-blur-md bg-black/40 block row-span-3">
      <TypedText className="font-extrabold" strings={["SUMMARY"]} />
      <div className="h-1 bg-white/35 rounded-lg mt-2 mb-1"></div>

      <div className="font-semibold mt-4">Personal Information:</div>
      <div className="flex flex-col gap-1 mt-1">
        <div>
          <span>Email: </span>
          {getDisplayValue(formData.email)}
        </div>
        <div>
          <span>Name: </span>
          {getDisplayValue(formData.name)}
        </div>
        <div>
          <span>Contact: </span>
          {getDisplayValue(formData.contact)}
        </div>
        <div>
          <span>Platform: </span>
          {getDisplayValue(formData.platform)}
        </div>
      </div>

      <div className="h-1 bg-white/35 rounded-lg mt-2 mb-1"></div>
      <div className="font-semibold mt-4">Commission Details:</div>
      <div className="flex flex-col gap-1 mt-1">
        <div>
          <span>Commission Type: </span>
          {formData.type === CommissionType.none ? (
            <span className="text-rose-500">N/A</span>
          ) : (
            <span className="text-green-500">
              {commissionTypeMap[formData.type]}
            </span>
          )}
        </div>

        <div>
          <span>Reference: </span>
          {formData.reference ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
              href={formData.reference}
            >
              [ LINK ]
            </a>
          ) : (
            <span className="text-rose-500">N/A</span>
          )}
        </div>

        <div>
          <span>Background: </span>
          {getDisplayValue(formData.background)}
        </div>

        <div>
          <span>Number of Characters: </span>
          {getDisplayValue(formData.characters)}
        </div>

        <div className="h-1 bg-white/35 rounded-lg mt-2 mb-1"></div>
        <div className="flex flex-col">
          <span>Idea: </span>
          <p className="text-wrap thin-scrollbar h-32">
            {getDisplayValue(formData.idea)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
