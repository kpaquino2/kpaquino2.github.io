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
              "border-r items-center group relative lg:w-68 w-8 justify-between flex gap-2 px-2 " +
              (app.status === WindowStatus.MINI || app.zIndex === 10
                ? "opacity-50"
                : "")
            }
            key={app.id}
          >
            <app.Icon />
            <p className="hidden flex-1 lg:flex">{app.label}</p>
            <div
              className="bg-white dark:bg-black group-hover:opacity-100 hidden lg:grid opacity-0 place-items-center cursor-pointer"
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
