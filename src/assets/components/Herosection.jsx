import React from "react";
import img from "../images/main.jpeg";

function Herosection() {
  return (
    <>
      <div className="w-full h-screen relative" id="hero">
        <img src={img} className="w-full h-full z-10 absolute" alt="" />
        <div className="absolute bg-blue-900 opacity-[0.3] z-[11] w-full h-full "></div>
        <div className="absolute z-[12] w-full h-full flex-col flex items-center justify-center gap-4 pl-1 pr-1">
          <h1 className="text-white text-6xl font-serif font-bold text-center">
            Continue Exploring
          </h1>
          <p className="text-white text-center">
            Have a great weekend with your family while driving and singing to
            the songs of Billy jones and Ruby Heart!
          </p>
          <button className="group relative w-[20vw] h-[3vw] max-md:w-[30vw] max-lg:h-[8vw] overflow-hidden flex justify-center items-center">
            <div className="z-10 text-blue-500 absolute right-0 top-0 left-0 bottom-0 bg-white flex justify-center items-center transition-transform transform translate-x-0 group-hover:translate-x-full">
              
            </div>
            <div className="z-9 text-white absolute top-0 left-0 right-0 bottom-0 bg-black flex justify-center items-center transition-transform transform translate-x-0 group-hover:translate-x-0">
              
            </div>
            <h1 className="absolute text-blue-500 group-hover:text-white z-[13]">Explore Tours</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default Herosection;
