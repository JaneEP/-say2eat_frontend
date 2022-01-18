import { setToken } from "./token-tools";

export const login = async (email, password) => {
    const response = await client.post("/auth/login", {
      email,
      password,
    });
    setToken(response.data.token);// взяла с сервера токен и установила его в локалстораж
    return response;
  };