import type { ReactNode } from "react";
import TitleBar from "./TitleBar";

interface WindowProps {
  title: string;
  children: ReactNode;
}

const Window = ({ title, children }: WindowProps) => {
  return (
    <div className="flex flex-col absolute bg-white dark:bg-black border-1 w-200 h-160">
      <TitleBar title={title} />
      {children}
    </div>
  );
};

export default Window;
