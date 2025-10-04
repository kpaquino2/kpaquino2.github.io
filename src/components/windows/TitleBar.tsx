interface TitleBarProps {
  title: string;
}

const TitleBar = ({ title }: TitleBarProps) => {
  return (
    <div className="border-b h-8 flex items-center justify-between pl-2">
      {title}
      <div></div>
    </div>
  );
};

export default TitleBar;
