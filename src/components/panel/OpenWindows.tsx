import { useDesktop } from "../../lib/hooks/useDesktop";
import { WindowStatus } from "../../lib/types";

const OpenWindows = () => {
  const { apps } = useDesktop();
  return (
    <div className="flex">
      {apps
        .filter((app) => app.status !== WindowStatus.CLOSED)
        .map((app) => (
          <div key={app.id}>{app.label}</div>
        ))}
    </div>
  );
};

export default OpenWindows;
