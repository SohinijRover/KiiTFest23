import Image from "next/image";

const HeroSection = ({ isMenuShown }) => {
  return (
    <div className="relative min-h-screen">
      <video
        src="/assets/bg-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-65">
        <Image
          src="/assets/coming-soon.png"
          width={700} 
          height={108}
         
          objectFit="center"
          alt="Coming Soon Image"
          style={{
            margin: "0 auto", 
            marginTop: "-5px", 
          }}
        />
      </div>

    </div>
  );
};

export default HeroSection;
