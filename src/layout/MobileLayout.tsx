import { Outlet } from "react-router-dom";

function MobileLayout(): JSX.Element {
  return (
    <div className="bg-white mobile">
      <Outlet />
    </div>
  );
}

export default MobileLayout;
