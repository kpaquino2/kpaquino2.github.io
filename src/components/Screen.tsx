import Panel from "./Panel";
import Terminal from "./Terminal";

const Screen = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-white dark:bg-black">
      <Panel />
      <Terminal />
    </div>
  );
};

export default Screen;
