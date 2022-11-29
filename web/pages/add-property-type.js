import { Text } from "@chakra-ui/react";
import { AddPropertyType } from "../components/AddPropertyType";

export default function AddPropertyTypePage() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="border border-gray-600 p-4 w-[500px]">
        <Text textAlign={"center"} fontSize="xl">
          Thêm loại tài sản
        </Text>
        <AddPropertyType />
      </div>
    </div>
  );
}
