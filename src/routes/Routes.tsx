import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/404";
import MobileLayout from "../layout/MobileLayout";
import Welcome from "../pages/Welcome";
import Dashboard from "../pages/Dashboard";
import PurchaseList from "../pages/PurchaseList";
import Purchase from "../pages/Purchase";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />

      <Route element={<MobileLayout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list/:id" element={<PurchaseList />} />
        <Route path="/purchase/:id" element={<Purchase />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
