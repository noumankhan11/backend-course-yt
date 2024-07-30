import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SideMenu() {
  return (
    <div>
      <div className="flex h-[calc(100vh-67px)] flex-col justify-between border-e ">
        <div className="px-2 py-2">
          <div className="w-full h-10 text-xl border-b-2 border-gray-300 text-gray-5000">
            Admin
          </div>

          <ul className="mt-6 ">
            <li className={`my-4 `}>
              <NavLink
                to="users"
                className={({ isActive }) =>
                  isActive
                    ? "block hover:border-white border border-transparent rounded-lg text-left bg-gray-500 px-4 py-2 text-lg font-medium text-gray-100"
                    : "block hover:border-white border border-transparent rounded-lg text-left bg-gray-600 px-4 py-2 text-lg font-medium text-gray-100"
                }>
                Users
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="contacts"
                className={({ isActive }) =>
                  isActive
                    ? "block hover:border-white border border-transparent rounded-lg text-left bg-gray-500 px-4 py-2 text-lg font-medium text-gray-100"
                    : "block hover:border-white border border-transparent rounded-lg text-left bg-gray-600 px-4 py-2 text-lg font-medium text-gray-100"
                }>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
