import Navbar from './Navbar';

const HeroSection = ({ isMenuShown }) => {
  return (
    <div className="flex items-start justify-center w-full h-screen text-center"> 
    <img
      src="/assets/images/bg-image.jpg"
      alt="Background Image"
      className="object-cover h-full w-full absolute -z-10"
    />
    <div className="absolute top-0 left-0 w-full bg-transparent p-4">
    <Navbar />
  </div>

    <div className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${isMenuShown ? "opacity-20" : "opacity-100"}`}>
 
  <img
    src="/assets/images/hero-gradient.png" 
    alt="event details" 
    className="w-30 h-20" 
    style={{ margin: "120px 0 0 0" }}
  />
 
</div>

  </div>
  );
};

export default HeroSection;

