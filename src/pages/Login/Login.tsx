import React, { useEffect, useState } from "react";
import { login } from "../../mock/users";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export const AUTHENTICATED_ROLE = "ADMIN_AUTHENTICATED_ROLE";
export const AUTHENTICATED_USER = "ADMIN_AUTHENTICATED_USER";

export function Login() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
    messageApi.open({
      type: "error",
      content: "You do not have the right credentials",
    });
  };

  useEffect(() => {
    const role = localStorage.getItem(AUTHENTICATED_ROLE);
    setIsLoggedIn(!!role);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const role = await login(username, password);
    if (role && role === "Customer") {
      localStorage.setItem(AUTHENTICATED_ROLE, role); // Store the authentication status in local storage
      localStorage.setItem(AUTHENTICATED_USER, username); // Store the authentication status in local storage
      navigate("/products");
    } else {
      error();
    }
  };

  return (
    <>
      {contextHolder}
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/3 flex flex-col gap-4">
          <div className="font-bold text-xl text-center">Customer Login</div>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-8">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
