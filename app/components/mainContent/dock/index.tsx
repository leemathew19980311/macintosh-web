"use client";
import { Button } from "@/components/ui/button";
import { ActiveIcon, defaultConfig, DockItemType } from "./config";
import clsx from "clsx";
import { useState } from "react";

const Dock = () => {
  const [list, setList] = useState(defaultConfig);
  const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const buttons = document.querySelectorAll("button[data-index]");
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distances = Array.from(buttons).map((button) => {
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(buttonCenterX - mouseX, 2) +
          Math.pow(buttonCenterY - mouseY, 2)
      );
      return { button, distance };
    });

    distances.sort((a, b) => a.distance - b.distance);

    const closestButtons = distances.slice(0, 2).map((item) => item.button);
    console.log("Closest buttons:", closestButtons);
  };
  return (
    <div className="absolute bottom-2 h-[65px] left-0 right-0 flex justify-center items-center">
      <div
        onMouseMove={mouseMoveHandler}
        className="bg-[#F6F6F6]/[0.36] rounded-2xl border-[#1A1A1A] border-solid border-opacity-10 border h-full flex items-center px-1 pt-1 transition-all duration-300 ease-in-out"
      >
        {list.map((item, index) => {
          if (item.type === DockItemType.APP) {
            return (
              <Button
                data-index={index}
                variant="link"
                className={clsx(
                  "flex p-0 h-auto flex-col items-center gap-0 cursor-default",
                  {
                    "pb-1": !item.isActive,
                  }
                )}
              >
                <img src={item.iconPath} width={55} />
                {item.isActive && <ActiveIcon fill="#808080" />}
              </Button>
            );
          } else if (item.type === DockItemType.SEPARATOR) {
            return <div className="w-[1px] bg-[#E8E8E8] h-11 mb-1 mx-2"></div>;
          }
        })}
      </div>
    </div>
  );
};

export default Dock;
