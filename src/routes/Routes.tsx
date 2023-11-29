import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import PageNotFound from "../pages/404";
import PurchaseList from "../pages/PurchaseList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />

      <Route element={<Layout />}>
        <Route path="/" element={<PurchaseList />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
