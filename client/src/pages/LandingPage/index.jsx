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


function LandingPage() {
    return (
      <main className="flex flex-col bg-[#D9D9D9] font-Quicksand">
        <Navbar />
        <Hero />
        <CallToAction />
        <About />
        <Features />
        <Testimonial />
        <SocialProof />
        <Statistics />
        <Footer />
      </main>
    );
}

export default LandingPage;
