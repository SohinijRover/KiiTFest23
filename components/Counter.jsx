import React from "react";
import Timer from "./Timer";
const Counter = ({ isMenuShown }) => {
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
        <h1 class="mt-2 mb-4">
          <img
            src="/assets/gradients/timer_h1.png"
            alt="event details"
            className="w-120 h-90"
            style={{ alignSelf: "flex-start", marginLeft: 0 }}
          />
        </h1>
        <h2 class="mb-10">
          <img
            src="/assets/gradients/timer_h2.png"
            alt="event details"
            className="w-70 h-70"
            style={{ alignSelf: "flex-start", marginLeft: 0 }}
          />
        </h2>
        <Timer />
      </div>
    </div>
  );
};

export default Counter;
