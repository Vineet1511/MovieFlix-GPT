import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-evenly mt-24">
    {Array(15).fill("").map((_, index) => (
      <div
        key={index}
        className="m-4 p-4 w-[260px] h-[385px] mt-4 bg-gray-200 rounded-md animate-pulse"
      >
        <div className="h-[130px] w-full bg-gray-300 rounded-md mb-4"></div>
        <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-3"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-3"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-3"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-3"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-3"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-3"></div>
      </div>
    ))}
  </div>
  
    )
}

export default Shimmer;