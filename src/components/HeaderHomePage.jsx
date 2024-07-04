import React from "react";
import HomePageSvg from "./HomePageSvg";

function HeaderHomePage() {
  return (
    <div className="  p-4 justify-between md:flex gap-10 ">
      <div className="flex flex-col mt-[15%] ml-10 gap-2">
        <h1
          className="text-[#003d5b] font-bold text-[55px] "
          style={{ fontFamily: "sans-serif" }}
        >
          Travel & Hospitality
        </h1>
        <div className="text-[#003d5b] text-[22px]">
          Create unforgettable experiences. Anywhere on the globe.
        </div>
        <div className=" text-[18px] font-light">
          Combining expert teams, leading-edge technology and proven knowledge
          of the travel and hospitality industry, we create the safest, easiest
          journey and give you the keys to unlock a highly personalized
          experience for connected travelers.
        </div>
        <div className="bg-[#cc3262] w-[30%] text-white rounded-tl-[80px] rounded-bl-[80px] rounded-br-[80px] py-5 px-[33px]">
          Transform your CX
        </div>
      </div>
      <div>
        <HomePageSvg />
      </div>
    </div>
  );
}

export default HeaderHomePage;
