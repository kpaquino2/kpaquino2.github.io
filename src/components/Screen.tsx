import DesktopItem from "./DesktopItem";
import Panel from "./Panel";
import { FileTextIcon, TerminalWindowIcon } from "@phosphor-icons/react";
import Terminal from "./windows/Terminal";

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
    <div className="h-screen w-screen">
      <div className="h-full flex flex-col gap-2 p-4">
        <Panel />
        <div className="relative flex-1 grid auto-cols-[4.5rem] auto-rows-min gap-2 ">
          {desktopItems.map((item) => (
            <DesktopItem key={item.label} {...item} />
          ))}
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default Screen;
