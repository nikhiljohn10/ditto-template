import React from "react";

const TextArea = () => {
  return (
    <div>
      <label
        htmlFor="message"
        className="text-sm font-medium text-gray-900 block mb-2"
      >
        Your message
      </label>
      <textarea
        id="message"
        rows="4"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        placeholder="Leave a comment..."
      ></textarea>
    </div>
  );
};

export default TextArea;
