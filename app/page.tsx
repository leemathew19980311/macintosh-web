import Dock from "./components/dock";
import MainContent from "./components/mainContent";
import TopBar from "./components/topBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <MainContent />
      <Dock />
    </>
  );
}
