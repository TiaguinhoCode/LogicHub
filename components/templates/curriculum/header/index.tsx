"use client";

// Bibliotecas
import { Avatar, Button } from "@heroui/react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

// Tipagem
type sumaryItems = {
  name: string;
  image: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
  summary: string;
};

export default function Header({ data }: { data: sumaryItems }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-5 sm:space-y-0 sm:space-x-6">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <Avatar
            name={data.name}
            src={data.image}
            alt={data.name}
            color="primary"
            className="w-12 h-12 text-lg"
          />
          <div className="flex flex-col">
            <h2 className="text-base font-semibold text-gray-900 truncate max-w-[380px] sm:max-w-xs md:max-w-full">
              {data.name}
            </h2>
            <span className="text-sm text-blue-600 truncate max-w-[380px] sm:max-w-xs md:max-w-full">
              {data.title}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-start sm:justify-end gap-2 w-full md:w-auto">
          <Button
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href={`/relatory/curriculo_${data.name.split(" ")[0]}.pdf`}
            download={`Curriculo_${data.name.split(" ")[0]}.pdf`}
            variant="solid"
            startContent={<MdOutlineFileDownload className="text-lg" />}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg"
          >
            Download CV
          </Button>
          <Button
            as="a"
            href="/"
            variant="solid"
            startContent={<IoIosArrowBack className="text-lg" />}
            className="bg-gray-200 text-gray-900 hover:bg-gray-300"
          >
            Voltar
          </Button>
        </div>
      </div>
    </header>
  );
}
