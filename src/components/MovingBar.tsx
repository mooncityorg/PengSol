"use client";

import React, { FC, useEffect, useState } from "react";

const MovingBar: FC = () => {
  const [x, setX] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setX((prevX) => (prevX < -2000 ? 0 : prevX - 3));
    }, 16);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-yellow-500 border-t-2 border-b-2 lg:border-t-4 lg:border-b-4 h-[44px] lg:h-[60px] w-full border-black overflow-hidden">
      <div
        className="text-2xl lg:text-4xl text-nowrap mt-1.5"
        style={{
          transform: `translateX(${x}px)`,
        }}
      >
        {Array.from({ length: 100 }).map((_, key) => (
          <React.Fragment key={key}>PoPo&nbsp;&nbsp;&nbsp;</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MovingBar;
