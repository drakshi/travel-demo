import React from "react";

function InfoWidget() {
  const infoContent = [
    {
      heading: "Deliver a 5-star digital CX",
      description:
        "Attract and retain guests and travelers with an easy-to-use interface and reassuring customer support.",
    },
    {
      heading: "Handle peaks and seasonality challenges",
      description:
        "Leverage our flexible and highly scalable outsourcing model for a consistent, reactive service.",
    },
    {
      heading: "Leverage tech & data to tailor experiences & lower costs",
      description:
        "Combine automation tech, AI & data analytics to improve your operations and personalize your clients’ experience.",
    },
  ];
  return (
    <div className="bg-[#f0dcd8] py-14 px-12">
      <div className="md:flex  gap-10">
        {infoContent.map((info) => (
          <div className="bg-[#351E1A] md:w-1/3 md:h-72 border text-white rounded-tl-[20px] rounded-bl-[20px] py-11 px-7 rounded-br-[20px]">
            <div className="flex flex-col gap-2">
              <div className=" text-2xl text-ehite">{info.heading}</div>
              <div className="text-[18px] font-thin">{info.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoWidget;
