import { axiosClient } from "../axiosClient";
export const appointmentApi = {
  post: async (params) => {
    const url = `/appointment`;
    axiosClient.post(url, params);
  },
};
