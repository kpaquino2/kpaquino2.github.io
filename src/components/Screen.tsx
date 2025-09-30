import Panel from "./Panel";
import { FileTextIcon, TerminalWindowIcon } from "@phosphor-icons/react";

const Screen = () => {
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
    <div className="h-screen w-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="h-full flex flex-col gap-2 p-4">
        <Panel />
        <div className="flex-1 grid auto-cols-[4.5rem] auto-rows-min gap-2 ">
          {desktopItems.map((item) => (
            <div
              key={item.label}
              className="flex w-18 flex-col items-center p-1"
            >
              {item.icon}
              <p className="text-xs text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screen;
