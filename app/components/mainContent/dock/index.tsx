"use client";
import { Button } from "@/components/ui/button";
import { ActiveIcon, defaultConfig } from "./config";

const Dock = () => {
  console.log("Dock");
  return (
    <div className="absolute bottom-2 h-[65px] left-0 right-0 flex justify-center items-center">
      <div className="bg-[#F6F6F6]/[0.36] rounded-2xl border-[#1A1A1A] border-solid border-opacity-10 border h-full flex gap-x-2 items-center px-2">
        {defaultConfig.map((item) => {
          return (
            <Button
              variant="link"
              className="flex p-0 h-auto flex-col items-center gap-0  transition-all duration-300 ease-in-out"
            >
              <img src={item.iconPath} width={55} />
              {item.isActive && <ActiveIcon fill="#808080" />}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;
