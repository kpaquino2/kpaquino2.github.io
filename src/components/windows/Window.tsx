import { useRef, type RefObject } from "react";
import TitleBar from "./TitleBar";
import { motion, useDragControls, useMotionValue } from "motion/react";
import { useDesktop } from "../../lib/hooks/useDesktop";
import { type AppEntry } from "../../lib/types";

interface WindowProps {
  constraintsRef: RefObject<HTMLDivElement | null>;
}

const Window = ({
  id,
  label,
  status,
  zIndex,
  Content,
  constraintsRef,
}: WindowProps & AppEntry) => {
  const controls = useDragControls();
  const { focusApp } = useDesktop();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const prevpos = useRef<{ x: number; y: number }>({ x: x.get(), y: y.get() });
  const variants = {
    minimized: { scale: 0, x: 16, y: -24, opacity: 0 },
    open: {
      scaleY: 1,
      scale: 1,
      x: prevpos.current.x,
      y: prevpos.current.y,
      opacity: 1,
    },
    closed: { scale: 0, x: 16, y: -24, opacity: 0 },
  };

  return (
    <motion.div
      drag
      dragControls={controls}
      dragMomentum={false}
      dragConstraints={constraintsRef}
      dragElastic={0}
      onDragEnd={() => {
        prevpos.current = { x: x.get(), y: y.get() };
      }}
      className="flex flex-col absolute max-w-full max-h-full bg-white dark:bg-black border-1 w-200 h-160"
      onMouseDown={() => focusApp(id)}
      style={{ zIndex, transformOrigin: "top left", x, y }}
      animate={variants[status]}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <TitleBar title={label} controls={controls} id={id} />
      <Content />
    </motion.div>
  );
};

export default Window;
