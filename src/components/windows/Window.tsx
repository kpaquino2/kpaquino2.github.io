import type { ReactNode, RefObject } from "react";
import TitleBar from "./TitleBar";
import { motion, useDragControls } from "motion/react";

interface WindowProps {
  title: string;
  children: ReactNode;
  constraintsRef: RefObject<HTMLDivElement | null>;
}

const Window = ({ title, children, constraintsRef }: WindowProps) => {
  const controls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={controls}
      dragMomentum={false}
      dragConstraints={constraintsRef}
      dragElastic={0}
      className="flex flex-col absolute bg-white dark:bg-black border-1 w-200 h-160"
    >
      <TitleBar title={title} controls={controls} />
      {children}
    </motion.div>
  );
};

export default Window;
