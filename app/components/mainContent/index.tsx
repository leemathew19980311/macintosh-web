import ContextMenuRenderer from "./contextMenu";
import Dock from "./dock";

const MainContent = () => {
  return (
    <main className="h-[calc(100vh-24px)] relative">
      <ContextMenuRenderer />
      <Dock />
    </main>
  );
};

export default MainContent;
