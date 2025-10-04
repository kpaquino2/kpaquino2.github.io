import { useTheme } from "../../lib/hooks/useTheme";
import DateTime from "./DateTime";
import OpenWindows from "./OpenWindows";

const Panel = () => {
  const { theme, setTheme } = useTheme();
  const themes = ["Dark", "Light", "System"];
  return (
    <div className="flex items-center justify-between px-2 h-8  border-1 rounded-lg">
      <OpenWindows />
      <DateTime />
      <div className="flex gap-2">
        {themes.map((t) => (
          <button
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
    </div>
  );
};

export default Panel;
