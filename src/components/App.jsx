import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";

import { Element } from "react-scroll";

const App = () => {
  return (
    <>
      <Element name="home"> </Element>

      <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <div className="mt-20"></div>

        <Element name="about" className="pt-16">
          <About />
        </Element>

        <div className="mt-16"></div>

        <Element name="services" className="pt-16">
          <Services />
        </Element>

        <Element name="contact" className="pt-16">
          {/* Content for Section 1 */}

          <section id="section3" className="mb-[1000px]">
            <h2 className="">Section 3: Contact</h2>
            <blockquote className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </blockquote>
            <p className="">
              Mauris posuere congue est. Sed dapibus, leo eget bibendum sodales,
              augue velit cursus nunc, quis gravida magna mi a libero.
            </p>
            <div className="">
              <img
                src="https://via.placeholder.com/300"
                alt="Placeholder"
                className=""
              />
              <figcaption className="">
                A placeholder image for your imagination.
              </figcaption>
            </div>
          </section>
        </Element>
      </div>
    </>
  );
};

export default App;
