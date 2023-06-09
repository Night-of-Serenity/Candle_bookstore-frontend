import { Outlet } from "react-router-dom";

export default function Container() {
  return (
    <div className="min-h-[90vh]">
      <Outlet />,
    </div>
  );
}
