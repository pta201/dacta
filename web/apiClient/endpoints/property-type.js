import { axiosClient } from "../axiosClient";
export const property_typeApi = {
  getAll: async () => {
    const url = "/property-type";
    axiosClient.get(url);
  },
  post: async (params) => {
    const url = "/property-type";
    axiosClient.post(url, params);
  },
};
