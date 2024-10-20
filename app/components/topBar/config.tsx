interface TopBarLeftItemBase {
  icon?: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  text?: string;
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
      src: "/icons/apple-icon-white.svg",
      alt: "Macintosh",
      height: 18,
      width: 18,
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

export { defaultLeftItems, finderConfig };
export type { TopBarLeftItem };
