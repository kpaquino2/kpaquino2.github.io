import { useDesktop } from "../../lib/hooks/useDesktop";
import { WindowStatus } from "../../lib/types";
import { XIcon } from "@phosphor-icons/react";

const OpenApps = () => {
  const { apps, focusApp, minimizeApp, closeApp } = useDesktop();
  return (
    <div className="flex h-full">
      {apps
        .filter((app) => app.status !== WindowStatus.CLOSED)
        .sort((a, b) => a.order - b.order)
        .map((app) => (
          <button
            onClick={() =>
              app.status === WindowStatus.MINI || app.zIndex === 10
                ? focusApp(app.id)
                : minimizeApp(app.id)
            }
            className={
              "group relative flex w-8 items-center justify-between gap-2 border-r px-2 lg:w-68 " +
              (app.status === WindowStatus.MINI || app.zIndex === 10
                ? "opacity-50"
                : "")
            }
            key={app.id}
          >
            <app.Icon />
            <p className="hidden flex-1 lg:flex">{app.label}</p>
            <div
              className="hidden cursor-pointer place-items-center bg-white opacity-0 group-hover:opacity-100 lg:grid dark:bg-black"
              onClick={(e) => {
                e.stopPropagation();
                closeApp(app.id);
              }}
            >
              <XIcon />
            </div>
          </button>
        ))}
    </div>
  );
};

export default OpenApps;
