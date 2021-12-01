const Items = {
  Track: {
    type: "Track",
    defaultPlaceholder: "#NowPlaying\n%name% - %artists% \n%url%",
  },
  Episode: {
    type: "Episode",
    defaultPlaceholder: "#NowListening\n%name%\n%url%",
  },
} as const;

export type ItemType = typeof Items[keyof typeof Items];
export {Items}
