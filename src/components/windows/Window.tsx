import type { RefObject } from "react";
import TitleBar from "./TitleBar";
import { motion, useDragControls } from "motion/react";
import { useDesktop } from "../../lib/hooks/useDesktop";
import type { AppEntry } from "../../lib/types";

interface WindowProps {
  constraintsRef: RefObject<HTMLDivElement | null>;
}

const Window = ({
  id,
  label,
  zIndex,
  Content,
  constraintsRef,
}: WindowProps & AppEntry) => {
  const controls = useDragControls();
  const { setAppStatus, focusApp } = useDesktop();
  return (
    <motion.div
      drag
      dragControls={controls}
      dragMomentum={false}
      dragConstraints={constraintsRef}
      dragElastic={0}
      className="flex flex-col absolute max-w-full max-h-full bg-white dark:bg-black border-1 w-200 h-160"
      onMouseDown={() => focusApp(id)}
      style={{ zIndex }}
    >
      <TitleBar
        title={label}
        controls={controls}
        setStatus={(status) => setAppStatus(id, status)}
      />
      <Content />
    </motion.div>
  );
};

export default Window;
