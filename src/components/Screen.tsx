import DesktopItem from "./DesktopItem";
import Panel from "./Panel";
import { FileTextIcon, TerminalWindowIcon } from "@phosphor-icons/react";
import Terminal from "./windows/Terminal";
import { Fragment, useRef, useState } from "react";
import { motion } from "motion/react";

const WindowStatus = {
  OPEN: "open",
  MINI: "minimized",
  CLOSED: "closed",
};

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
      window: <Terminal constraintsRef={constraintsRef} />,
      status: WindowStatus.CLOSED,
    },
  ]);

  const openWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id !== id ? w : { ...w, status: WindowStatus.OPEN }))
    );
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
            .map((w) => (
              <Fragment key={w.id}>{w.window}</Fragment>
            ))}
        </motion.div>
        {}
      </div>
    </div>
  );
};

export default Screen;
