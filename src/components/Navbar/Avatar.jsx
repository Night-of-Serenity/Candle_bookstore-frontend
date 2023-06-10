/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import defaultImage from "../../assets/default/blank.png";

export default function Avatar() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="max-w-full avatar">
      <div className="w-24 rounded-full">
        <img src={user?.profileImage || defaultImage} />
      </div>
    </div>
  );
}
