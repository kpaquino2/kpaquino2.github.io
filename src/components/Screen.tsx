import DesktopItem from "./DesktopItem";
import Panel from "./Panel";
import { FileTextIcon, TerminalWindowIcon } from "@phosphor-icons/react";
import Terminal from "./windows/Terminal";
import { Fragment, useRef, type ReactNode } from "react";
import { motion } from "motion/react";
import { WindowStatus } from "../lib/types";
import { useWindows } from "../lib/hooks/useWindows";

const Screen = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const { windows } = useWindows();

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

  const windowRegistry: Record<string, () => ReactNode> = {
    terminal: () => <Terminal constraintsRef={constraintsRef} />,
    resume: () => (
      <div className="absolute inset-20 bg-white dark:bg-neutral-800 p-4 rounded-md shadow-lg">
        Resume goes here
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
            <DesktopItem key={item.label} {...item} />
          ))}
          {windows
            .filter((w) => w.status !== WindowStatus.CLOSED)
            .map((w) => {
              const WindowComponent = windowRegistry[w.id];
              if (!WindowComponent) return null;
              return (
                <Fragment key={w.id}>
                  <WindowComponent />
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
