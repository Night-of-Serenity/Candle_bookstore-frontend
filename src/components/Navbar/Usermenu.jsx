import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAsync } from "../../store/slices/authSlice";
import { clearCart } from "../../store/slices/cartSlice";
export default function Usermenu() {
  const { username } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <li>
      <details>
        <summary>{username}</summary>
        <ul className="p-2 right-3 ">
          <li>
            <Link to="/profile">user profile</Link>
          </li>
          <li>
            <Link to="/purschasedHistory">purchase history</Link>
          </li>
          <li>
            <button
              onClick={() => {
                dispatch(clearCart());
                dispatch(logoutAsync());
              }}
            >
              log out
            </button>
          </li>
        </ul>
      </details>
    </li>
  );
}
