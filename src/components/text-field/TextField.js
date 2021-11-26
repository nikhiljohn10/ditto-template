import React from "react";

const TextField = () => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="large-input"
          className="text-sm font-medium text-gray-900 block mb-2"
        >
          Large input
        </label>
        <input
          type="text"
          id="large-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="base-input"
          className="text-sm font-medium text-gray-900 block mb-2"
        >
          Base input
        </label>
        <input
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div>
        <label
          htmlFor="small-input"
          className="text-sm font-medium text-gray-900 block mb-2"
        >
          Small input
        </label>
        <input
          type="text"
          id="small-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        />
      </div>
    </div>
  );
};

export default TextField;
