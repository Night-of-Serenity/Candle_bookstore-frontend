import SidebarMenuAdmin from "../components/Sidebar/SidebarMenuAdmin";
import SidebarMenuUser from "../components/Sidebar/SidebarMenuUser";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  return (
    <div className="flex flex-col w-1/6 bg-mainlightblue sidebar">
      {isAdmin ? <SidebarMenuAdmin /> : <SidebarMenuUser />}
    </div>
  );
}
