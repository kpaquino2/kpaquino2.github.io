// src/store/desktop.ts
import { create } from "zustand";
import { WindowStatus, type AppEntry, type WindowStatusType } from "../types";
import { FileTextIcon, TerminalWindowIcon } from "@phosphor-icons/react";
import Terminal from "../../components/windows/Terminal";
import Resume from "../../components/windows/Resume";

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
      order: 0,
      Icon: TerminalWindowIcon,
      Content: Terminal,
    },
    {
      id: "resume",
      status: WindowStatus.CLOSED,
      zIndex: 10,
      label: "KyleAquino Resume.pdf",
      order: 0,
      Icon: FileTextIcon,
      Content: Resume,
    },
  ],

  setAppStatus: (id, status) =>
    set((s) => ({
      apps: s.apps.map((a) => (a.id !== id ? a : { ...a, status })),
    })),

  openApp: (id) =>
    set((s) => {
      const maxOder =
        s.apps.filter((a) => a.status !== WindowStatus.CLOSED).length + 1;
      return {
        apps: s.apps.map((a) =>
          a.id !== id
            ? { ...a, zIndex: 10 }
            : { ...a, status: WindowStatus.OPEN, zIndex: 20, order: maxOder }
        ),
      };
    }),

  closeApp: (id) =>
    set((s) => {
      return {
        apps: s.apps.map((a) =>
          a.id !== id
            ? { ...a, order: 1 }
            : { ...a, status: WindowStatus.CLOSED, order: 0 }
        ),
      };
    }),

  minimizeApp: (id) =>
    set((s) => ({
      apps: s.apps.map((a) =>
        a.id !== id ? a : { ...a, status: WindowStatus.MINI, zIndex: 20 }
      ),
    })),

  focusApp: (id) =>
    set((s) => ({
      apps: s.apps.map((a) =>
        a.id !== id
          ? { ...a, zIndex: 10 }
          : { ...a, status: WindowStatus.OPEN, zIndex: 20 }
      ),
    })),
}));
