import { useState } from "react";
import validateRegister from "../../../validators/validate-register";
import InputErrorMessage from "./InputErrorMessage";
import { useDispatch } from "react-redux";
import { registerAsync } from "../../../store/slices/authSlice";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleSummit = (e) => {
    e.preventDefault();
    const register = async () => {
      try {
        const input = { username, email, password, confirmPassword };
        const validateError = validateRegister(input);
        if (validateError) {
          toast.error("register inputs incorrect");
          return setError(validateError);
        }
        setError({});

        const res = await dispatch(registerAsync(input)).unwrap();

        if (res) {
          toast.success("register succeed");
        }
      } catch (err) {
        toast.error(err);
      }
    };
    register();
  };

  const handleOnchangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnchangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSummit}>
      <div className="grid gap-4">
        <h1 className="text-5xl text-center text-black p-3">Register</h1>
        <div>
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
            placeholder="email"
            value={email}
            onChange={handleOnchangeEmail}
            name="email"
          />
          {error.email && <InputErrorMessage message={error.email} />}
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
          <input
            type="text"
            className="block w-full border rounded-md px-4 py-3.5 outline-none focus:ring-1 border-gray-300 focus:border-blue-500 focus:ring-blue-300"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={handleOnchangeConfirmPassword}
            name="confirmPassword"
          />
          {error.confirmPassword && (
            <InputErrorMessage message={error.confirmPassword} />
          )}
        </div>
        <div>
          <button className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold">
            Create Account
          </button>
        </div>
      </div>
    </form>
  );
}
