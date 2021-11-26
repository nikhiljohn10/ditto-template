import React from "react";

const Grid = () => {
  return (
    <div>
      {/* grid template 1 */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4">
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          1
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          2
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          3
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          4
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          5
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          6
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          7
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          8
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          9
        </div>
      </div>

      {/* grid template 2 */}

      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-4 mt-8">
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          1
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          2
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          3
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          4
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          5
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          6
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          7
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          8
        </div>
        <div className="text-center py-16 text-white text-2xl font-semibold bg-blue-400 rounded-2xl">
          9
        </div>
      </div>
    </div>
  );
};

export default Grid;
