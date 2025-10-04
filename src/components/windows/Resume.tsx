import type { RefObject } from "react";
import Window from "./Window";

interface ResumeProps {
  constraintsRef: RefObject<HTMLDivElement | null>;
}

const Resume = ({ constraintsRef }: ResumeProps) => {
  return (
    <Window title="Resume" id="resume" constraintsRef={constraintsRef}>
      <div>TEST</div>
    </Window>
  );
};

export default Resume;
