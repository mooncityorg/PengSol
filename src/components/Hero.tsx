"use client";
import Link from "next/link";
import React, { FC } from "react";
import { DiscordIcon, Instagram, TelegramIcon, TwitterIcon } from "./Icons";
import MovingBar from "./MovingBar";
import FootPrint from "./FootPrint";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <section className="min-h-[800px] 2xl:min-h-[calc(100vh-40px)] relative pb-[120px] z-20">
      <div className="flex items-center justify-between gap-2 lg:gap-6 px-28 relative z-20">
        <div className="flex">
          <Link href={"https://x.com/"} target="_blank">
            <div className="w-9 lg:w-[60px] h-9 lg:h-[60px] hover:scale-110 grid place-content-center m-8">
              <TwitterIcon />
            </div>
          </Link>
          <Link href={"https://t.me/"} target="_blank">
            <div className="w-9 lg:w-[60px] h-9 lg:h-[60px] hover:scale-110 grid place-content-center m-8">
              <TelegramIcon />
            </div>
          </Link>
          <Link href={"#"} target="_blank">
            <div className="w-9 lg:w-[60px] h-9 lg:h-[60px] hover:scale-110 grid place-content-center m-8">
              <Instagram />
            </div>
          </Link>
        </div>
        <div className="relative">
          {/* <div className="absolute top-1 left-0 rounded-full w-[300px] h-[60px] bg-[#19334a]"></div> */}
          <button className="rounded-full w-[300px] h-[60px] bg-[#ffde68] border-2 border-[#19334a] px-8 py-4 z-10 shadow-[#19334a] shadow-release hover:shadow-hover transition">
            LABORATORY
          </button>
        </div>
      </div>

      <div className="relative justify-center w-full aspect-video mt-20 ">
        <Image
          className="z-1"
          style={{ top: "40%" }}
          src="/media/banner_elipse.svg"
          fill
          alt=""
        />
        <div className="absolute w-[140px] h-[70px] md:top-[74%] bottom-[-10%] md:left-[5%] left-[5%] -rotate-2 hover:cursor-pointer hover:bottom-[-11%] md:hover:top-[75%] transition ">
          <Image src="/media/footprint_white.png" fill alt="" />
        </div>
        <div className="absolute w-[140px] h-[70px] md:top-[71%] bottom-[-10%] md:left-[20%] left-[25%] -rotate-2 hover:cursor-pointer hover:bottom-[-11%] md:hover:top-[72%] transition">
          <Image src="/media/footprint_white.png" fill alt="" />
        </div>
        <div className="absolute w-[140px] h-[70px] md:top-[71%] bottom-[-10%] md:right-[20%] right-[25%] -rotate-2 hover:cursor-pointer hover:bottom-[-11%] md:hover:top-[72%] transition">
          <Image src="/media/footprint_white.png" fill alt="" />
        </div>
        <div className="absolute w-[140px] h-[70px] md:top-[74%] bottom-[-10%] md:right-[5%] right-[5%] -rotate-2 hover:cursor-pointer hover:bottom-[-11%] md:hover:top-[75%] transition">
          <Image src="/media/footprint_white.png" fill alt="" />
        </div>
        <h1 className="relative text-[200px] text-white text-center z-2">
          PoPo
        </h1>
        <div className="relative w-[480px] h-[670px] mx-auto">
          <Image
            src="/media/Popo.svg"
            className="w-full h-full object-contain z-3"
            fill
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
