enum DockItemType {
  APP,
  SEPARATOR,
}
type DockItem =
  | { type: DockItemType.SEPARATOR }
  | {
      label: string;
      iconPath: string;
      isActive: boolean;
      type: DockItemType.APP;
    };

const defaultConfig: DockItem[] = [
  {
    label: "Finder",
    iconPath: "/icons/finder.svg",
    isActive: true,
    type: DockItemType.APP,
  },
  {
    label: "Launch Pad",
    iconPath: "/icons/launchPad.svg",
    isActive: false,
    type: DockItemType.APP,
  },
  {
    label: "Mails",
    iconPath: "/icons/mails.svg",
    isActive: false,
    type: DockItemType.APP,
  },
  {
    label: "Contacts",
    iconPath: "/icons/contacts.svg",
    isActive: false,
    type: DockItemType.APP,
  },
  {
    label: "Calendar",
    iconPath: "/icons/calendar.svg",
    isActive: false,
    type: DockItemType.APP,
  },
  {
    label: "Maps",
    iconPath: "/icons/maps.svg",
    isActive: false,
    type: DockItemType.APP,
  },
  {
    label: "Messages",
    iconPath: "/icons/messages.svg",
    isActive: false,
    type: DockItemType.APP,
  },
  {
    label: "FaceTime",
    iconPath: "/icons/faceTime.svg",
    isActive: false,
    type: DockItemType.APP,
  },
  {
    label: "App Store",
    iconPath: "/icons/appleStore.svg",
    isActive: false,
    type: DockItemType.APP,
  },
  {
    type: DockItemType.SEPARATOR,
  },
  {
    label: "Trash",
    iconPath: "/icons/trashFull.svg",
    isActive: false,
    type: DockItemType.APP,
  },
];
const ActiveIcon = ({ fill = "#808080" }: { fill: string }) => (
  <svg
    className="!w-1 !h-1"
    width="4"
    height="4"
    viewBox="0 0 4 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g style={{ mixBlendMode: "multiply" }}>
      <circle cx="2" cy="2" r="2" fill={fill} />
    </g>
  </svg>
);

export { defaultConfig, ActiveIcon, DockItemType };
