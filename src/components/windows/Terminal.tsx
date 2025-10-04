import type { RefObject } from "react";
import Window from "./Window";

interface TerminalProps {
  constraintsRef: RefObject<HTMLDivElement | null>;
}

const Terminal = ({ constraintsRef }: TerminalProps) => {
  return (
    <Window title="Terminal" constraintsRef={constraintsRef}>
      <div>TEST</div>
    </Window>
  );
};

export default Terminal;
