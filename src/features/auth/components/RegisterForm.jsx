import * as UserService from "../../../api/user-api";
import { useState } from "react";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSummit = (e) => {
    e.preventDefault();
    const register = async () => {
      const input = { username, email, password, confirmPassword };
      console.log(input);
      UserService.register(input);
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
