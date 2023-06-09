import { Outlet } from "react-router-dom";

export default function Container() {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
}
