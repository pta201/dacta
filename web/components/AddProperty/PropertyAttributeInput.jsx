import React from "react";
import { Button, Input, Select, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
export const PropertyAttributeInput = (props) => {
  const { onRemove, attributes, register, index } = props;
  return (
    <div className="flex gap-4 items-end" {...props}>
      <div className="flex flex-col w-[150px]">
        <Text>Loại thuộc tính</Text>
        <Select
          _selected={""}
          {...register(`attributes.${index}.attribute_id`)}
        >
          {attributes.map((attribute) => (
            <option value={attribute.id}>{attribute.name}</option>
          ))}
        </Select>
      </div>
      <div className="flex-1">
        <Text>Giá trị thuộc tính</Text>
        <Input type="text" {...register(`attributes.${index}.value`)} />
      </div>

      <Button type="button" onClick={onRemove} colorScheme="red">
        Remove
      </Button>
    </div>
  );
};
