import React from "react";
import ThirdButton from "../../../components/ThirdButton";
import image from '../styles/assets/Frame 18.svg'
function FeatureSection({ title, description, buttonText, reversed = false }) {
  const flexClass = reversed ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section
      className={`w-full flex justify-between items-center  ${flexClass}`}
    >
      {/* Left Section */}

        <img src={image} className="w-1/2"/>
      

      {/* Right Section */}
      <div className="flex max-w-lg m-auto flex-col items-center justify-start">
        <div className="text-center font-semibold text-h4 ">{title}</div>
        <div className="p-9 text-center">{description}</div>
        <ThirdButton text={buttonText} />
      </div>
    </section>
  );
}

function Features() {
  return (
    <>
      <FeatureSection
        title="Synergize Solutions: Empower Your Team with Collaborative Mastery"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Learn more"
        reversed={false}
      />
      <FeatureSection
        title="Synergize Solutions: Empower Your Team with Collaborative Mastery"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Learn more"
        reversed={true}
      />
    </>
  );
}

export default Features;
