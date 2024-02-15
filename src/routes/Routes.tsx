import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import PageNotFound from "../pages/404";
import PurchaseList from "../pages/PurchaseList";
import MobileLayout from "../layout/MobileLayout";
import Welcome from "../pages/Welcome";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />

      {/* <Route element={<Layout />}>
        <Route path="/" element={<PurchaseList />} />
      </Route> */}
      <Route element={<MobileLayout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
