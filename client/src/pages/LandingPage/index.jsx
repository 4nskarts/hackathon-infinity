import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "./sections/Hero";
import SocialProof from "./sections/SocialProof";
import Testimonial from "./sections/Testimonial";
import Features from "./sections/Features";
import About from "./sections/About";
import Statistics from "./sections/Statistics";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";

function LandingPage() {
    return (
        <main className="flex flex-col">
            <Navbar />
            <Hero />
            <SocialProof />
            <Testimonial />
            <Features />
            <About />
            <Statistics />
            <CallToAction />
            <Footer />
        </main>
    );
}

export default LandingPage;
