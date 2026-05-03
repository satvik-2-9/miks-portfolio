import React from "react";
import Header from "../components/portfolio/Header";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Experience from "../components/portfolio/Experience";
import FeaturedWork from "../components/portfolio/FeaturedWork";
import ExpertiseEdu from "../components/portfolio/ExpertiseEdu";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";
import { Toaster } from "../components/ui/toaster";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased selection:bg-oxblood selection:text-paper">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedWork />
        <ExpertiseEdu />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
