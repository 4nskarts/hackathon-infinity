import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";
import shape from '../styles/assets/Group 1.svg'
import shape2 from '../styles/assets/Vector 1.svg'
import shape3 from '../styles/assets/Ppl2.svg'
function Hero() {
  return (
    <section className="h-[130vh] pt-16 flex flex-col md:flex-row px-12 justify-around items-center font-Quicksand">
      <div className="flex flex-col md:w-[457px] mr-0 md:mr-[20rem]">
        <h1 className="z-50 text-5xl text-left md:text-left md:text-5xl lg:text-6xl font-quicksand font-bold mb-6 leading-tight mr-0 md:mr-12">
        Elevate <span className="text-blue">collaboration</span> with <span className="text-blue">Knowledge</span> Sharing
        </h1>
        <p className="z-50 text-xl text-center md:text-left md:text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          corporis veniam harum? Tenetur ullam veniam
        </p>
        <div className="z-50 flex flex-col md:flex-row gap-4">
          <PrimaryButton text="Start Free Trial" />
          <SecondaryButton text="For Your Company" />
        </div>
      </div>
      <img src={shape3} className="absolute top-32 right-12 z-40 hidden md:block  w-full md:w-[457px] h-[457px]"/>
      <img src={shape} className="absolute top-4 left-0 z-0" />
      <img src={shape2} className="absolute hidden md:block top-4 right-12 z-0" />
      
    </section>
  );
}

export default Hero;
