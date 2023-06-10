import SidebarCommonBtn from "./SidebarCommonBtn";

export default function SidebarMenuAdmin() {
  return (
    <ul className="mt-10 space-y-1">
      <SidebarCommonBtn to="/" title="Store Managment" />
      <SidebarCommonBtn to="/orders" title="Order Management" />
    </ul>
  );
}
