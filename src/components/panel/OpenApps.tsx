import { useDesktop } from "../../lib/hooks/useDesktop";
import { WindowStatus } from "../../lib/types";

const OpenApps = () => {
  const { apps, openApp, minimizeApp } = useDesktop();
  return (
    <div className="flex h-full">
      {apps
        .filter((app) => app.status !== WindowStatus.CLOSED)
        .sort((a, b) => a.order - b.order)
        .map((app) => (
          <button
            onClick={() =>
              app.status === WindowStatus.MINI
                ? openApp(app.id)
                : minimizeApp(app.id)
            }
            className={
              "border-r items-center justify-center flex gap-2 px-2 " +
              (app.zIndex === 10 ? "opacity-50" : "")
            }
            key={app.id}
          >
            <app.Icon />
            <p className="hidden lg:flex">{app.label}</p>
          </button>
        ))}
    </div>
  );
};

export default OpenApps;
