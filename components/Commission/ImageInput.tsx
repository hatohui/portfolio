import { CommissionData } from "@/types/commission";
import React, { ChangeEvent } from "react";

type ImageInputProps = {
  setFormData: React.Dispatch<React.SetStateAction<CommissionData>>;
};

const ImageInput = ({ setFormData }: ImageInputProps) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        referenceSource: file,
      }));
    }
  };

  return (
    <div className="md:mx-1 pb-2 flex flex-col">
      <label className="text-sm/snug">Reference Upload</label>
      <input
        name="referenceSource"
        type="file"
        accept="image/*"
        className="mt-2"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageInput;
