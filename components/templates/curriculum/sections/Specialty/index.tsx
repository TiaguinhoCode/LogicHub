"use client";

// Bibliotecas
import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { FaCode } from "react-icons/fa6";

// Tipagem
type TechItem = {
  name: string;
  experience: string;
};

type Technologies = {
  front_end: TechItem[];
  back_end: TechItem[];
  ferramentas: TechItem[];
  metodologias: TechItem[];
  outras_tecnologias: TechItem[];
};

const categoryLabels: Record<keyof Technologies, string> = {
  front_end: "Front‑End",
  back_end: "Back‑End",
  ferramentas: "Ferramentas",
  metodologias: "Metodologias",
  outras_tecnologias: "Outras Tecnologias",
};

export default function Specialty({ data }: { data: Technologies }) {
  return (
    <div className="w-full px-4 pb-2">
      <Card className="w-full mx-auto shadow-md border border-gray-100">
        <CardHeader className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-lg p-4">
          <FaCode className="w-5 h-5 text-white" />
          <h2 className="text-white font-semibold text-lg">
            Áreas de Especialidade
          </h2>
        </CardHeader>

        <CardBody className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 w-full">
          {(Object.keys(data) as (keyof Technologies)[]).map((category) => (
            <div key={category}>
              <h3 className="font-semibold text-blue-800 text-sm uppercase tracking-wider mb-3 border-b border-blue-100 pb-1">
                {categoryLabels[category]}
              </h3>
              <div className="space-y-3">
                {data[category].map((tech) => (
                  <div
                    key={tech.name}
                    className="flex justify-between items-center p-3 rounded-md bg-blue-50 border border-blue-100 hover:shadow transition"
                  >
                    <span className="text-gray-800 font-medium">
                      {tech.name}
                    </span>
                    <Chip className="bg-blue-100 text-blue-700 text-xs font-semibold">
                      {tech.experience}
                    </Chip>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
