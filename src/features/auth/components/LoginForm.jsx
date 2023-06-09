import { useState } from "react";
import { toast } from "react-toastify";
import validateLogin from "../../../validators/validate-login";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../../store/slices/authSlice";
import FormInput from "./FormInput";

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
          console.log(validateError);
          return setError(validateError);
        }
        setError({});

        // console.log(input);
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
        <h1 className="p-3 mb-5 text-5xl text-center text-gray-500">Sign In</h1>
        <div>
          <FormInput
            type="text"
            value={username}
            placeholder="username"
            onChange={handleOnchangeUsername}
            name="username"
            isError={error.username}
            errMessage={error.username}
          />
        </div>
        <div>
          <FormInput
            type="password"
            placeholder="password"
            value={password}
            onChange={handleOnchangePassword}
            name="password"
            isError={error.password}
            errMessage={error.password}
          />
        </div>
        <div className="mt-5">
          <button className="bg-slate-500 hover:bg-slate-700 text-white w-full leading-[3rem] rounded-md text-xl font-bold">
            Log in
          </button>
        </div>
      </div>
    </form>
  );
}
