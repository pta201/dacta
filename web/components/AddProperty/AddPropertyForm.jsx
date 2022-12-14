import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { PropertyAttributeInput } from "./PropertyAttributeInput";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { PropertyTypeSelect } from "./PropertyTypeSelect";
import { PROPERTY_TYPE } from "../../const/property-type";
import { PROPERTY_ATTRIBUTE } from "../../const/property-attribute";
import { propertyApi } from "../../apiClient/endpoints/property";
import { ImageInput } from "./ImageInput";
export const AddPropertyForm = () => {
  const { control, register, handleSubmit, setValue } = useForm({
    defaultValues: {
      property: {
        name: "",
        address: "",
        property_type_id: PROPERTY_TYPE[0].id,
      },
      attributes: [],
      images: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "attributes",
  });
  const onSubmit = async (values) => {
    const { images, property, attributes } = values;
    const propertyRes = await propertyApi.post({
      property,
      attributes,
    });
    // const { id: property_id } = propertyRes;
    // attributes.forEach((attribute) =>
    //   property_attribute_Api.post({
    //     property_id,
    //     ...attribute,
    //   })
    // );
    // Post images
    // const formData = new FormData();
    // for (let i = 0; i < images.length; i++) {
    //   formData.append(`image`, images[i], images[i].name);
    // }
    // const imageRes = imageApi.post(formData, property_id);
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Tên tài sản:</FormLabel>
        <Input {...register("property.name")} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Địa chỉ:</FormLabel>
        <Textarea {...register("property.address")} />
      </FormControl>
      <FormControl>
        <FormLabel>Ảnh tài sản:</FormLabel>
        <ImageInput
          register={{ ...register("images") }}
          setValue={setValue}
          name={"images"}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Loại tài sản:</FormLabel>
        <Controller
          name="property.property_type_id"
          control={control}
          render={({ field }) => (
            <PropertyTypeSelect {...field} propertyTypes={PROPERTY_TYPE} />
          )}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Các thuộc tính:</FormLabel>
        <div className="flex flex-col gap-4">
          {fields.map((field, index) => (
            <PropertyAttributeInput
              key={field.id}
              {...register(`attributes.${index}`)}
              register={register}
              index={index}
              onRemove={() => remove(index)}
              attributes={PROPERTY_ATTRIBUTE}
            />
          ))}
          <Button
            type="button"
            variant={"outline"}
            colorScheme="blue"
            onClick={() =>
              append({
                attributeId: "1",
                value: "",
              })
            }
          >
            Thêm thuộc tính
          </Button>
        </div>
      </FormControl>
      <Button type="submit" colorScheme={"teal"}>
        Submit
      </Button>
    </form>
  );
};
