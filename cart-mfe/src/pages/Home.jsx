import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="relative flex flex-col gap-y-0 items-center justify-center w-full min-h-screen">
        <div className="flex flex-col items-center">
          {/* "Farm" text */}
          <h2 className="text-[50px] md:text-[100px] lg:text-[150px] text-green-300 font-bold lg:tracking-wide lg:leading-tight lg:shadow-md md:hover:text-green-400 transition-colors duration-300">
            Farm
          </h2>
          {/* "Fresh" text, right below "Farm" */}
          <h2 className="text-[50px] md:text-[100px] lg:text-[150px] text-green-300 font-bold lg:tracking-wide lg:leading-tight lg:shadow-md md:hover:text-green-400 transition-colors duration-300">
            Fresh
          </h2>
        </div>
        <button className="mt-8 bg-green-600 text-white p-2 rounded-md cursor-pointer hover:bg-green-700 transition-colors duration-300">
          <Link to="/explore">Explore Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;