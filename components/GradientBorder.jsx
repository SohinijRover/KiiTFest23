import React from "react";

const GradientBorder = ({ title, className }) => {
  return (
    <button
      className={`border-4 border-gradient-to-b from-thGradBlue via-thGradDBlue to-thGradPink py-2 px-6 text-white rounded-full duration-300 hover:scale-110 bg-transparent`}
    >
      {title}
    </button>
  );
};

export default GradientBorder;
