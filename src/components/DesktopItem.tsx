const DesktopItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <button
    aria-label={label}
    className="flex w-18 flex-col items-center p-1 border-1 border-dashed border-transparent focus:border-black dark:focus:border-white focus:ring-0 focus:outline-none"
  >
    {icon}
    <p className="text-xs text-center">{label}</p>
  </button>
);

export default DesktopItem;
