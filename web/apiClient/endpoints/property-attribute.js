import { axiosClient } from "../axiosClient";
export const property_attribute_Api = {
  post: async (params) => {
    const url = "/property-attribute";
    axiosClient.post(url, params);
  },
};
