import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";
import shape from "../styles/assets/Group 1(1).svg";
import Logo from "../../../assets/business-meeting.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="h-screen  bg-[#eef2f3] pt-16 flex flex-col md:flex-row px-12 justify-around items-center">
      <div className="flex flex-col md:w-[457px] justify-between">
        <h1 className="text-5xl text-center md:text-left md:text-5xl lg:text-6xl font-quicksand font-bold mb-6 leading-tight">
          Knowledge
          <br />
          Sharing
          <br />
          for Success
        </h1>
        <p className="text-xl text-center md:text-left md:text-base mb-8">
          Our software empowers employees to seamlessly share knowledge,
          collaborate in real-time, and efficiently address challenges. Foster a
          culture of innovation and boost productivity as your team collectively
          solves issues, unlocking the full potential of shared expertise
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button onClick={() => navigate('/contactus')} className="py-2.5 text-sm border-2 border-yellow hidden sm:inline px-10 rounded-lg bg-yellow text-black">
            Get Started
          </button>
          <NavLink to={"/login"}>
            <button className="py-2.5 px-10 hidden  md:inline rounded-lg text-sm bg-white text-black border-solid border-2 border-gray-500">
              Login Here
            </button>
          </NavLink>
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
