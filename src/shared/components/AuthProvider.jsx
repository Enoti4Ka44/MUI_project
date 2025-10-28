import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthPovider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async () => {
    setTimeout(() => {
      console.log("Login");
      navigate("/home");
    }, 1000);
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, user, setUser, login, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthPovider;

export const useAuth = () => {
  return useContext(AuthContext);
};
