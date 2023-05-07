import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getCartItems,
  selectCartState,
  toggleCart,
} from "../../pages/Cart/cartSlice";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { AUTHENTICATED_ROLE, AUTHENTICATED_USER } from "../../pages/Login/Login";

export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { totalProductCount } = useSelector(selectCartState);
  const isLogin = localStorage.getItem(AUTHENTICATED_ROLE) === "Customer";
  const userName = localStorage.getItem(AUTHENTICATED_USER);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  const handleCartClick = () => {
    dispatch(toggleCart({ open: true }));
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem(AUTHENTICATED_ROLE);
    localStorage.removeItem(AUTHENTICATED_USER);
    navigate("/");
  };
  return (
    <header className="bg-white border-b border-gray-200 border-b border-solid">
      <div className="flex justify-between items-center py-4 px-8">
        <div className="flex items-center">
          <Link to="/products">
            <a className="font-bold text-xl text-gray-800" href="#">
              Shop
            </a>
          </Link>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex items-center">
            <a onClick={handleCartClick} role="button" className="relative flex">
              <svg className="flex-1 w-10 h-10 fill-current" viewBox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-6 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {totalProductCount}
              </span>
            </a>
          </div>
          {!isLogin && (
            <div className="flex items-center">
              <a
                onClick={handleLoginClick}
                role="button"
                className="flex text-gray-900 text-3xl font-bold"
              >
                <LoginOutlined className="m-auto" />
              </a>
            </div>
          )}
          {isLogin && (
            <div className="flex items-center">
              <a className="text-gray-900 text-3xl">{userName}</a>
            </div>
          )}
          {isLogin && (
            <div className="flex items-center">
              <a
                onClick={handleLogoutClick}
                role="button"
                className="flex text-gray-900 text-3xl"
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
