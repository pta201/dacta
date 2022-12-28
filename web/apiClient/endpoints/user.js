import { axiosClient } from "../axiosClient";
export const userApi = {
  getBuyer: async () => {
    const url = "/user/role/3";
    return await axiosClient.get(url);
  },
  getSeller: async () => {
    const url = "/user/role/4";
    return await axiosClient.get(url);
  },
};
