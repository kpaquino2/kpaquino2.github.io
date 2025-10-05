import { GearIcon } from "@phosphor-icons/react";
import { useTheme } from "../../lib/hooks/useTheme";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const themes = ["Dark", "Light", "System"];
  return (
    <>
      <button
        className="h-full grid place-items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GearIcon />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="z-50 flex flex-col absolute top-14 border px-2 py-1"
          >
            <div>Theme</div>
            <div className="flex gap-2">
              {themes.map((t) => (
                <button
                  key={t}
                  className={
                    "cursor-pointer " +
                    (theme !== t.toLocaleLowerCase() && "opacity-50")
                  }
                  onClick={() => setTheme(t.toLocaleLowerCase())}
                >
                  {t}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Settings;
