import { MinusIcon, XIcon } from "@phosphor-icons/react";
import type { DragControls } from "motion/react";
import { useDesktop } from "../../lib/hooks/useDesktop";

interface TitleBarProps {
  id: string;
  title: string;
  controls: DragControls;
}

const TitleBar = ({ id, title, controls }: TitleBarProps) => {
  const { closeApp, minimizeApp } = useDesktop();
  return (
    <div
      className="border-b h-8 flex items-center justify-between pl-2"
      onPointerDown={(event) => controls.start(event)}
    >
      {title}
      <div className="flex h-full ">
        <button
          onClick={() => minimizeApp(id)}
          className="border-l w-8 grid place-items-center"
        >
          <MinusIcon />
        </button>
        <button
          onClick={() => closeApp(id)}
          className="border-l w-8 grid place-items-center"
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
