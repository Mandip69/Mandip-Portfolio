import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Education from "./components/Education";
import Exprenice from "./components/Exprenice";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      {/* <Hireme /> */}
      <Skills />
      <Project />
      <Education/>
      <Exprenice/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
