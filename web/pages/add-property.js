import { Text } from "@chakra-ui/react";
import { AddPropertyForm } from "../components/AddProperty";
export default function AddProperty() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="border border-gray-600 p-4 w-[500px]">
        <Text textAlign={"center"} fontSize="xl">
          Thêm tài sản
        </Text>
        <AddPropertyForm />
      </div>
    </div>
  );
}
