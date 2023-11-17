import React from "react";
import Button from "../../../components/ThirdButton";
import shape2 from '../styles/assets/Group 1(2).svg'
function Statistics () {
    return <section className="min-h-[80vh] flex flex-col lg:flex-row items-center text-center justify-around relative">
        <div className="w-1/2 flex flex-col justify-center items-center mx-9">
            <div className="text-h3">Knowledge Growth:</div>
            <div className="text-center text-h5 pb-6 text-[#00000099] ">Our platform has contributed to a 40% rise in shared knowledge,<br/> fostering a culture of continuous learning and expertise exchange among team members.</div>
            <Button text={"Learn more"} />
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="text-h3 font-semibold text-blue p-4 text-center">+26</div>
                <div className="text-center text-h5 font-medium">Company Enrolled</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-h3 font-semibold text-blue p-4 text-center">+2300</div>
                <div className="text-center text-h5 font-medium">Person Engaged</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-h3 font-semibold text-blue p-4 text-center">+48000</div>
                <div className="text-center text-h5 font-medium">Issues</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-h3 font-semibold text-blue p-4 text-center">+34000</div>
                <div className="text-center text-h5 font-medium">Issues Solved</div>
            </div>
        </div>
        <img src={shape2} className="absolute hidden md:block bottom-0 left-0 h-[14rem] z-0" />
    </section>
}
export default Statistics;