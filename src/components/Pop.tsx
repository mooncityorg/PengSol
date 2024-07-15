"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Pop() {
  const [count, setCount] = useState(0);
  const handleTop = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="h-screen min-h-[800px] py-[180px] relative top-[56px] z-10">
      <div className="text-center relative z-10">
        <h1 className="text-9xl">Pops</h1>
        <p className="text-9xl mt-6">{count}</p>
      </div>
      <div
        className="absolute left-0 top-0 w-full h-full z-[20]"
        onClick={handleTop}
      />
      <div className="w-3/4 lg:w-[50%] aspect-square absolute left-0 bottom-0 z-10">
        <Image
          src="/media/puggy_3.gif"
          className="w-full h-full object-contain"
          fill
          alt=""
        />
      </div>
    </div>
  );
}
