import React, { FC } from "react";

interface IntroProps {
  media?: string;
}

const Intro: FC<IntroProps> = ({ media = "/media/puggy-3.mp4" }) => {
  return (
    <section className="min-h-0 md:min-h-auto lg:min-h-[860px] grid place-content-center relative overflow-hidden bg-black">
      <div className="w-screen md:w-[calc(100vw-40px)] mx-5 lg:mx-0 lg:w-[800px] aspect-square relative z-10">
        <video
          src={media}
          autoPlay
          playsInline
          muted
          loop
          className="w-full h-full absolute left-0 top-0"
        />
      </div>
      <video
        src={media}
        autoPlay
        playsInline
        muted
        loop
        className="hidden sm:block w-full h-full absolute left-0 top-0 object-cover blur-lg scale-110 opacity-60"
      />
    </section>
  );
};

export default Intro;
