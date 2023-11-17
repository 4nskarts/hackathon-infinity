import React from "react";
import manPng from "../../../assets/man.png"
import curve1 from "../../../assets/curve-1.svg";

function SocialProof () {
    return <> 
    <section className="pt-[5rem] bg-white flex flex-col items-center px-20 relative">
        <div className="z-50">
            <img  src={manPng} alt="Man smiling at your face" className="rounded-full h-100 w-100 border-8 border-blue border-solid" />
        </div>
        <div className="z-50">
            <p className="text-[#0C1A04] my-[2.5rem]">Lorem Ipsum</p>
            <p className="text-[#000000cc]">“ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, aspernatur vero obcaecati consectetur ducimus nam?”</p>
        </div>
    </section>
    <img src={curve1} alt="A curve that looks good" className="opacity-60 absolute right-0 top-[39.3rem]" />
    </>
}
export default SocialProof;