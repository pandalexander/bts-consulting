import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
      </div>
    </>
  );
};

export default App;
