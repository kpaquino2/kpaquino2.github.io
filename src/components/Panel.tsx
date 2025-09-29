import DateTime from "./DateTime";

const Panel = () => {
  return (
    <div className="flex items-center justify-between m-2 px-2 text-black dark:text-white h-8 border-black dark:border-white border-1 rounded-lg">
      <DateTime />
    </div>
  );
};

export default Panel;
