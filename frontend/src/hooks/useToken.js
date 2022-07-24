import React, { useEffect, useState } from "react";

export const useToken = () => {
  const [token, setInternalToken] = useState(() =>
    localStorage.getItem("token")
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const setToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setInternalToken(newToken);
  };
  return [token, setToken];
};
