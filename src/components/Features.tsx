import React from "react";

export default function Features() {
  return (
    <section>
      <div className="max-w-[1280px] mx-auto py-20">
        <h2 className="text-black uppercase mt-10 text-4xl lg:text-8xl text-center">Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10 mx-5">
          <div className="border-2 border-black rounded-0 p-5 text-black">
            <h2 className="text-xl lg:text-4xl">SOLID PARTNERSHIRPS</h2>
            <p className="text-xl lg:text-2xl mt-3">
              PUGGY has established valuable alliances with prominent firms in
              the space, enhancing the projects sustainability and prospects for
              future expansion.
            </p>
          </div>
          <div className="border-2 border-black rounded-0 p-5 text-black">
            <h2 className="text-xl lg:text-4xl">COMMUNITY SUPPORT</h2>
            <p className="text-xl lg:text-2xl mt-3">
              The collaboration between SOLANA and PUGGY has received
              considerable endorsement from the cryptocurrency community, with
              numerous influential individuals expressing optimism about the
              project. This enthusiastic community support forms a robust basis
              for the projects advancement and prosperity, as it guarantees a
              committed user base to advocate for and bolster both the memecoin
              and blockchain. .
            </p>
          </div>
          <div className="border-2 border-black rounded-0 p-5 text-black">
            <h2 className="text-xl lg:text-4xl">GROWING ECOSYSTEM</h2>
            <p className="text-xl lg:text-2xl mt-3">
              Solana is witnessing swift expansion within its ecosystem, marked
              by the emergence of various projects and applications. This
              expanding ecosystem serves as a sturdy groundwork for PUGGYs
              prosperity, enabling the platform to tap into the capabilities and
              knowledge of other ventures within the sector. With the continuous
              growth of the SOLANA Chain, PUGGY stands poised to capitalize on
              increased opportunities and broaden its range of services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
