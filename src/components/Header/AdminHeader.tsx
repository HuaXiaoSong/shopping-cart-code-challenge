import React from "react";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import {
  ADMIN_AUTHENTICATED_ROLE,
  ADMIN_AUTHENTICATED_USER,
} from "../../pages/Login/AdminLogin";

export default function AdminHeader() {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem(ADMIN_AUTHENTICATED_ROLE) === "Admin";
  const userName = localStorage.getItem(ADMIN_AUTHENTICATED_USER);
  const handleLogoutClick = () => {
    localStorage.removeItem(ADMIN_AUTHENTICATED_ROLE);
    localStorage.removeItem(ADMIN_AUTHENTICATED_ROLE);
    navigate("/admin/login");
  };
  const handleLoginClick = () => {
    navigate("/admin/login");
  };

  return (
    <header className="bg-gray-900">
      <div className="flex justify-between items-center py-4 px-8">
        <a href="#" className="font-bold text-xl text-white">
          Admin Dashboard
        </a>
        <div className="flex justify-between gap-8">
          {!isLogin && (
            <div className="flex items-center">
              <a
                onClick={handleLoginClick}
                role="button"
                className="flex text-orange-500 text-3xl font-bold"
              >
                <LoginOutlined className="m-auto" />
              </a>
            </div>
          )}
          {isLogin && (
            <div className="flex items-center">
              <a className="text-orange-500 text-3xl">{userName}</a>
            </div>
          )}
          {isLogin && (
            <div className="flex items-center">
              <a
                onClick={handleLogoutClick}
                role="button"
                className="flex text-orange-500 text-3xl"
              >
                <LogoutOutlined className="m-auto" />
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
