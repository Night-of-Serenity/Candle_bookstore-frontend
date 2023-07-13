import { useSelector } from "react-redux";
import Avatar from "../../../components/Navbar/Avatar";

export default function CheckoutUser() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="flex items-center gap-4">
      <div className="w-10">
        <Avatar />
      </div>
      <h2 className="font-medium text-gray-900">{user?.username}</h2>
    </div>
  );
}
