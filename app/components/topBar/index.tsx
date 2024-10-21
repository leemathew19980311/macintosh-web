import { defaultLeftItems, finderConfig } from "./config";
import RenderLeftItem from "./components/renderLeftItem";

const TopBar = () => {
  return (
    <header className="h-6 px-2 flex items-center bg-white/50">
      {[...defaultLeftItems, ...finderConfig].map((i) => (
        <RenderLeftItem item={i} key={i.eventMessage} />
      ))}
    </header>
  );
};

export default TopBar;
