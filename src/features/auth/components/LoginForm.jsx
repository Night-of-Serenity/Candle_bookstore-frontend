import { useState } from "react";
import { toast } from "react-toastify";
import validateLogin from "../../../validators/validate-login";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../../store/slices/authSlice";
import InputErrorMessage from "./InputErrorMessage";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const handleOnchangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSummit = (e) => {
    e.preventDefault();
    const login = async () => {
      try {
        const input = { username, password };
        const validateError = validateLogin(input);
        if (validateError) {
          toast.error("login inputs incorrect");
          return setError(validateError);
        }
        setError({});

        console.log(input);
        const res = await dispatch(loginAsync(input)).unwrap();

        if (res) {
          toast.success("login succeed");
        }
      } catch (err) {
        toast.error(err);
      }
    };
    login();
  };

  return (
    <form onSubmit={handleSummit}>
      <div className="grid gap-4">
        <div>
          <h1 className="text-5xl text-center text-black p-3">Log in</h1>
          <input
            type="text"
            className="block w-full border rounded-md px-4 py-3.5 outline-none focus:ring-1 border-gray-300 focus:border-blue-500 focus:ring-blue-300"
            placeholder="username"
            value={username}
            onChange={handleOnchangeUsername}
            name="username"
          />
          {error.username && <InputErrorMessage message={error.username} />}
        </div>
        <div>
          <input
            type="text"
            className="block w-full border rounded-md px-4 py-3.5 outline-none focus:ring-1 border-gray-300 focus:border-blue-500 focus:ring-blue-300"
            placeholder="password"
            value={password}
            onChange={handleOnchangePassword}
            name="password"
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div>
          <button className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold">
            Log in
          </button>
        </div>
      </div>
    </form>
  );
}
