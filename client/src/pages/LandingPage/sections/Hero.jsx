import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";
import shape from "../styles/assets/Group 1(1).svg";
import Logo from "../../../assets/business-meeting.svg";
function Hero() {
  return (
    <section className="h-screen bg-[#eef2f3] pt-16 flex flex-col md:flex-row px-12 justify-around items-center">
      <div className="flex flex-col md:w-[457px] justify-between">
        <h1 className="text-5xl text-center md:text-left md:text-5xl lg:text-6xl font-quicksand font-bold mb-6 leading-tight">
          Knowledge
          <br />
          Sharing
          <br />
          for Success
        </h1>
        <p className="text-xl text-center md:text-left md:text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          corporis veniam harum? Tenetur ullam veniam
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <PrimaryButton text="Start Free Trial" />
          <SecondaryButton text="For Your Company" />
        </div>
      </div>
      <div className=" justify-center items-center">
        <img
          src={Logo}
          className="hidden border-0 md:block mt-0 rounded-lg w-full md:w-[600px] h-[600px]"
        ></img>
        {/* <img src={shape} className="absolute top-24 left-0" /> */}
      </div>
    </section>
  );
}

export default Hero;
