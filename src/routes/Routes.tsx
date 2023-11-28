import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import PageNotFound from "../pages/404";
// import Login from "../pages/Login";
import PurchaseList from "../pages/PurchaseList";

const AppRoutes = () => {
  const navigate = useNavigate();

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
