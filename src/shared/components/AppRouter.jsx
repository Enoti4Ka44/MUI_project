import { Route, Routes } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { publicRoutes } from "../../utils/routes";
import Auth from "../../pages/auth/Auth";

function AppRouter() {
  const user = useAuth();
  console.log(publicRoutes);
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
    </Routes>
  );
}

export default AppRouter;
