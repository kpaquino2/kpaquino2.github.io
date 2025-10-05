import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

export const WindowStatus = {
  OPEN: "open",
  MINI: "minimized",
  CLOSED: "closed",
} as const;

export type WindowStatusType = (typeof WindowStatus)[keyof typeof WindowStatus];

export type AppEntry = {
  id: string;
  status: WindowStatusType;
  zIndex: number;
  label: string;
  order: number;
  Icon: Icon;
  Content: ({ active }: { active: boolean }) => ReactNode;
};
