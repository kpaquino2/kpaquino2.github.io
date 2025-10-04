import type { DragControls } from "motion/react";

interface TitleBarProps {
  title: string;
  controls: DragControls;
}

const TitleBar = ({ title, controls }: TitleBarProps) => {
  return (
    <div
      className="border-b h-8 flex items-center justify-between pl-2"
      onPointerDown={(event) => controls.start(event)}
    >
      {title}
      <div></div>
    </div>
  );
};

export default TitleBar;
