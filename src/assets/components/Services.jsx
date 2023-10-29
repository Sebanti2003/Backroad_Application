import React from "react";
import img1 from '../iconnn/776574.png'
import img2 from '../iconnn/wallet-icon-2048x2048-9rmek6d6.png'
import img3 from '../iconnn/sock.png'
import Service from "./Service";

function Services() {
  const array = [
    {
      img: img2,
      title: "Saving Money",
      desc: "We play an important role in saving your valuable money as we got the best budget for you"
    },
    {
        img: img1,
        title: "Endless Hiking",
        desc: "We play an important role in saving your valuable money as we got the best budget for you"
      },
      {
        img: img3,
        title: "Amazing Comfort",
        desc: "We play an important role in saving your valuable money as we got the best budget for you"
      }
  ];
  return (
    <>
    <div className="" id="services">
    <h1 className="text-black text-4xl tracking-widest text-center font-bold mt-10 mb-10">
          OUR{" "}
          <span className="text-blue-600 text-4xl font-bold">SERVICES</span>
        </h1>
      <div className="w-[90%] mx-auto min-h-[10vw] bg-slate-100 flex pl-5 items-center justify-between max-md:flex-col pb-5 ">
        {array.map((serv)=>(
            <Service {...serv}/>
        ))}
      </div>
    </div>
    
    </>
  );
}

export default Services;
