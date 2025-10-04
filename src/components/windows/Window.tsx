import type { ReactNode, RefObject } from "react";
import TitleBar from "./TitleBar";
import { motion, useDragControls } from "motion/react";
import type { WindowStatusType } from "../../lib/types";

interface WindowProps {
  title: string;
  children: ReactNode;
  constraintsRef: RefObject<HTMLDivElement | null>;
  setStatus: (status: WindowStatusType) => void;
}

const Window = ({
  title,
  children,
  constraintsRef,
  setStatus,
}: WindowProps) => {
  const controls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={controls}
      dragMomentum={false}
      dragConstraints={constraintsRef}
      dragElastic={0}
      className="flex flex-col absolute max-w-full max-h-full bg-white dark:bg-black border-1 w-200 h-160"
    >
      <TitleBar title={title} controls={controls} setStatus={setStatus} />
      {children}
    </motion.div>
  );
};

export default Window;
