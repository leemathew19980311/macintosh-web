interface TopBarLeftItemBase {
  icon?: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  text?: string;
  bold?: boolean;
  children?: TopBarLeftItem[];
  divider?: boolean;
}

interface TopBarLeftItemWithEventMessage extends TopBarLeftItemBase {
  eventMessage: string; // 必须有 eventMessage
}

interface TopBarLeftItemWithDivider extends TopBarLeftItemBase {
  divider: true; // divider 必须为 true
  eventMessage?: string; // divider 为 true 时可选
}

type TopBarLeftItem =
  | TopBarLeftItemWithEventMessage
  | TopBarLeftItemWithDivider;

const defaultLeftItems: TopBarLeftItem[] = [
  {
    icon: {
      src: "/icons/apple-icon-black.svg",
      alt: "Macintosh",
      height: 20,
      width: 15,
    },
    eventMessage: "click-apple-icon",
    children: [
      {
        text: "About This Mac",
        eventMessage: "click-about-this-mac",
      },
    ],
  },
];

const finderConfig: TopBarLeftItem[] = [
  {
    text: "Finder",
    eventMessage: "click-finder",
    bold: true,
    children: [
      {
        text: "About Finder",
        eventMessage: "click-about-finder",
      },
      {
        divider: true,
      },
      {
        text: "Settings...",
        eventMessage: "click-settings",
      },
      {
        divider: true,
      },
      {
        text: "Empty Trash...",
        eventMessage: "click-empty-trash",
      },
    ],
  },
  {
    text: "File",
    eventMessage: "click-file",
    children: [
      {
        text: "About Finder",
        eventMessage: "click-about-finder",
      },
      {
        divider: true,
      },
      {
        text: "Settings...",
        eventMessage: "click-settings",
      },
      {
        divider: true,
      },
      {
        text: "Empty Trash...",
        eventMessage: "click-empty-trash",
      },
    ],
  },
];

const RightDefaultItems: TopBarLeftItem[] = [
  {
    icon: {
      src: "/icons/wifi.svg",
      alt: "wifi",
      height: 18,
      width: 18,
    },
    eventMessage: "click-wifi",
  },
  {
    icon: {
      src: "/icons/search.svg",
      alt: "wifi",
      height: 16,
      width: 16,
    },
    eventMessage: "click-search",
  },
  {
    icon: {
      src: "/icons/user.svg",
      alt: "wifi",
      height: 18,
      width: 18,
    },
    eventMessage: "click-user",
  },
  {
    icon: {
      src: "/icons/config.svg",
      alt: "wifi",
      height: 16,
      width: 16,
    },
    eventMessage: "click-config",
  },
];

export { defaultLeftItems, finderConfig, RightDefaultItems };
export type { TopBarLeftItem };
