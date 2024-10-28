"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
let timeInterval: number;
const Time = () => {
  const [time, updateTime] = useState(dayjs().format("ddd MMM D HH:mm A"));
  useEffect(() => {
    timeInterval = window.setInterval(() => {
      updateTime(dayjs().format("ddd MMM D HH:mm A"));
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  return <span className="text-sm pl-1">{time}</span>;
};
export default Time;
