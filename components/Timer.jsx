import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
// import {Robot_Invaders } from 'next/font/google'

const Timer = () => {
  const ct = new Date("Feb 10, 2024 00:00:00").getTime();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    function updateCountdown() {
      const currentDate = new Date().getTime();
      const timeRemaining = ct - currentDate;

      setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );

      setMinutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));

      setSeconds(Math.floor((timeRemaining % (1000 * 60)) / 1000));
    }
    setInterval(updateCountdown, 1000);
  }, []);

  return (
    <div className="flex gap-6">
      <div className="h-[106px] p-2  flex flex-col justify-between items-center text-white bg-gradient-to-b w-[110px] rounded-lg from-thGradBlue via-thGradDBlue to-thGradPink">
        <div className="text-5xl">{days}</div>
        <div className="text-3xl">DAYS</div>
      </div>
      <div className="h-[106px] p-2  flex flex-col justify-between items-center text-white bg-gradient-to-b w-[110px] rounded-lg from-thGradBlue via-thGradDBlue to-thGradPink">
        <div className="text-5xl">{hours}</div>
        <div className="text-3xl">HOURS</div>
      </div>
      <img src="/Assets/Timer/Dots.svg" alt="dots" />
      <div className="h-[106px] p-2  flex flex-col justify-between items-center text-white bg-gradient-to-b w-[110px] rounded-lg from-thGradBlue via-thGradDBlue to-thGradPink">
        <div className="text-5xl">{minutes}</div>
        <div className="text-3xl">MINS</div>
      </div>
      <div className="h-[106px] p-2  flex flex-col justify-between items-center text-white bg-gradient-to-b w-[110px] rounded-lg from-thGradBlue via-thGradDBlue to-thGradPink">
        <div className="text-5xl">{seconds}</div>
        <div className="text-3xl">SECS</div>
      </div>
    </div>
  );
};

export default Timer;
