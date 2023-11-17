import React from "react";
import SecondaryButton from "../../../components/SecondaryButton";

function Features() {
    return (
      <>
            
    <section className="w-full flex justify-between items-center mb-12">
      {/* Left Section */}

        <div className="w-1/2 h-[657px] bg-blue flex justify-center items-center">
          <div className="w-[320px] h-[394px] rounded bg-white text-transparent">
            qsmkjdqsjdk
          </div>
        </div>


      {/* Right Section */}
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="text-center font-semibold text-h4 ">
          Share the best knowledge in your company
        </div>
        <div className="p-9 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <SecondaryButton text={'Learn more'} />
      </div>
    </section>
    <section className="w-full flex justify-between items-center">
      {/* Left Section */}

      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="text-center font-semibold text-h4 ">
        Share your issues with seniors in your entreprise
        </div>
        <div className="p-9 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <SecondaryButton text={'Learn more'} />
      </div>
        <div className="w-1/2 h-[657px] bg-blue flex justify-center items-center">
          <div className="w-[320px] h-[394px] rounded bg-white text-transparent">
            qsmkjdqsjdk
          </div>
        </div>


      {/* Right Section */}
    </section>
      </>
  );
}

export default Features;
