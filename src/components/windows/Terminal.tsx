import type { RefObject } from "react";
import Window from "./Window";
import type { WindowStatusType } from "../../lib/types";

interface TerminalProps {
  constraintsRef: RefObject<HTMLDivElement | null>;
  setStatus: (status: WindowStatusType) => void;
}

const Terminal = ({ constraintsRef, setStatus }: TerminalProps) => {
  return (
    <Window
      title="Terminal"
      constraintsRef={constraintsRef}
      setStatus={setStatus}
    >
      <div>TEST</div>
    </Window>
  );
};

export default Terminal;
