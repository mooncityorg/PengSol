import CropBox from "@/components/CropBox";
import Link from "next/link";
import React from "react";

export default function CapPage() {
  return (
    <main className="min-h-screen bg-[#feeabd]">
      <div className="container mx-auto p-2 lg:p-20">
        <h2 className="text-4xl lg:text-6xl text-center">
          Put on a cap
          <br />
          <span className="font-bold">Puggy</span>
        </h2>
        <Link href={"/"}>
          <div className="text-center mt-6 underline">Go To Home</div>
        </Link>
        <CropBox />
      </div>
    </main>
  );
}