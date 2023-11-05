import Navbar from "./Navbar";
import Image from "next/image";

const HeroSection = ({ isMenuShown }) => {
  return (
    <div className="flex items-start justify-center w-full h-screen text-center">
      <Image
        src="/Assets/Background-images/hero-bg.png"
        alt="event details"
        width={100}
        height={100}
        className="object-cover h-full w-full absolute -z-10"
        style={{ margin: "120px 0 0 0" }}
      />
      <div className="absolute top-[-23px] left-0 w-full bg-transparent p-4">
        <Navbar />
      </div>

      <div
        className={`p-6 flex flex-col items-center justify-center duration-500 w-full ${
          isMenuShown ? "opacity-20" : "opacity-100"
        }`}
      >
        <Image
          src="/Assets/Gradients/hero_gradient.png"
          alt="event details"
          width={100}
          height={100}
          style={{ margin: "120px 0 0 0" }}
          className="w-1200 h-120"
        />
      </div>
    </div>
  );
};

export default HeroSection;
