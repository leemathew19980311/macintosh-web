const defaultConfig = [
  {
    label: "Finder",
    iconPath: "/icons/finder.svg",
    isActive: true,
  },
  {
    label: "Launch Pad",
    iconPath: "/icons/launchPad.svg",
    isActive: false,
  },
  {
    label: "Mails",
    iconPath: "/icons/mails.svg",
    isActive: false,
  },
  {
    label: "Contacts",
    iconPath: "/icons/contacts.svg",
    isActive: false,
  },
  {
    label: "Calendar",
    iconPath: "/icons/calendar.svg",
    isActive: false,
  },
  {
    label: "Maps",
    iconPath: "/icons/maps.svg",
    isActive: false,
  },
  {
    label: "Messages",
    iconPath: "/icons/messages.svg",
    isActive: false,
  },
  {
    label: "FaceTime",
    iconPath: "/icons/faceTime.svg",
    isActive: false,
  },
  {
    label: "App Store",
    iconPath: "/icons/appleStore.svg",
    isActive: false,
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

export { defaultConfig, ActiveIcon };
