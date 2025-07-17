import { createContext, useEffect, useState } from "react";
import ProductAPI from "./api/ProductAPI";
import axios from "./components/mainPages/utils/axiosInstance";
import UserAPI from "./api/UserAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");

    if (firstLogin) {
      const refreshToken = async () => {
        try {
          const res = await axios.get("/user/refresh_token");
          setToken(res.data.accesstoken);
        } catch (err) {
          console.error("Token refresh failed:", err.response?.data?.msg || err.message);
        }
      };

      refreshToken();
    }
  }, []);

  const state = {
    token: [token, setToken],
    ProductAPI: ProductAPI(),
    UserAPI: UserAPI(token), // ✅ Token is now passed correctly
  };

  return (
    <GlobalState.Provider value={state}>
      {children}
    </GlobalState.Provider>
  );
};
