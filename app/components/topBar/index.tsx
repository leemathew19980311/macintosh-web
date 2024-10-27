import { defaultLeftItems, finderConfig, RightDefaultItems } from "./config";
import RenderLeftItem from "./components/renderLeftItem";
import Time from "./components/time";

const TopBar = () => {
  return (
    <header className="h-6 px-2 flex items-center bg-white/50">
      {[...defaultLeftItems, ...finderConfig].map((i) => (
        <RenderLeftItem item={i} key={i.eventMessage} />
      ))}
      <div className="ml-auto flex items-center">
        {RightDefaultItems.map((i) => (
          <RenderLeftItem item={i} key={i.eventMessage} />
        ))}
        <Time />
      </div>
    </header>
  );
};

export default TopBar;
