import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import GradientBtn from "./GradientBtn";

const Sliding = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div className="bg-transparent h-[450px] text-white rounded-xl">
          <div className="flex justify-center items-center">
          <img src={d.img} alt="images"/>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
          <p className="text-xl ">{d.details}</p>
       
          <GradientBtn className="ml-2 capitalize" title="Get Started" />
          
          </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
    
  );
};

const data = [
  {
    img: "assets/Images/event-card-1.png",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`,
  },
  {
    img: "assets/Images/event-card-2.png",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`,
  },
  {
    img: "assets/Images/event-card-3.png",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`,
  },
  {
    img: "assets/Images/event-card-1.png",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`,
  },
  {
    img: "assets/Images/event-card-2.png",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`,
  },
  {
    img: "assets/Images/event-card-3.png",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`,
  },
  {
    img: "assets/Images/event-card-1.png",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`,
  },
  {
    img: "assets/Images/event-card-2.png",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`,
  },
];

export default Sliding;
