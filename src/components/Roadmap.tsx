import Link from "next/link";
import React from "react";
import { DiscordIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "./Icons";
import Image from "next/image";

export default function Roadmap() {
    return (
        <div className="relative min-h-[480px] md:min-h-[560px] lg:min-h-[720px] flex flex-col">
            <div className="min-h-[100px] md:pt-20 pt-12 mx-auto max-w-1500 relative z-20">
                <div className="md:text-[90px] text-[50px] text-center">
                    <h1 className="text-black">PUG ROADMAP</h1>
                </div>
            </div>
            <div className="flex gap-8 w-full p-10 max-md:flex-col">
                <div className="flex pb-10 w-full md:w-[calc((100%-104px)/3)]">
                    <div className="bg-white w-full flex flex-col px-3 lg:py-6 py-3 items-center  rounded-[40px] border-black border-[1px] lg:gap-10 gap-5 shadow-phase text-center">
                        <p className="text-[40px] text-black font-bold">Phase - 1</p>
                        <p className="text-xl text-black">CoinGecko listing</p>
                        <p className="text-xl text-black">Trending videos on social media</p>
                        <p className="text-xl text-black">New website development</p>
                        <p className="text-xl text-black">Team formation</p>
                        <p className="text-xl text-black">Community building</p>
                    </div>
                </div>
                <div className="flex pt-10 w-full md:w-[calc((100%-104px)/3)]">
                    <div className="bg-white w-full flex flex-col px-3 lg:py-6 py-3 items-center  rounded-[40px] border-black border-[1px] lg:gap-10 gap-5 shadow-phase text-center">
                        <p className="text-[40px] text-black font-bold">Phase - 2</p>
                        <p className="text-xl text-black">Coinmarketcap Listing</p>
                        <p className="text-xl text-black">First CEX Listing</p>
                        <p className="text-xl text-black">NFT Integration</p>
                        <p className="text-xl text-black">Community expansion</p>
                    </div>
                </div>
                <div className="flex pb-10 w-full md:w-[calc((100%-104px)/3)]">
                    <div className="bg-white w-full flex flex-col px-3 lg:py-6 py-3 items-center  rounded-[40px] border-black border-[1px] lg:gap-10 gap-5 shadow-phase text-center">
                        <p className="text-[40px] text-black font-bold">Phase - 3</p>
                        <p className="text-xl text-black">Tier 1 CEX Listing</p>
                        <p className="text-xl text-black">Influencer marketing</p>
                        <p className="text-xl text-black">Global partnerships</p>
                        <p className="text-xl text-black">Charity activities</p>
                    </div>
                </div>
            </div>
            <div className="md:w-[200px] w-0 aspect-square absolute left-0 bottom-0">
                <Image src="/media/puggy_3.gif" fill className="w-full h-full" alt="" />
            </div>
        </div>
    );
}
