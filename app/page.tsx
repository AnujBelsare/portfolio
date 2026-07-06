"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Divider from "./components/Divider";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import ProjectShowcase from "./components/ProjectShowcase";
import Footer from "./components/Footer";

function Page() {
  return (
    <div>
      <Navbar />

      <HeroSection />
      <Divider />

      <Skills />
      <Divider />

      <Work />
      <Divider />

      <ProjectShowcase />
      <Divider />
      <Education />
      <Divider />

      <Footer />
    </div>
  );
}

export default Page;