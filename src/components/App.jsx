import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import { Element } from "react-scroll";

const App = () => {
  return (
    <>
      <Element name="home"> </Element>

      <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <div className="mt-[1000px]">I am bottom</div>

        <Element name="about" className="pt-16">
          {/* Content for Section 1 */}

          <section id="section1" className="mb-[1000px]">
            <h2 className="mb-24">Section 1: About</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet.
            </p>
            <div className="">
              <ul className="">
                <li className="">Phasellus dapibus</li>
                <li className="">Nulla quis lorem</li>
                <li className="">Maecenas feugiat</li>
                <li className="">Vivamus luctus</li>
              </ul>
            </div>
          </section>
        </Element>

        <Element name="services" className="pt-16">
          {/* Content for Section 1 */}

          <section id="section2" className="mb-[1000px]">
            <h2 className="">Section 2: Services</h2>
            <p className="">
              Aenean lacinia bibendum nulla sed consectetur. Vestibulum id
              ligula porta felis euismod semper. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
            <article className="">
              <h3 className="">Subsection: Adventures in Ipsum</h3>
              <p className="">
                Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula
                ut id elit. Curabitur blandit tempus porttitor. Cras mattis
                consectetur purus sit amet fermentum.
              </p>
            </article>
            <article className="">
              <h3 className="">Subsection: Further Musings</h3>
              <p className="">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Curabitur aliquet quam id dui posuere blandit.
              </p>
            </article>
          </section>
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
