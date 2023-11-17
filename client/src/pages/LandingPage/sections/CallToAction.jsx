import React from "react";

function CallToAction () {
    return <section className="flex flex-col bg-transparent px-5 md:px-32 text-center items-center justify-between min-h-[190px] sm:min-h-[230px]">
        <h1 className="font-bold font-quicksand text-blue text-h3 sm:text-h1">What Is Infinity</h1>
        <p className="text-caption sm:text-p text-[rgba(0, 0, 0, 0.60)]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda iusto facilis ab necessitatibus, cum, obcaecati deleniti, quae praesentium aperiam libero ea nostrum accusantium quaerat numquam quibusdam adipisci laboriosam saepe! Voluptates.</p>
        <button className="bg-yellow text-black px-[24px] py-[12px] text-caption sm:text-p rounded-lg">
            Get Started
        </button>
    </section>    
}
export default CallToAction;