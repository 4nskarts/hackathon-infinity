import React from "react";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";

function Hero() {
    return (
        <section className="h-screen pt-16 flex flex-row px-[12%] justify-between items-center">
            <div className="flex flex-col py-14 h-[500px] w-[457px] justify-between">
                <h1 className="text-h2 font-quicksand font-bold">
                    Knowledge<br/>Sharing<br/>for Success
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem corporis veniam harum? Tenetur ullam veniam
                </p>
                <div className="flex flex-row w-full h-14 justify-between gap-14 ">
                    <button className="py-[12px] px-[35px] rounded-lg bg-black text-white">
                        Start Free Trial
                    </button>
                    <button className="py-[12px] px-[35px] rounded-lg bg-transparent text-black border-solid border-2 border-black">
                        For Your Company
                    </button>
                </div>
            </div>
            <div className="bg-white w-[360px] h-[360px]"></div>
        </section>
    );
}
export default Hero;
