// Componentes
import Header from "@/components/templates/curriculum/header";

import Specialty from "@/components/templates/curriculum/sections/Specialty";
import Presentation from "@/components/templates/curriculum/sections/presentation";
import ProfissionCareer from "@/components/templates/curriculum/sections/professionalCareer";
import Projects from "@/components/templates/curriculum/sections/projects";
import Training from "@/components/templates/curriculum/sections/training";
import NotFoundComponent from "@/components/templates/curriculum/notFound";

// Dados
import tiagoData from "@/data/personal/tiago.json";
import jamilleData from "@/data/personal/jamille.json";

const allData: Record<string, any[]> = {
  tiago: tiagoData,
  jamille: jamilleData,
};

// React
import React from "react";

// Tipagem
type CurriculumProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Curriculum({ searchParams }: CurriculumProps) {
  const params = await searchParams;
  const raw = params.nome;

  if (!raw) {
    return;
  }

  const name = Array.isArray(raw) ? raw[0] : raw;
  const data = allData[name.toLowerCase()] || null;

  if (!data) {
    return <NotFoundComponent />;
  }

  return (
    <>
      {data.map((data, index) => (
        <main key={index}>
          <Header data={data.sumary} />
          <Presentation data={data.sumary} />
          <Specialty data={data.technologies} />
          <Projects data={data.projects} />
          <ProfissionCareer data={data.experiences} />
          <Training data={data.education} />
        </main>
      ))}
    </>
  );
}
