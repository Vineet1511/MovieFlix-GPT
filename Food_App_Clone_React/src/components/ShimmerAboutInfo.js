import React from "react";

const ShimmerAboutInfo = () => {
    return (
        <div className="flex flex-wrap justify-evenly w-10/12 h-[210px]">
          {Array(1).fill("").map((_, index) => (
          <div
            key={index}
            className="w-7/12 h-[210px] bg-gray-200 rounded-md border-r border-b border-l lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r flex animate-pulse "
          >
          <div className="w-3/12 bg-gray-300 rounded-md"></div>
            <div className="w-8/12 ml-6 p-3 text-gray-700 text-base">
            <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
          </div>
      </div>
    ))}
  </div>
    );
}

export default ShimmerAboutInfo;
