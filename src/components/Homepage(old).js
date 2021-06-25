import React from "react";

const MOCK_DATA = [
  {
    id: 0,
    image:
      "https://cloudflare-ipfs.com/ipfs/QmZGAPsFLA3KDPRWaACGgcoM1JuphuZ27Cg7KynqoC478u/robots/0.png",
    name: "Robot #0",
    description: "Pick Me. Pick Me.",
    owner: "0x249bdb4499bd7c683664c149276c1d86108e2137",
  },
  {
    id: 1,
    image:
      "https://cloudflare-ipfs.com/ipfs/QmZGAPsFLA3KDPRWaACGgcoM1JuphuZ27Cg7KynqoC478u/robots/1.png",
    name: "Robot #1",
    description: "Pick Me. Pick Me.",
    owner: "0x249bdb4499bd7c683664c149276c1d86108e2137",
  },
  {
    id: 2,
    image:
      "https://cloudflare-ipfs.com/ipfs/QmZGAPsFLA3KDPRWaACGgcoM1JuphuZ27Cg7KynqoC478u/robots/2.png",
    name: "Robot #2",
    description: "Pick Me. Pick Me.",
    owner: "0x249bdb4499bd7c683664c149276c1d86108e2137",
  },
];

export const HomePage = () => {
    const handlePurchase = () => {
      alert("Purchasing a Robot...");
    };
  
    return (
      <div className="min-h-screen bg-gray-800 text-white">
        <div>ROBOTS</div>
        <div>Robot images goes here</div>
        <div onClick={handlePurchase}>Buy My Robot</div>
      </div>
    );
  };
