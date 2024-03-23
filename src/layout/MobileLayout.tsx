import { Outlet } from "react-router-dom";

function MobileLayout(): JSX.Element {
  return (
    <div className="container py-3">
      <Outlet />
    </div>
  );
}

export default MobileLayout;
