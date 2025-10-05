import { MinusIcon, XIcon } from "@phosphor-icons/react";
import type { DragControls } from "motion/react";
import { useDesktop } from "../../lib/hooks/useDesktop";
import type { AppEntry } from "../../lib/types";
interface TitleBarProps {
  controls: DragControls;
}

const TitleBar = ({
  id,
  label,
  controls,
  zIndex,
}: TitleBarProps & Partial<AppEntry>) => {
  const { closeApp, minimizeApp } = useDesktop();
  return (
    <div
      className="flex h-8 items-center justify-between border-b pl-2"
      onPointerDown={(event) => controls.start(event)}
    >
      <p className={zIndex === 10 ? "opacity-50" : ""}>{label}</p>
      <div className="flex h-full">
        <button
          onClick={() => minimizeApp(id!)}
          className="grid w-8 place-items-center border-l"
        >
          <MinusIcon />
        </button>
        <button
          onClick={() => closeApp(id!)}
          className="grid w-8 place-items-center border-l"
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
