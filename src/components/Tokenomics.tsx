import React from "react";

export default function Tokenomics() {
  return (
    <section className="min-h-[800px] py-[100px]">
      <div className="mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black text-center">
          Tokenomics
        </h1>
        <p className="max-w-[644px] mx-auto text-center my-6 lg:my-10 text-xl lg:text-3xl px-5 text-black">
          The total supply was 1,000,000,000 but this small bastard burned half of
          it forever. Now there is only 500,000,000 $puggy&#39;s out there. He is
          coming for more…
        </p>
        <div className="max-w-[960px] mx-auto flex gap-6 items-center justify-center flex-col lg:flex-row">
          <div className="w-[calc(100%-40px)] mx-5 sm:mx-0 sm:w-[360px] aspect-square">
            <video
              src="/media/puggy-2.mp4"
              autoPlay
              playsInline
              muted
              loop
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-5 w-full px-5 lg:w-[calc(100%-400px)]">
            <div className="bg-black border-2 border-white text-center text-white w-full py-5">
              <h2 className="text-4xl uppercase">total supply</h2>
              <p className="text-xl mt-2">500,000,000 $puggy</p>
            </div>
            <div className="bg-black border-2 border-white text-center text-white w-full py-5 overflow-hidden">
              <h2 className="text-4xl ">CA</h2>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
