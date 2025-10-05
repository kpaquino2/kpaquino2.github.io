import { useEffect, useState } from "react";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <p className="flex h-full items-center">
      {currentTime.toLocaleDateString()}{" "}
      {currentTime.toLocaleTimeString(undefined, {
        hourCycle: "h24",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </p>
  );
};

export default DateTime;
