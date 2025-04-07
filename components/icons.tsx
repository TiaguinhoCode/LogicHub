// React
import * as React from "react";

// Next
import Image from "next/image";

// Imagens
import slogan from "@/public/img/slogan.png"

export const Logo = () => (
  <main className="w-full flex py-2 items-center justify-center text-center space-x-1">
    <Image
      priority
      src={slogan}
      alt="Slogan"
      className="w-14 sm:w-16"
    />
    <div className="w-full ">
      <p className="font-bold text-[20px] text-white">LogicHub</p>
    </div>
  </main>
);

