import React from "react";
import ThirdButton from "../../../components/ThirdButton";
import HandshakeIcon from "../../../assets/business-handshake.svg";
import TopIcon from "../../../assets/business-top.svg";

function FeatureSection({ title, description, buttonText, reversed = false }) {
  const flexClass = reversed
    ? "justify-between md:flex-row-reverse px-5 bg-[#eef2f3]"
    : "md:flex-row px-5 bg-white ";

  return (
    <section className={`w-full ${flexClass}`}>
      <div className={`flex justify-center items-center ${flexClass}`}>
        <img
          src={reversed ? HandshakeIcon : TopIcon}
          className="h-screen border-0 items-center md:w-1/2 "
        ></img>
        {/* Right Section */}
        <div className="flex max-w-lg m-auto flex-col  items-start">
          <div className="text-start font-semibold text-h4 ">{title}</div>
          <div className="my-6 text-start items-start ">{description}</div>
          <ThirdButton text={buttonText} />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <div id="features">
      <FeatureSection
        title="Enhance the productivity in you entreprise"
        description="Post your issues and tap into the collective wisdom of the team. This is lorem ipsum Post your issues and tap into the collective wisdom of the team"
        buttonText="Learn more"
        reversed={false}
      />
      <FeatureSection
        title="Synergize Solutions: Empower Your Team with Collaborative Mastery"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Learn more"
        reversed={true}
      />
    </div>
  );
}

export default Features;