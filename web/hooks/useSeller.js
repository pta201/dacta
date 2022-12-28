import React, { useState, useEffect } from "react";
import { userApi } from "../apiClient/endpoints";
export const useSeller = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const sellers = await userApi.getSeller();
      setSellers(sellers);
    };
    fetch();
  }, []);

  return { sellers };
};
