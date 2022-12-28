import React, { useEffect, useState } from "react";
import { Select, Text } from "@chakra-ui/react";
import { useBuyer } from "../../hooks/useBuyer";
import { useSeller } from "../../hooks/useSeller";

export const OverAllInfo = ({ buyer, seller, register, watch }) => {
  const { buyers } = useBuyer();
  const { sellers } = useSeller();
  const [curSeller, setCurSeller] = useState();
  const curSellerId = watch("sellerId");
  useEffect(() => {
    setCurSeller(sellers.find((seller) => seller.id == curSellerId));
  }, [curSellerId]);

  return (
    <div>
      <Text fontSize={"xl"} fontWeight="bold">
        Overall infos:
      </Text>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-between">
          <Text fontSize={"md"} fontWeight="bold" className="w-[200px]">
            Seller:
          </Text>
          <Select
            className="flex-1"
            {...register("sellerId")}
            // onChange={handleSellerChange}
          >
            {sellers?.map((seller) => (
              <option value={seller.id}>{seller.email}</option>
            ))}
          </Select>
          {/* <Text fontSize={"md"}>Dealer 1</Text> */}
        </div>
        <div className="flex gap-2 justify-between">
          <Text fontSize={"md"} fontWeight="bold" className="w-[200px]">
            Buyer:
          </Text>
          <Select className="flex-1" {...register("buyerId")}>
            {buyers?.map((buyer) => (
              <option value={buyer.id}>{buyer.email}</option>
            ))}
          </Select>
        </div>
        <div className="flex gap-2">
          <Text fontSize={"md"} fontWeight="bold" className="w-[200px]">
            Property name:
          </Text>
          <Select className="flex-1" {...register("propertyId")}>
            {curSeller &&
              curSeller["Property"]?.map((property) => (
                <option value={property.id}>{property.name}</option>
              ))}
          </Select>
        </div>
      </div>
    </div>
  );
};
