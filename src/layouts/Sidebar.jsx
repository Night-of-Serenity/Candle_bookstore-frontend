import SidebarMenuAdmin from "../components/SidebarMenuAdmin";
import SidebarMenuUser from "../components/SidebarMenuUser";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  return (
    <div className="flex flex-col w-1/6 h-screen bg-mainlightblue sidebar">
      {isAdmin ? <SidebarMenuAdmin /> : <SidebarMenuUser />}
    </div>
  );
}
