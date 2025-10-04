import { useDesktop } from "../lib/hooks/useDesktop";
import type { Icon } from "@phosphor-icons/react";

interface DesktopItemProps {
  id: string;
  Icon: Icon;
  label: string;
}

const DesktopItem = ({ id, Icon, label }: DesktopItemProps) => {
  const { openApp } = useDesktop();
  return (
    <button
      aria-label={label}
      className="flex w-18 flex-col items-center p-1 border-1 border-dashed border-transparent focus:border-black dark:focus:border-white focus:ring-0 focus:outline-none"
      onDoubleClick={() => openApp(id)}
    >
      <Icon size={40} className="fill-black dark:fill-white" weight="thin" />
      <p className="text-xs text-center">{label}</p>
    </button>
  );
};

export default DesktopItem;
