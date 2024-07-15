import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CapSection() {
  return (
    <section className="min-h-[800px] relative p-5 md:p-[80px]">
      <h1 className="text-black md:leading-normal text-5xl lg:text-8xl leading-[60px] text-center mt-20">
        PUT ON A CAP
      </h1>
      <div className="max-w-[800px] mx-auto flex items-center gap-10 mt-10 flex-col md:flex-row">
        <div className="w-full md:w-[720px] h-[320px] relative">
          <Image src={"/media/puggy_4.png"} fill objectFit="contain" alt="" />
        </div>
        <div className="w-full md:w-[calc(100%-360px)]">
          <p className="text-2xl lg:text-4xl">
            Join the <span className="text-red-600">Pug</span> club by putting
            on a Puggy cap using our tool.
          </p>
          <Link href={"/cap"}>
            <div className="mx-auto md:mx-0 w-[160px] lg:w-[300px] h-[50px] lg:h-[80px] bg-red-500 border-2 border-black duration-200 hover:scale-105 uppercase grid place-content-center text-xl lg:text-4xl rotate-3 my-10">
              cap tool
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
