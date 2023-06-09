import { Outlet } from "react-router-dom";

export default function Container() {
  return (
    <div className="min-h-[100vh]">
      <Outlet />,
    </div>
  );
}
