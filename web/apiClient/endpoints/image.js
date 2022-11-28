import { axiosClient } from "../axiosClient";
export const imageApi = {
  post: async (params) => {
    const url = "/image";
    axiosClient.post(url, params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
