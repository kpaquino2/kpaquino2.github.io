import DesktopItem from "./DesktopItem";
import Panel from "./Panel";
import { FileTextIcon, TerminalWindowIcon } from "@phosphor-icons/react";
import Terminal from "./windows/Terminal";
import { useRef } from "react";
import { motion } from "motion/react";

const Screen = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  const desktopItems = [
    {
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
          <Terminal constraintsRef={constraintsRef} />
        </motion.div>
      </div>
    </div>
  );
};

export default Screen;
