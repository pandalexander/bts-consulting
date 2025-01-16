import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

import { Element } from "react-scroll";

const App = () => {
  return (
    <>
      <Element name="home"> </Element>

      <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />

        <div className="mt-16"></div>

        <Element name="services" className="pt-16">
          <Services />
        </Element>

        <div className="mt-20"></div>

        <Element name="about" className="pt-16">
          <About />
        </Element>
        <Contact />
      </div>
    </>
  );
};

export default App;
