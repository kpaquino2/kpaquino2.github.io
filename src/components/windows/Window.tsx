import type { ReactNode, RefObject } from "react";
import TitleBar from "./TitleBar";
import { motion, useDragControls } from "motion/react";
import { useDesktop } from "../../lib/hooks/useDesktop";

interface WindowProps {
  id: string;
  title: string;
  children: ReactNode;
  constraintsRef: RefObject<HTMLDivElement | null>;
}

const Window = ({ id, title, children, constraintsRef }: WindowProps) => {
  const controls = useDragControls();
  const { setAppStatus } = useDesktop();
  return (
    <motion.div
      drag
      dragControls={controls}
      dragMomentum={false}
      dragConstraints={constraintsRef}
      dragElastic={0}
      className="flex flex-col absolute max-w-full max-h-full bg-white dark:bg-black border-1 w-200 h-160"
    >
      <TitleBar
        title={title}
        controls={controls}
        setStatus={(status) => setAppStatus(id, status)}
      />
      {children}
    </motion.div>
  );
};

export default Window;
