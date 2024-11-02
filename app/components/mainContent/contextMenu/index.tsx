import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { ContextMenuType, defaultConfig, SubMenuIcon } from "./config";

const ContextMenuRenderer = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="h-full w-full inline-block"></ContextMenuTrigger>
      <ContextMenuContent className="bg-[#F6F6F6]/60 drop-shadow-2xl border-none rounded-md p-1">
        {defaultConfig.map((item) => {
          if (item.type === ContextMenuType.SEPARATOR) {
            return <div className="py-0 my-1 mx-2 h-[1px] bg-black/10"></div>;
          } else {
            return (
              <ContextMenuItem className="py-0 px-2 leading-[22px] flex items-center justify-between gap-x-8 hover:!bg-[#0A82FF]/75 hover:!text-white">
                {item.label}
                {item.type === ContextMenuType.SUBMENU && <SubMenuIcon />}
              </ContextMenuItem>
            );
          }
        })}
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ContextMenuRenderer;
