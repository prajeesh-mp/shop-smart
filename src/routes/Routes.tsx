import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/404";
import MobileLayout from "../layout/MobileLayout";
import Welcome from "../pages/Welcome";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />

      <Route element={<MobileLayout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
