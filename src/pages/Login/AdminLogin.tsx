import React, { useState } from "react";
import { login } from "../../mock/users";
import { useNavigate } from "react-router-dom";

export const ADMIN_AUTHENTICATED_ROLE = "ADMIN_AUTHENTICATED_ROLE";
export const ADMIN_AUTHENTICATED_USER = "ADMIN_AUTHENTICATED_USER";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const role = await login(username, password);
    if (role === "Customer") {
      alert("You do not have the right permission");
    } else if (role === "Admin") {
      // Store the authentication status in local storage
      localStorage.setItem(ADMIN_AUTHENTICATED_ROLE, role);
      localStorage.setItem(ADMIN_AUTHENTICATED_USER, username);
      navigate("/admin/products");
    } else {
      alert("You do not have the right credentials");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className=" w-1/3 flex  flex-col gap-4">
          <div className="font-bold text-xl text-center">Admin Login</div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8"
          >
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
                placeholder="Email"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
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

export default AdminLogin;
