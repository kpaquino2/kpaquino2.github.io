import { useState, type DragEvent } from "react";

const Terminal = () => {
  const [position, setPosition] = useState<[number, number]>([100, 100]);

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    const img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"; // 1x1 transparent GIF
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    console.log(e);
    setPosition([e.screenX, e.screenY]);
    // setPosition(() => [e.clientX - 10, e.clientY - 10]);
  };

  return (
    <div
      className="flex flex-col border-1 absolute text-black dark:text-white  border-black dark:border-white rounded-lg"
      style={{
        width: 300,
        height: 300,
        translate: `${position[0]}px ${position[1]}px`,
      }}
    >
      <div
        draggable
        className="h-6 border-b px-2"
        onDragStart={handleDragStart}
        onDrag={handleDrag}
      >
        Title
      </div>
    </div>
  );
};

export default Terminal;
