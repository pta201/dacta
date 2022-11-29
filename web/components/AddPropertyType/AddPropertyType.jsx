import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { ImageInput } from "../AddProperty/ImageInput.jsx";

export const AddPropertyType = () => {
  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      name: "",
      images: [],
    },
  });
  const onSubmit = async (values) => {
    console.log(values);
    // reset();
  };
  return (
    // <div>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <FormControl>
        <FormLabel>Tên loại tài sản:</FormLabel>
        <Input {...register("name")} type="text" />
      </FormControl>

      <div className="flex gap-2 justify-end -translate-x-2">
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </div>
    </form>
    // </div>
  );
};
