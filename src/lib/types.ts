export const WindowStatus = {
  OPEN: "open",
  MINI: "minimized",
  CLOSED: "closed",
};

export type WindowStatusType = (typeof WindowStatus)[keyof typeof WindowStatus];
