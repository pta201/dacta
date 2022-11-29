import { axiosClient } from "../axiosClient";
export const imageApi = {
  post: async (params, property_id) => {
    const url = `/image/${property_id}`;
    axiosClient.post(url, params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
