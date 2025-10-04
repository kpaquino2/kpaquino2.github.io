import { useDesktop } from "../../lib/hooks/useDesktop";
import { WindowStatus } from "../../lib/types";

const OpenApps = () => {
  const { apps, focusApp } = useDesktop();
  return (
    <div className="flex h-full">
      {apps
        .filter((app) => app.status !== WindowStatus.CLOSED)
        .map((app) => (
          <button
            onClick={() => focusApp(app.id)}
            className="border-r w-8 grid place-items-center"
            key={app.id}
          >
            <app.Icon className={app.zIndex === 10 ? "opacity-50" : ""} />
          </button>
        ))}
    </div>
  );
};

export default OpenApps;
