import React from "react";
import ThirdButton from "../../../components/ThirdButton";
import image1 from "../styles/assets/Frame 18.svg";
import image2 from "../styles/assets/Ppl2.svg";
import image3 from "../styles/assets/Group 1.svg";

function FeatureSection({ title, description1, description2, description3, buttonText, reversed = false }) {
  const flexDirectionClass = reversed ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section className={`w-full flex justify-around items-center ${flexDirectionClass} pb-5 relative`}>
      <img src={reversed ? image2 : image1} className="w-1/2 hidden md:block m-5" alt="Feature Image" />
      <div className="w-1/2 max-w-lg m-auto flex flex-col items-center justify-start">
        <div className="text-h5 md:text-[39px] text-left font-[600] mb-[100px]">{title}</div>
        <div className="flex gap-3 justify-start items-center">
          <p className="bg-blue rounded-full w-6 text-transparent">qsd</p>
          <div className=" md:text-h5 p-2 text-left text-[20px] ">{description1}</div>
        </div>
        <div className="flex gap-3 justify-start items-center">
          <p className="bg-blue rounded-full w-6 text-transparent">qsd</p>
          <div className=" md:text-h5 p-2 text-left text-[20px]">{description2}</div>
        </div>
        <div className="flex gap-3 justify-start items-center">
          <p className="bg-blue rounded-full w-6 text-transparent">qsd</p>
          <div className=" md:text-h5 p-2 text-left text-[20px]">{description3}</div>
        </div>
      </div>
      <img src={image3} className={`w-full h-screen md:h-auto hidden md:block md:w-auto opacity-[0.3] ${reversed? '-rotate-90': 'rotate-90'}`} alt="Feature Image" />
    </section>
  );
}

function Features() {
  return (
    <>
      <FeatureSection
        title="Synergize Solutions: Empower Your Team with Collaborative Mastery"
        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Learn more"
        reversed={false}
      />
      <FeatureSection
        title="Synergize Solutions: Empower Your Team with Collaborative Mastery"
        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Learn more"
        reversed={true}
      />
    </>
  );
}

export default Features;


