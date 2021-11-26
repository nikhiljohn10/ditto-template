import React from "react";

const Dropdown = () => {
  return (
    <div>
      <button
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Dropdown button{" "}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-44"
      >
        <ul className="py-1" aria-labelledby="dropdownButton">
          <li>
            <a
              href="#"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
