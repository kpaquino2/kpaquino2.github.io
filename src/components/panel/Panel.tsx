import DateTime from "./DateTime";
import OpenApps from "./OpenApps";
import Settings from "./Settings";

const Panel = () => {
  return (
    <div className="flex h-8 items-center justify-between border-1">
      <OpenApps />
      <div className="mr-2 flex h-full gap-2">
        <Settings />
        <DateTime />
      </div>
    </div>
  );
};

export default Panel;
