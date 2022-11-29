import React from "react";

export const Image = ({ src, onRemove }) => {
  return (
    <div className="flex flex-col gap-1">
      <img src={src} className="w-[100px] h-[100px] object-contain" />
      <div className="" onClick={onRemove}>
        Remove
      </div>
    </div>
  );
};
