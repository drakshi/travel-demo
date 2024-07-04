import React from "react";

function FeatureDescriptionSection() {
  const featurecontent = [
    {
      heading: "Travel",
      subheading:
        "We serve your business and private customers' needs at lightningspeed across their journey.",
      content:
        "From booking issues to platform management and payment services, so you can focus on creating the “story-worthy” experience they want.",
      image:
        "https://thenest.concentrix.com/wp-content/uploads/2023/02/AdobeStock_299004868-800x800.jpg",
      imagePosition: "left",
    },
    {
      heading: "Hospitality and booking platforms",
      subheading:
        "We support your customer and partner network, from hotels to private guides, and ensure that your platform always provides relevant and consistent content.",
      content:
        "We are available 24 hours a day, 7 days a week to build customer loyalty and increase your ROI",
      image:
        "https://thenest.concentrix.com/wp-content/uploads/2023/02/AdobeStock_554608365-800x800.jpeg",
      imagePosition: "right",
    },
  ];
  return featurecontent.map((feat) => (
    <div className="p-10 px-20">
      <div
        className={`md:flex ${
          feat?.imagePosition === "right" ? "flex-row-reverse" : ""
        } justify-between items-center`}
      >
        <div className="flex flex-col gap-4 md:w-3/5">
          <div className="text-[32px] font-bold text-[#351E1A]">
            {feat.heading}
          </div>
          <div className="text-[22px] font-semibold text-[#351E1A]">
            {feat.subheading}
          </div>
          <div className="text-[22px] text-[#351E1A]">{feat.content}</div>
        </div>
        <div>
          <img
            className="rounded-full md:w-80"
            src={feat.image}
            alt="travel "
          />
        </div>
      </div>
    </div>
  ));
}

export default FeatureDescriptionSection;
