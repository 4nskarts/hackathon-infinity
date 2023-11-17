import React from "react";
import Features from "./sections/Features";
import Navbar from "../../components/Navbar";
import Hero from "./sections/Hero";
import SocialProof from "./sections/SocialProof";
import Testimonial from "./sections/Testimonial";
import About from "./sections/About";
import Statistics from "./sections/Statistics";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";
//import svg1 from '../LandingPage/styles/assets/'
function LandingPage() {
    return (
      <main className="flex flex-col bg-white-white-grey">
        <Navbar />
        <Hero />
        {/* <SocialProof /> */}
        <Features />
        <Testimonial />
        <About />
        {/* <Statistics /> */}
        <CallToAction />
        <Footer />
      </main>
    );
}

export default LandingPage;
