import React from "react";

function FeatColumn() {
  return (
    <div className="text-center p-10">
      <h1 className=" font-bold text-3xl text-[#003d5b]">
        Flawless CX for all players
      </h1>
      <div className="md:flex justify-center p-10">
        <div className="flex flex-col gap-4">
          <img
            style={{ height: "100px" }}
            src="https://thenest.concentrix.com/wp-content/uploads/2023/02/Travel_icon.svg"
            alt="Outsourcing services for travel &amp; hospitality startups"
          />
          <p className="text-[22px] text-[#003d5b] font-bold">Travel</p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            style={{ height: "100px" }}
            src="https://thenest.concentrix.com/wp-content/uploads/2023/02/Hospitality_icon.svg"
            data-src="https://thenest.concentrix.com/wp-content/uploads/2023/02/Hospitality_icon.svg"
            alt="Outsourcing services for travel &amp; hospitality startups"
          />
          <p className="text-[22px] text-[#003d5b] font-bold w-80">
            Hospitality and booking platforms
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatColumn;
