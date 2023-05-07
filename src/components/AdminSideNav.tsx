import React from "react"
import { Link } from "react-router-dom"

export function AdminSideNav() {
  return (
    <div className="bg-gray-800 text-gray-100 w-64 flex flex-col h-screen">
      <div className="flex-grow overflow-y-auto">
        <nav className="px-4">
          <ul className="mt-4">
            <li className="my-px">
              <Link to="products">
                <a
                  className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-300 hover:bg-gray-700"
                  href="#"
                >
                  Products
                </a>
              </Link>
            </li>
            <li className="my-px">
              <Link to="orders">
                <a
                  className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-300 hover:bg-gray-700"
                  href="#"
                >
                  Orders
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
