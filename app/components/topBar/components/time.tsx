"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
let timeInterval: number;
const Time = () => {
  const [_, updateTime] = useState({});
  useEffect(() => {
    timeInterval = window.setInterval(() => {
      updateTime({});
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  return (
    <span className="text-sm pl-1">{dayjs().format("ddd MMM D HH:mm A")}</span>
  );
};
export default Time;
