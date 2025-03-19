// React
import * as React from "react";

// logo
import Slogan from "@/public/slogan.png"

// Next
import Image from "next/image";

export const Logo: React.FC = () => (
  <main className="w-full flex items-center justify-center text-center">
    <Image
      priority
      src={Slogan}
      alt="Slogan"
      className="w-8 sm:w-10"
    />
    <p className="font-extrabold sm:t ext-xl font-mono text-inherit">LogicHub</p>
  </main>
);