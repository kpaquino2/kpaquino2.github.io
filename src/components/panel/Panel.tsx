import DateTime from "./DateTime";
import OpenApps from "./OpenApps";
import Settings from "./Settings";

const Panel = () => {
  return (
    <div className="flex items-center justify-between h-8  border-1">
      <OpenApps />
      <div className="flex mr-2 gap-2 h-full">
        <Settings />
        <DateTime />
      </div>
    </div>
  );
};

export default Panel;
