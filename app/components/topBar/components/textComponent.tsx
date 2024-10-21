import { TopBarLeftItem } from "../config";

const TextComponent: React.FC<{ item: TopBarLeftItem }> = ({ item }) => {
  const { text, bold } = item;
  return (
    <button
      className={`cursor-default normal-case h-6 flex items-center rounded hover:bg-white/20 px-3 ${
        bold && "font-semibold"
      }`}
      color="inherit"
    >
      {text}
    </button>
  );
};

export default TextComponent;
