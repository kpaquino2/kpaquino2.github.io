import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

export const WindowStatus = {
  OPEN: "open",
  MINI: "minimized",
  CLOSED: "closed",
};

export type WindowStatusType = (typeof WindowStatus)[keyof typeof WindowStatus];

export type AppEntry = {
  id: string;
  status: WindowStatusType;
  zIndex: number;
  label: string;
  Icon: Icon;
  Content: () => ReactNode;
};
