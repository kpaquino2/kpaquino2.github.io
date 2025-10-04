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
    <p>
      {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
    </p>
  );
};

export default DateTime;
