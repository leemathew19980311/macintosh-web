import Image from "next/image";
import { TopBarLeftItem } from "../config";
const IconComponent: React.FC<{ item: TopBarLeftItem }> = ({ item }) => {
  const icon = item.icon!;
  return (
    <button
      className="cursor-default normal-case h-6 flex items-center rounded hover:bg-white/20 px-3"
      color="inherit"
    >
      <Image
        src={icon.src}
        alt={icon.alt}
        width={icon.width}
        height={icon.height}
      />
    </button>
  );
};

export default IconComponent;
