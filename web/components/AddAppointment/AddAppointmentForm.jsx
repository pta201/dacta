import React from "react";
import {
  Select,
  FormControl,
  FormLabel,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { OverAllInfo } from "./OverAllInfo";
import { useForm } from "react-hook-form";
import { appointmentApi } from "../../apiClient/endpoints";
export const AddAppointmentForm = () => {
  const { control, register, handleSubmit, watch } = useForm({
    defaultValues: {
      propertyId: 1,
      sellerId: 1,
      buyerId: 3,
      date: new Date(Date.now()).getTime(),
    },
  });
  const onSubmit = async (data) => {
    const { date } = data;
    const timestamp = new Date(date).getTime();
    const res = await appointmentApi.post({
      ...data,
      date: timestamp,
    });
  };
  return (
    <form
      className="flex flex-col gap-4 w-[500px] border border-gray-600 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <OverAllInfo register={register} watch={watch} />
      <FormControl>
        <FormLabel>Pick your date:</FormLabel>
        <Input
          type="datetime-local"
          {...register("date", { required: true })}
        />
      </FormControl>
      <Button type="submit" variant={"solid"} colorScheme="teal">
        Make appointment
      </Button>
    </form>
  );
};
