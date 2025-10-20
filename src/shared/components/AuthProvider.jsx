import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthPovider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
};
export default AuthPovider;

export const useAuth = () => {
  return useContext(AuthContext);
};
