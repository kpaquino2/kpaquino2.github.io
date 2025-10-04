import { MinusIcon, SquareIcon, XIcon } from "@phosphor-icons/react";
import type { DragControls } from "motion/react";
import { WindowStatus, type WindowStatusType } from "../../lib/types";

interface TitleBarProps {
  title: string;
  controls: DragControls;
  setStatus: (status: WindowStatusType) => void;
}

const TitleBar = ({ title, controls, setStatus }: TitleBarProps) => {
  return (
    <div
      className="border-b h-8 flex items-center justify-between pl-2"
      onPointerDown={(event) => controls.start(event)}
    >
      {title}
      <div className="flex h-full ">
        <button
          onClick={() => setStatus(WindowStatus.MINI)}
          className="border-l w-8 grid place-items-center"
        >
          <MinusIcon />
        </button>
        <button className="border-l w-8 grid place-items-center">
          <SquareIcon />
        </button>
        <button
          onClick={() => setStatus(WindowStatus.CLOSED)}
          className="border-l w-8 grid place-items-center"
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
