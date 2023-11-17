import React from "react";
import ThirdButton from "../../../components/ThirdButton";
import image1 from "../styles/assets/Frame 18.svg";
import image2 from "../styles/assets/Ppl2.svg";
import image3 from "../styles/assets/Group 1.svg";
import HandshakeIcon from "../../../assets/business-handshake.svg";
import TopIcon from "../../../assets/business-top.svg";

function FeatureSection({ title, description, buttonText, reversed = false }) {
  const flexClass = reversed
    ? "md:flex-row-reverse bg-[#eef2f3]"
    : "md:flex-row bg-white";

  return (
    <section className={`w-full  ${flexClass}`}>
      <div className={`flex ${flexClass}`}>
        <img
          src={reversed ? HandshakeIcon : TopIcon}
          className="w-0 h-screen border-0 md:w-1/2 flex justify-center items-center"
        ></img>

        {/* Right Section */}
        <div className="flex max-w-lg m-auto flex-col items-center justify-start">
          <div className="text-center font-semibold text-h4 ">{title}</div>
          <div className="p-9 text-center">{description}</div>
          <ThirdButton text={buttonText} />
        </div>
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