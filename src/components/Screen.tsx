import DesktopItem from "./DesktopItem";
import Panel from "./Panel";
import { FileTextIcon, TerminalWindowIcon } from "@phosphor-icons/react";
import Terminal from "./windows/Terminal";
import { Fragment, useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { WindowStatus, type WindowStatusType } from "../lib/types";

const Screen = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  const desktopItems = [
    {
      id: "terminal",
      icon: (
        <TerminalWindowIcon
          size={40}
          className="fill-black dark:fill-white"
          weight="thin"
        />
      ),
      label: "Portfolio Terminal",
    },
    {
      id: "resume",
      icon: (
        <FileTextIcon
          size={40}
          className="fill-black dark:fill-white"
          weight="thin"
        />
      ),
      label: "KyleAquino Resume.pdf",
    },
  ];

  const [windows, setWindows] = useState([
    {
      id: "terminal",
      status: WindowStatus.CLOSED,
    },
  ]);

  const openWindow = (id: string) => {
    setWindowStatus(id, WindowStatus.OPEN);
  };

  const setWindowStatus = (id: string, status: WindowStatusType) => {
    setWindows((prev) => prev.map((w) => (w.id !== id ? w : { ...w, status })));
  };

  const windowRegistry: Record<
    string,
    (props: { setStatus: (s: WindowStatusType) => void }) => ReactNode
  > = {
    terminal: ({ setStatus }) => (
      <Terminal constraintsRef={constraintsRef} setStatus={setStatus} />
    ),
    resume: ({ setStatus }) => (
      <div className="absolute inset-20 bg-white dark:bg-neutral-800 p-4 rounded-md shadow-lg">
        Resume goes here
        <button onClick={() => setStatus(WindowStatus.CLOSED)}>Close</button>
      </div>
    ),
  };

  return (
    <div className="h-screen w-screen">
      <div className="h-full flex flex-col gap-2 p-4">
        <Panel />
        <motion.div
          ref={constraintsRef}
          className="relative flex-1 grid auto-cols-[4.5rem] auto-rows-min gap-2 "
        >
          {desktopItems.map((item) => (
            <DesktopItem key={item.label} {...item} openWindow={openWindow} />
          ))}
          {windows
            .filter((w) => w.status === WindowStatus.OPEN)
            .map((w) => {
              const WindowComponent = windowRegistry[w.id];
              if (!WindowComponent) return null;
              return (
                <Fragment key={w.id}>
                  <WindowComponent
                    setStatus={(status) => setWindowStatus(w.id, status)}
                  />
                </Fragment>
              );
            })}
        </motion.div>
        {}
      </div>
    </div>
  );
};

export default Screen;
