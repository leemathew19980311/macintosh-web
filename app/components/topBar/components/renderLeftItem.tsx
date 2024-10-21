import { TopBarLeftItem } from "../config";

import IconComponent from "./iconComponent";
import TextComponent from "./textComponent";

const RenderLeftItem: React.FC<{ item: TopBarLeftItem }> = ({ item }) => {
  const { icon, text } = item;

  return (
    <>
      {icon && <IconComponent item={item} />}
      {text && <TextComponent item={item} />}
    </>
  );
};

export default RenderLeftItem;
