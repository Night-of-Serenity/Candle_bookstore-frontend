import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnchangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSummit = () => {
    console.log("submit login");
  };

  return (
    <form onSubmit={handleSummit}>
      <div className="grid gap-4">
        <div>
          <h1 className="text-5xl text-center text-black p-3">LOG IN</h1>
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
            placeholder="password"
            value={password}
            onChange={handleOnchangePassword}
            name="password"
          />
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
