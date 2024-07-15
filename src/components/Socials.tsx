import Link from "next/link";
import React from "react";
import { DiscordIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "./Icons";
import Image from "next/image";

export default function Socials() {
  return (
    <div className="relative min-h-[480px] md:min-h-[560px] lg:min-h-[720px]">
      <div className="min-h-[500px] md:pt-20 pt-12 mx-auto max-w-1500 relative z-20">
        <div className="md:text-[90px] text-[50px] text-center">
          <h1 className="text-black">SOCIALS</h1>
          <p className="text-black md:text-3xl text-xl">
            Join the $PUGGY community
          </p>
          <div className="flex items-center justify-center gap-5 my-10">
            <Link href={"https://x.com/onepugclub"} target="_blank">
              <div className="w-12 lg:w-[60px] aspect-square bg-black grid place-content-center -rotate-1">
                <TwitterIcon />
              </div>
            </Link>
            <Link href={"https://t.me/puggyclub"} target="_blank">
              <div className="w-12 lg:w-[60px] aspect-square bg-black grid place-content-center rotate-2">
                <TelegramIcon />
              </div>
            </Link>
            <Link href={"#"} target="_blank">
              <div className="w-12 lg:w-[60px] aspect-square bg-black grid place-content-center  -rotate-3">
                <InstagramIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-2/3 lg:w-[500px] aspect-square absolute left-0 bottom-0">
        <Image src="/media/puggy_3.gif" fill className="w-full h-full" alt="" />
      </div>
    </div>
  );
}
