import { useTheme } from "../../lib/hooks/useTheme";
import DateTime from "./DateTime";
import OpenApps from "./OpenApps";

const Panel = () => {
  const { theme, setTheme } = useTheme();
  const themes = ["Dark", "Light", "System"];
  return (
    <div className="flex items-center justify-between h-8  border-1">
      <OpenApps />
      <div className="flex mr-2 gap-2">
        <div className="flex gap-2">
          {themes.map((t) => (
            <button
              key={t}
              className={
                "cursor-pointer " +
                (theme !== t.toLocaleLowerCase() && "opacity-50")
              }
              onClick={() => setTheme(t.toLocaleLowerCase())}
            >
              {t}
            </button>
          ))}
        </div>
        <DateTime />
      </div>
    </div>
  );
};

export default Panel;
