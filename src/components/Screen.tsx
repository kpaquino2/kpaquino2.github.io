import Panel from "./Panel";

const Screen = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-white dark:bg-black">
      <Panel />
    </div>
  );
};

export default Screen;
