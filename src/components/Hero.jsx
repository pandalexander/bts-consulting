const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-6 lg:mt 20">
        <h1 className="text-6xl sm:text-8xl lg:text-8xl text-center tracking-wide ">
          The Taxpayer’s{" "}
          <span className="bg-gradient-to-br from-amber-300 to-amber-700 bg-clip-text text-transparent">
            Champion
          </span>
        </h1>
        <h2 className="text-balance font-semibold p-4 lg:mt-4 text-xl sm:text-3xl lg:text-4xl text-center tracking-tight bg-gradient-to-r from-sky-400 to-sky-700 bg-clip-text text-transparent">
          Expert Tax & Accounting Services Since 2010
        </h2>
      </div>
    </div>
  );
};

export default Hero;
