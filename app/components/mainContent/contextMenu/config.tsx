enum ContextMenuType {
  WORDING = "wording",
  SEPARATOR = "separator",
  SUBMENU = "submenu",
}
const SubMenuIcon = () => (
  <svg
    width="6"
    height="9"
    viewBox="0 0 6 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.21289 4.47461C5.21289 4.57227 5.19336 4.66504 5.1543 4.75293C5.11849 4.83757 5.0599 4.91895 4.97852 4.99707L1.22363 8.67383C1.09668 8.79753 0.942057 8.85938 0.759766 8.85938C0.642578 8.85938 0.533529 8.83008 0.432617 8.77148C0.331706 8.71289 0.250326 8.63477 0.188477 8.53711C0.129883 8.43945 0.100586 8.32878 0.100586 8.20508C0.100586 8.02604 0.168945 7.86654 0.305664 7.72656L3.65039 4.47461L0.305664 1.22266C0.168945 1.08594 0.100586 0.926432 0.100586 0.744141C0.100586 0.623698 0.129883 0.514648 0.188477 0.416992C0.250326 0.316081 0.331706 0.236328 0.432617 0.177734C0.533529 0.119141 0.642578 0.0898438 0.759766 0.0898438C0.942057 0.0898438 1.09668 0.151693 1.22363 0.275391L4.97852 3.95215C5.05664 4.03027 5.11523 4.11165 5.1543 4.19629C5.19336 4.28092 5.21289 4.3737 5.21289 4.47461Z"
      fill="currentColor"
      fillOpacity="0.85"
    />
  </svg>
);

const defaultConfig = [
  {
    type: ContextMenuType.WORDING,
    label: "New Folder",
  },
  {
    type: ContextMenuType.SEPARATOR,
  },
  {
    type: ContextMenuType.WORDING,
    label: "Get Info",
  },
  {
    type: ContextMenuType.WORDING,
    label: "Change Wallpaper...",
  },
  {
    type: ContextMenuType.WORDING,
    label: "Edit Widgets...",
  },
  {
    type: ContextMenuType.SEPARATOR,
  },
  {
    type: ContextMenuType.WORDING,
    label: "Use Stacks",
  },
  {
    type: ContextMenuType.SUBMENU,
    label: "Sort By",
  },
  {
    type: ContextMenuType.WORDING,
    label: "Clean Up",
  },
  {
    type: ContextMenuType.SUBMENU,
    label: "Clean Up By",
  },
  {
    type: ContextMenuType.WORDING,
    label: "Show View Options",
  },
  {
    type: ContextMenuType.SEPARATOR,
  },
  {
    type: ContextMenuType.SUBMENU,
    label: "Import from iPhone",
  },
];

export { defaultConfig, ContextMenuType, SubMenuIcon };
