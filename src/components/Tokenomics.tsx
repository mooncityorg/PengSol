import React from "react";
import Image from "next/image";

export default function Tokenomics() {
  return (
    <section className="min-h-[800px] py-[100px]">
      <div className="mx-auto">
        <h1 className="block lg:w-[800px] w-[400px] mx-auto text-4xl md:text-6xl font-bold text-[#2596ff] bg-white rounded-[30px] text-center py-2">
          POPO TOKENOMICS
        </h1>
        <div className="flex items-center justify-between my-4 mx-auto pl-8 pr-4 py-2 bg-white rounded-[40px] lg:w-[800px] w-[400px]">
          <p>Address goes here</p>
          <button className="rounded-full w-[100px] h-[60px] bg-[#ffde68] border-2 border-[#19334a] py-4 shadow-[#19334a] shadow-release hover:shadow-hover transition">
            COPY
          </button>
        </div>
        <div className="flex flex-wrap px-8 justify-around mt-16">
          <div className="w-[40%] md:w-[20%] my-4 md:my-0 aspect-[3/4] rotate-6 p-2 bg-white rounded-[20px] border-8 border-[#19334a]">
            <div className="relative w-[95%] mx-auto aspect-[1/1] rounded-[15px] border-8 border-[#19334a]">
              <Image src="/media/bear_tax.webp" fill alt="" />
            </div>
            <p className="text-xl">TAX</p>
            <p className="text-2xl">0/0</p>
          </div>
          <div className="w-[40%] md:w-[20%] my-4 md:my-0 aspect-[3/4] -rotate-6 p-2 bg-white rounded-[20px] border-8 border-[#19334a]">
            <div className="relative w-[95%] mx-auto aspect-[1/1] rounded-[15px] border-8 border-[#19334a]">
              <Image src="/media/bear_revoked.webp" fill alt="" />
            </div>
            <p className="text-xl">MINT & FREEZE</p>
            <p className="text-2xl">REVOKED</p>
          </div>
          <div className="w-[40%] md:w-[20%] my-4 md:my-0 aspect-[3/4] -rotate-3 p-2 bg-white rounded-[20px] border-8 border-[#19334a]">
            <div className="relative w-[95%] mx-auto aspect-[1/1] rounded-[15px] border-8 border-[#19334a]">
              <Image src="/media/bear_tax.webp" fill alt="" />
            </div>
            <p className="text-xl">LIQUIDITY</p>
            <p className="text-2xl">BURNED</p>
          </div>
          <div className="w-[40%] md:w-[20%] my-4 md:my-0 aspect-[3/4] rotate-12 p-2 bg-white rounded-[20px] border-8 border-[#19334a]">
            <div className="relative w-[95%] mx-auto aspect-[1/1] rounded-[15px] border-8 border-[#19334a]">
              <Image src="/media/bear_tax.webp" fill alt="" />
            </div>
            <p className="text-xl">TOTAL SUPPLY</p>
            <p className="text-2xl">100M</p>
          </div>
        </div>
      </div>
    </section>
  );
}
