import { Link } from "react-router-dom";

export default function Usermenu({ isAdmin, username, onClickLogout }) {
  return (
    <details>
      {isAdmin ? (
        <>
          <summary>{`admin ${username}`}</summary>
          <ul className="p-2  right-3 ">
            <li>
              <Link>admin profile</Link>
            </li>
            <li>
              <Link>purchase history</Link>
            </li>
            <li>
              <button onClick={onClickLogout}>log out</button>
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
              <button onClick={onClickLogout}>log out</button>
            </li>
          </ul>
        </>
      )}
    </details>
  );
}
