import React from "react";

const ListGroup = () => {
  return (
    <ul className="bg-white rounded-lg border border-gray-200 w-48 text-gray-900 text-sm font-medium">
      <li className="px-4 py-2 border-b border-gray-200 w-full rounded-t-lg">
        Profile
      </li>
      <li className="px-4 py-2 border-b border-gray-200 w-full">Settings</li>
      <li className="px-4 py-2 border-b border-gray-200 w-full">Messages</li>
      <li className="px-4 py-2 w-full rounded-b-lg">Download</li>
    </ul>
  );
};

export default ListGroup;
