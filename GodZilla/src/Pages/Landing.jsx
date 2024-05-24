import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Landing = () => {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col space-y-8 item-center justify-center h-screen font-sans wrap xsm:mt-20 sm:mt-10 xsm:h-screen">
        <div className="flex flex-col sm:text-5xl xsm:text-4xl font-bold space-y-5 lg:text-6xl">
          <span>Monster Foucsed</span>
          <span>Tailwind CSS Template</span>
        </div>
        <div className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          sint ratione provident, rerum ullam nam aliquid facilis quos qui
          explicabo ex, asperiores temporibus ad maxime eius nulla iste,
          sapiente placeat?
        </div>
        <div class="flex justify-center space-x-4">
          <button class="bg-[#466DF7] text-white px-4 py-3 rounded-md">
            Get Started
          </button>
          <button class="bg-slate-700 text-white px-4 py-3 rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
