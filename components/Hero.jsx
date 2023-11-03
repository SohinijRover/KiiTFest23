import Navbar from "./Navbar";

const HeroSection = ({ isMenuShown }) => {
  return (
    <div className="flex items-start justify-center w-full h-screen text-center">
      <img
        src="/assets/Background-images/hero-bg.png"
        alt="Background Image"
        className="object-cover h-full w-full absolute -z-10"
      />
      <div className="absolute top-[-23px] left-0 w-full bg-transparent p-4">
        <Navbar />
      </div>

      <div
        className={`p-6 flex flex-col items-center justify-center duration-500 w-full ${
          isMenuShown ? "opacity-20" : "opacity-100"
        }`}
      >
        <img
          src="/assets/gradients/hero_gradient.png"
          alt="event details"
          className="w-1200 h-120"
          style={{ margin: "120px 0 0 0" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
