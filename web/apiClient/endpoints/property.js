import { axiosClient } from "../axiosClient";
export const propertyApi = {
  post: async (params) => {
    const url = "/property";
    return await axiosClient.post(url, { ...params });
  },
};
