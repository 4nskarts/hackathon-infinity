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
          alt="Icon"
        ></img>
        {/* Right Section */}
        <div className="flex max-w-lg gap-2 m-auto flex-col items-start">
          <div className="text-start  font-semibold text-h4 ">{title}</div>
          <ul className="my-6  text-start list-disc list-inside">
            {description.map((point, index) => (
              <li className="mt-2" key={index}>
                {point}
              </li>
            ))}
          </ul>
          <ThirdButton text={buttonText} />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const featureData = [
    {
      title: "Enhance the productivity in your enterprise",
      description: [
        "Post your issues and tap into the collective wisdom of the team",
        "We are committed to a customer-centric approach, tailoring knowledge-sharing solutions to meet the unique needs of your organization.",
        "We foster a continuous learning culture within your company, where knowledge is shared and acquired organically.",
      ],
      buttonText: "Learn more",
      reversed: false,
    },
    {
      title:
        "Synergize Solutions: Empower Your Team with Collaborative Mastery",
      description: [
        "Post your issues and tap into the collective wisdom of the team.",
        "We provide an innovative platform for seamless knowledge sharing within your organization.",
        "We are adaptable to the evolving needs of your business and scalable to accommodate growth.",
      ],
      buttonText: "Learn more",
      reversed: true,
    },
  ];

  return (
    <div id="features">
      {featureData.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}
    </div>
  );
}

export default Features;
