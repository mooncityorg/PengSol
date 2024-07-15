import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Network() {
  return (
    <section className="min-h-[800px] bg-black/90 py-[120px]">
      <h1 className="text-6xl lg:text-8xl uppercase text-yellow-400 text-center">
        network
      </h1>
      <p className="text-center text-white text-xl lg:text-3xl max-w-[720px] mx-auto mt-10 px-10">
        $PUGGY is available for trading on major exchanges.
      </p>
      <div className="max-w-[960px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5 mt-12 lg:mt-20 px-6">
        {DEXS.map((dex, index) => (
          <Link href={dex.link} target="_blank" key={index}>
            <div className="border border-gray-500 p-4 grid place-content-center bg-black hover:scale-105 duration-300">
              <div className="relative w-[140px] lg:w-[200px] h-10 lg:h-[70px]">
                <Image src={dex.icon} fill objectFit="contain" alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const DEXS = [
  {
    icon: "/icons/okx-dex.svg",
    link: "#",
    title: "OKX DEX",
  },
  {
    icon: "/icons/gate.png",
    link: "#",
    title: "gate.io",
  },
  {
    icon: "/icons/htx.svg",
    link: "#",
    title: "HTX",
  },
  {
    icon: "/icons/bitget.svg",
    link: "#",
    title: "BIT GET",
  },
  {
    icon: "/icons/poloniex.svg",
    link: "#",
    title: "poloniex",
  },
  {
    icon: "/icons/bitmart.svg",
    link: "#",
    title: "BitMart",
  },
  {
    icon: "/icons/lbank.svg",
    link: "#",
    title: "LBank",
  },
  {
    icon: "/icons/bitrue.png",
    link: "#",
    title: "Bitrue",
  },
  {
    icon: "/icons/mexc.svg",
    link: "#",
    title: "MEXC",
  },
];
