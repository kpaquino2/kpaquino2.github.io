import { useEffect, useRef, type RefObject } from "react";
import TitleBar from "./TitleBar";
import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from "motion/react";
import { useDesktop } from "../../lib/hooks/useDesktop";
import { WindowStatus, type AppEntry } from "../../lib/types";

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
  const [scope, animate] = useAnimate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const prevpos = useRef<{ x: number; y: number }>({ x: x.get(), y: y.get() });

  useEffect(() => {
    switch (status) {
      case WindowStatus.MINI:
        animate(
          scope.current,
          { scaleY: 1, scale: 0, x: 16, y: -24, opacity: 0 },
          { ease: "easeInOut", duration: 0.4 }
        );
        break;
      case WindowStatus.OPEN:
        animate(
          scope.current,
          {
            scaleY: 1,
            scale: 1,
            x: prevpos.current.x,
            y: prevpos.current.y,
            opacity: 1,
          },
          { ease: "easeInOut", duration: 0.4 }
        );
        break;
    }
  }, [animate, scope, status]);

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
      ref={scope}
    >
      <TitleBar title={label} controls={controls} id={id} />
      <Content />
    </motion.div>
  );
};

export default Window;
