import Image from "next/image";

const EventSection = ({ isMenuShown }) => {
  return (
    <div
      className="flex items-start justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"
      style={{
        backgroundImage: 'url("/assets/background-images/events-bg.png")',
      }}
    >
      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${
          isMenuShown ? "opacity-20" : "opacity-100"
        }`}
      >
        <Image
          src="/Assets/Gradients/event_gradient.png"
          alt="event details"
          width={60}
          height={50}
          style={{ alignSelf: "flex-start", marginLeft: 0 }}
        />
      </div>
    </div>
  );
};

export default EventSection;
