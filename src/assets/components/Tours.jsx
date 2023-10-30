import React from "react";
import img1 from "../images/tour-1.jpeg";
import img2 from "../images/tour-2.jpeg";
import img3 from "../images/tour-3.jpeg";
import img4 from "../images/tour-4.jpeg";
import img5 from "../images/tour-5.jpeg";
import img6 from "../images/tour-6.jpeg";
import Pertour from "./Pertour";

function Tours() {
  const arrayy = [
    {
      id:1,
      img: img1,
      title: "Tibet Adventure",
      country: "China",
      days: 6,
      money: 1200,
      date: "August 26th,2020",
    },
    {
      id:2,
      img: img2,
      title: "Tibet Adventure",
      country: "China",
      days: 6,
      money: 1200,
      date: "August 26th,2020",
    },
    {
      id:3,
      img: img3,
      title: "Tibet Adventure",
      country: "China",
      days: 6,
      money: 1200,
      date: "August 26th,2020",
    },
    {
      id:4,
      img: img4,
      title: "Tibet Adventure",
      country: "China",
      days: 6,
      money: 1200,
      date: "August 26th,2020",
    },
    {
      id:5,
      img: img5,
      title: "Tibet Adventure",
      country: "China",
      days: 6,
      money: 1200,
      date: "August 26th,2020",
    },
    {
      id:6,
      img: img6,
      title: "Tibet Adventure",
      country: "China",
      days: 6,
      money: 1200,
      date: "August 26th,2020",
    },
  ];
  return (
    <>
      <div className="w-[80%]  flex flex-col justify-center items-center mx-auto gap-6  " id="tours">
        <h1 className="text-black text-4xl tracking-widest font-bold mt-10 mb-10">
          FEATURED{" "}
          <span className="text-blue-600 text-4xl font-bold">TOURS</span>
        </h1>
        <div className="w-full flex flex-wrap p-3 min-h-[70vh] justify-center ">
            {arrayy.map((e)=><Pertour key={e.id} {...e}/>)}
        </div>
      </div>
    </>
  );
}

export default Tours;
