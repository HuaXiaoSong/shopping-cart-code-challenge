import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
      </div>
    </header>
  );
}
