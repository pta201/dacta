import axios from "axios";
import { parse, stringify } from "qs";
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
export const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  paramsSerializer: {
    encode: parse,
    serialize: stringify,
  },
});
export const setToken = (token) => {
  axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors

    throw error;
  }
);
