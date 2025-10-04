// src/store/desktop.ts
import { create } from "zustand";
import { WindowStatus, type WindowStatusType } from "../types";
import {
  FileTextIcon,
  TerminalWindowIcon,
  type Icon,
} from "@phosphor-icons/react";
import Terminal from "../../components/windows/Terminal";
import Resume from "../../components/windows/Resume";
import type { ReactNode, RefObject } from "react";

export type AppEntry = {
  id: string;
  status: WindowStatusType;
  zIndex: number;
  label: string;
  Icon: Icon;
  Window: ({
    constraintsRef,
  }: {
    constraintsRef: RefObject<HTMLDivElement | null>;
  }) => ReactNode;
};

type DesktopStore = {
  apps: AppEntry[];
  setAppStatus: (id: string, status: WindowStatusType) => void;
  openApp: (id: string) => void;
  closeApp: (id: string) => void;
  minimizeApp: (id: string) => void;
  focusApp: (id: string) => void;
};

export const useDesktop = create<DesktopStore>((set) => ({
  apps: [
    {
      id: "terminal",
      status: WindowStatus.CLOSED,
      zIndex: 10,
      label: "Portfolio Terminal",
      Icon: TerminalWindowIcon,
      Window: Terminal,
    },
    {
      id: "resume",
      status: WindowStatus.CLOSED,
      zIndex: 10,
      label: "KyleAquino Resume.pdf",
      Icon: FileTextIcon,
      Window: Resume,
    },
  ],

  setAppStatus: (id, status) =>
    set((s) => ({
      apps: s.apps.map((a) => (a.id !== id ? a : { ...a, status })),
    })),

  openApp: (id) =>
    set((s) => ({
      apps: s.apps.map((a) =>
        a.id !== id ? a : { ...a, status: WindowStatus.OPEN }
      ),
    })),

  closeApp: (id) =>
    set((s) => ({
      apps: s.apps.map((a) =>
        a.id !== id ? a : { ...a, status: WindowStatus.CLOSED }
      ),
    })),

  minimizeApp: (id) =>
    set((s) => ({
      apps: s.apps.map((a) =>
        a.id !== id ? a : { ...a, status: WindowStatus.MINI }
      ),
    })),

  focusApp: (id) =>
    set((s) => {
      const maxZ = Math.max(0, ...s.apps.map((a) => a.zIndex || 0));
      return {
        apps: s.apps.map((a) => (a.id === id ? { ...a, zIndex: maxZ + 1 } : a)),
      };
    }),
}));
