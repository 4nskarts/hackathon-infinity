import React from "react";
import Button from "../../../components/PrimaryButton";

function Statistics () {
    return <section className="min-h-[80vh] flex justify-around items-center">
        <div>
            <div className="text-h3">Knowledge Growth:</div>
            <div className="text-left text-h5 pb-6 text-[#00000099]">Our platform has contributed to a 40% rise in shared knowledge,<br/> fostering a culture of continuous learning and expertise exchange among team members.</div>
            <Button text={"Learn more"} />
        </div>
        <div>
            <div>
                <div className="text-h3 font-semibold text-blue p-4">+26</div>
                <div className="text-center text-h5 font-medium">Company Enrolled</div>
            </div>
            <div>
                <div className="text-h3 font-semibold text-blue p-4">+2300</div>
                <div className="text-center text-h5 font-medium">Person Engaged</div>
            </div>
            <div>
                <div className="text-h3 font-semibold text-blue p-4">+48000</div>
                <div className="text-center text-h5 font-medium">Issues</div>
            </div>
            <div>
                <div className="text-h3 font-semibold text-blue p-4">+34000</div>
                <div className="text-center text-h5 font-medium">Issues Solved</div>
            </div>
        </div>
    </section>
}
export default Statistics;