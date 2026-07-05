import React from "react";
import Navbar from "./components/Navbar";
import Divider from "./components/Divider";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Work from "./components/Work";


function Page() {
  return (
    <section>
      <Navbar />

      <HeroSection />
      <Divider />

      <Skills />
      <Divider />

      <Work />
    </section>
  );
}

export default Page;