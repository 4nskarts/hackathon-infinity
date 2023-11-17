import ThirdButton from "../../../components/ThirdButton";
import FourthButton from "../../../components/FourthButton";
import shape from "../styles/assets/Group 1.svg";
import shape2 from "../styles/assets/Vector 1.svg";
import shape3 from "../styles/assets/Ppl2.svg";
function Hero() {
    return (
        <section className="h-screen pt-16 flex px-10 md:px-[7.5rem] justify-center mlm:justify-between items-stretch font-Quicksand">
            <div className="flex flex-col justify-around w-11/12 md:w-6/12 lg:w-5/12 py-20">
                <h1 className="z-50  text-4xl lg:text-5xl m-0 text-left font-quicksand font-bold leading-tight">
                    Elevate 
                    collaboration with
                    <span className="text-blue"> Knowledge</span> Sharing
                </h1>
                <p className="z-50 text-xl text-left md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem corporis veniam harum? Tenetur ullam veniam
                </p>
                <div className="z-50 flex gap-4 flex-col lg:flex-row">
                    <ThirdButton text="Start Free Trial" />
                    <FourthButton text="For Your Company" />
                </div>
            </div>
            <div className="w-[260px] lg:w-[340px] hidden mlm:flex h-[280px] lg:h-[360px] self-center justify-center items-center">
                <img src={shape3} className="w-100 h-100" />
            </div>
            {/* <img src={shape} className="absolute top-4 left-0 z-0" /> */}
            {/* <img src={shape2} className="absolute hidden md:block top-4 right-12 z-0" /> */}
        </section>
    );
}

export default Hero;
