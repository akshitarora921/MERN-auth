import React, { useEffect, useState } from "react";
import { useToken } from "./useToken";

export const useUser = () => {
  const [token] = useToken();

  const getpayloadFromToken = (token) => {
    const encodedPayload = token.split(".")[1];
    return JSON.parse(atob(encodedPayload));
  };
  const [user, setUser] = useState(() => {
    if (!token) return null;
    return getpayloadFromToken(token);
  });

  useEffect(() => {
    if (!token) setUser(null);
    else setUser(getpayloadFromToken(token));
  }, [token]);

  return user;
};
