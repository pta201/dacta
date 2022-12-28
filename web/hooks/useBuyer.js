import React, { useState, useEffect } from "react";
import { userApi } from "../apiClient/endpoints";
export const useBuyer = () => {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const buyers = await userApi.getBuyer();
      setBuyers(buyers);
    };
    fetch();
  }, []);

  return { buyers };
};
