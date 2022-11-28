import React from "react";
import { Select } from "@chakra-ui/react";
export const PropertyTypeSelect = ({ propertyTypes, ...props }) => {
  return (
    <Select _selected={""} {...props}>
      {propertyTypes.map((property_type) => (
        <option key={property_type.id} value={property_type.id}>
          {property_type.name}
        </option>
      ))}
    </Select>
  );
};
