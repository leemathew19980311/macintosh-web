import { defaultLeftItems, finderConfig } from "./config";
import RenderLeftItem from "./renderLeftItem";

const TopBar = () => {
  return (
    <header className="h-6 backdrop-blur-3xl px-3 flex items-center cursor-default select-none text-white">
      {defaultLeftItems.map((i) => (
        <RenderLeftItem item={i} key={i.eventMessage} />
      ))}
      {finderConfig.map((i) => (
        <RenderLeftItem item={i} key={i.eventMessage} />
      ))}
    </header>
  );
};

export default TopBar;
