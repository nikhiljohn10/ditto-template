import React from "react";

const Progress = () => {
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full w-2/6"></div>
      </div>
      <div className="relative pt-4">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className=" text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
              Task in progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-purple-600">
              0%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200"></div>
      </div>
      <div className="relative pt-4">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
              Task in progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-purple-600">
              30%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
          <div
            style={{ width: "30%" }}
            className="shadow-non flex flex-co text-cente whitespace-nowra text-whit justify-cente bg-purple-500"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
