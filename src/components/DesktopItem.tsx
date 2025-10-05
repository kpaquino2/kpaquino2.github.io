import { useDesktop } from "../lib/hooks/useDesktop";
import { WindowStatus, type AppEntry } from "../lib/types";

const DesktopItem = ({ id, Icon, label, status }: Partial<AppEntry>) => {
  const { openApp, focusApp } = useDesktop();
  if (!Icon || !id) return;
  return (
    <button
      aria-label={label}
      className="flex w-18 flex-col items-center border-1 border-dashed border-transparent p-1 focus:border-black focus:ring-0 focus:outline-none dark:focus:border-white"
      onDoubleClick={() =>
        status === WindowStatus.OPEN ? focusApp(id) : openApp(id)
      }
    >
      <Icon size={40} className="fill-black dark:fill-white" weight="thin" />
      <p className="text-center text-xs">{label}</p>
    </button>
  );
};

export default DesktopItem;
