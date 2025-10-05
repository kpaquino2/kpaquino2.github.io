import DesktopItem from "./DesktopItem";
import Panel from "./panel/Panel";
import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { WindowStatus } from "../lib/types";
import { useDesktop } from "../lib/hooks/useDesktop";
import Window from "./windows/Window";

const Screen = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const { apps } = useDesktop();

  return (
    <div className="h-screen w-screen">
      <div className="flex h-full flex-col gap-2 p-4">
        <Panel />
        <motion.div
          ref={constraintsRef}
          className="relative grid flex-1 auto-cols-[4.5rem] auto-rows-min gap-2"
        >
          {apps.map((item) => (
            <DesktopItem key={item.label} {...item} />
          ))}
          <AnimatePresence>
            {apps
              .filter((app) => app.status !== WindowStatus.CLOSED)
              .map((app) => (
                <Window key={app.id} constraintsRef={constraintsRef} {...app} />
              ))}
          </AnimatePresence>
        </motion.div>
        {}
      </div>
    </div>
  );
};

export default Screen;
