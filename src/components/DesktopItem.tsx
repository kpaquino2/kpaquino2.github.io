import type { ReactNode } from "react";
import { useWindows } from "../lib/hooks/useWindows";

interface DesktopItemProps {
  id: string;
  icon: ReactNode;
  label: string;
}

const DesktopItem = ({ id, icon, label }: DesktopItemProps) => {
  const { openWindow } = useWindows();
  return (
    <button
      aria-label={label}
      className="flex w-18 flex-col items-center p-1 border-1 border-dashed border-transparent focus:border-black dark:focus:border-white focus:ring-0 focus:outline-none"
      onDoubleClick={() => openWindow(id)}
    >
      {icon}
      <p className="text-xs text-center">{label}</p>
    </button>
  );
};

export default DesktopItem;
