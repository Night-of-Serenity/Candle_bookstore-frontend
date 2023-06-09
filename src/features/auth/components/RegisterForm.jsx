import { useState } from "react";
import validateRegister from "../../../validators/validate-register";
import { useDispatch } from "react-redux";
import { registerAsync } from "../../../store/slices/authSlice";
import { toast } from "react-toastify";
import { getAccessToken } from "../../../utils/localstorage";
import FormInput from "./FormInput";

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
        const token = getAccessToken();
        console.log("suceed register and get token:", token);

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
        <h1 className="p-3 text-5xl text-center text-black">Register</h1>
        <div>
          <FormInput
            placeholder="username"
            value={username}
            onChange={handleOnchangeUsername}
            name="username"
            isError={error.username}
            errMessage={error.username}
          />
        </div>
        <div>
          <FormInput
            placeholder="email"
            value={email}
            onChange={handleOnchangeEmail}
            name="email"
            isError={error.email}
            errMessage={error.email}
          />
        </div>

        <div>
          <FormInput
            placeholder="password"
            value={password}
            onChange={handleOnchangePassword}
            name="password"
            isError={error.password}
            errMessage={error.password}
          />
        </div>
        <div>
          <FormInput
            placeholder="confirm password"
            value={confirmPassword}
            onChange={handleOnchangeConfirmPassword}
            name="confirmPassword"
            isError={error.confirmPassword}
            errMessage={error.confirmPassword}
          />
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
