import React, { useEffect, useState } from "react";

const RedLine = () => {
  const [hour, setHour] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHour(hour + 1);
    }
    const interval = setInterval(() => {
      setMinutes(minutes + 1);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  });

  return <div className="red-line" style={{ marginTop: minutes }}></div>;
};
export default RedLine;
