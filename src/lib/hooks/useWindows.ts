import { create } from "zustand";
import { WindowStatus, type WindowStatusType } from "../types";

type WindowState = {
  id: string;
  status: WindowStatusType;
  zIndex: number;
};

type WindowStore = {
  windows: WindowState[];
  setWindowState: (id: string, status: WindowStatusType) => void;
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
};

export const useWindows = create<WindowStore>((set) => ({
  windows: [
    {
      id: "terminal",
      status: WindowStatus.CLOSED,
      zIndex: 10,
    },
  ],

  setWindowState: (id, status) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id !== id ? w : { ...w, status: status }
      ),
    })),

  openWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id !== id ? w : { ...w, status: WindowStatus.OPEN }
      ),
    })),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id !== id ? w : { ...w, status: WindowStatus.CLOSED }
      ),
    })),

  minimizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id !== id ? w : { ...w, status: WindowStatus.MINI }
      ),
    })),

  focusWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) => ({
        ...w,
        zIndex: w.id !== id ? 10 : 20,
      })),
    })),
}));
