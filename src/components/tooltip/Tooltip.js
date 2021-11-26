import React from "react";

const Tooltip = () => {
  return (
    <div className="flex items-center flex-wrap">
      {/* Show tooltip on Top */}
      <button
        data-tooltip-target="tooltip-top"
        data-tooltip-placement="top"
        type="button"
        className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4"
      >
        Tooltip top
      </button>
      <div
        id="tooltip-top"
        role="tooltip"
        className="tooltip absolute z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 invisible"
      >
        Tooltip on top
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>

      {/* Show tooltip on right */}
      <button
        data-tooltip-target="tooltip-right"
        data-tooltip-placement="right"
        type="button"
        className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4"
      >
        Tooltip right
      </button>
      <div
        id="tooltip-right"
        role="tooltip"
        className="tooltip absolute z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 invisible"
      >
        Tooltip on right
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>

      {/* Show tooltip on bottom */}
      <button
        data-tooltip-target="tooltip-bottom"
        data-tooltip-placement="bottom"
        type="button"
        className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4"
      >
        Tooltip bottom
      </button>
      <div
        id="tooltip-bottom"
        role="tooltip"
        className="tooltip absolute z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 invisible"
      >
        Tooltip on bottom
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>

      {/* Show tooltip on left */}
      <button
        data-tooltip-target="tooltip-left"
        data-tooltip-placement="left"
        type="button"
        className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Tooltip left
      </button>
      <div
        id="tooltip-left"
        role="tooltip"
        className="tooltip absolute z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 invisible"
      >
        Tooltip on left
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};

export default Tooltip;
