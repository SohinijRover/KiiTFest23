import React from "react";

const GradientBtn = ({ title, className }) => {
  return (
    <button
  className={`bg-gradient-to-b from-thGradBlue via-thGradDBlue to-thGradPink py-2 px-6 text-white rounded-full duration-300 hover:scale-110`}
>
      {title}
    </button>
  );
};

export default GradientBtn;