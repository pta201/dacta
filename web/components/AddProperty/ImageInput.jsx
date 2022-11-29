import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Image } from "./Image";
import { getFileUrl } from "../../utils/get-file-url";

export const ImageInput = ({ register, setValue, name }) => {
  const [files, setFiles] = useState();
  const handleChange = (e) => {
    const newFiles = e.target.files;
    setFiles(newFiles);
  };
  const handleRemove = (fileToRemove) => {
    const dt = new DataTransfer();
    for (let i = 0; i < files.length; i++) {
      if (files[i] != fileToRemove) dt.items.add(files[i]);
    }
    setValue(name, dt.files);
    setFiles(dt.files);
  };

  const renderPreview = () => {
    const content = [];
    for (let i = 0; i < files.length; i++) {
      content.push(
        <Image
          src={getFileUrl(files[i])}
          onRemove={() => handleRemove(files[i])}
        />
      );
    }
    return content;
  };
  return (
    <div>
      <Input type="file" {...register} multiple onChange={handleChange} />
      <div className="flex gap-2 flex-wrap">{files && renderPreview()}</div>
    </div>
  );
};
