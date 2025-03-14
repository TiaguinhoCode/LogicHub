// React
import * as React from "react";

// logo
import Slogan from "@/public/slogan.svg"

// Next
import Image from "next/image";

export const Logo: React.FC = () => (
  <main className="w-full flex items-center justify-center text-center">
    <Image
      priority
      src={Slogan}
      alt="Slogan"
      className="w-10 sm:w-14"
    />
    <p className="font-extrabold sm:text-xl font-mono uppercase text-inherit">LogicHub</p>
  </main>
);