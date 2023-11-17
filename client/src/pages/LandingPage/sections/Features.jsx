import React from "react";
import ThirdButton from "../../../components/ThirdButton";

function FeatureSection({ title, description, buttonText, reversed = false }) {
  const flexClass = reversed ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section
      className={`w-full flex justify-between items-center  ${flexClass}`}
    >
      {/* Left Section */}
      <div className="w-0 md:w-1/2 h-screen bg-black flex justify-center items-center">
        <div className="hidden md:block w-[320px] h-[394px] rounded bg-white text-transparent">
          qsmkjdqsjdk
        </div>
      </div>

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
