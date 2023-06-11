import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../../store/slices/authSlice";

export default function AdminMenu() {
  const { username } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <li>
      <details>
        <summary>{`admin ${username}`}</summary>
        <ul className="p-2 right-3 ">
          <li>
            <button onClick={() => dispatch(logoutAsync())}>log out</button>
          </li>
        </ul>
      </details>
    </li>
  );
}
