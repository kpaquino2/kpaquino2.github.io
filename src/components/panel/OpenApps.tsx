import { useDesktop } from "../../lib/hooks/useDesktop";
import { WindowStatus } from "../../lib/types";

const OpenApps = () => {
  const { apps } = useDesktop();
  return (
    <div className="flex h-full">
      {apps
        .filter((app) => app.status !== WindowStatus.CLOSED)
        .map((app) => (
          <div className="border-r w-8 grid place-items-center" key={app.id}>
            <app.Icon />
          </div>
        ))}
    </div>
  );
};

export default OpenApps;
