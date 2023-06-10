import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAsync } from "../../store/slices/authSlice";
export default function Usermenu() {
  const {
    isAdmin,
    user: { username },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <details>
      {isAdmin ? (
        <>
          <summary>{`admin ${username}`}</summary>
          <ul className="p-2 right-3 ">
            <li>
              <Link>admin profile</Link>
            </li>
            <li>
              <Link>purchase history</Link>
            </li>
            <li>
              <button onClick={() => dispatch(logoutAsync())}>log out</button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <summary>{username}</summary>
          <ul className="p-2 right-3 ">
            <li>
              <Link>user profile</Link>
            </li>
            <li>
              <Link>purchase history</Link>
            </li>
            <li>
              <button onClick={() => dispatch(logoutAsync())}>log out</button>
            </li>
          </ul>
        </>
      )}
    </details>
  );
}
