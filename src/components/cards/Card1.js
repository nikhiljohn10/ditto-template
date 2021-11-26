import React from "react";

const Card1 = () => {
  return (
    <div className="m-auto sm:px-0 sm:w-10/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
      <div className="relative group">
        <div
          role="hidden"
          className="absolute inset-0 w-full h-full rounded-3xl bg-white transition duration-300 shadow-xl group-hover:scale-105"
        ></div>
        <div className="relative flex flex-wrap gap-6 p-6 sm:flex-nowrap">
          <div className="sm:w-5/12">
            <img
              src="https://tailwindcss.com/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg"
              className="h-full w-full object-cover rounded-2xl"
              alt=""
            />
          </div>

          <div className="space-y-4 sm:w-7/12">
            <h3 className="text-2xl font-bold text-gray-700">
              Abstract background
            </h3>
            <p className="text-gray-600">
              Illo voluptas quos doloremque accusantium numquam.
            </p>
            <span className="block py-2 px-4 rounded-xl bg-yellow-100 text-sm text-yellow-800 font-semibold">
              For non commercial use only
            </span>
            <div className="pt-6 border-t flex gap-4">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                alt="author photo"
              />
              <div>
                <h6 className="text-base font-semibold text-gray-600">
                  John Doe
                </h6>
                <span className="block text-xs tracking-wide text-gray-500">
                  Illustrator
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
