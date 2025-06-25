'use client'

// Bibliotecas
import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { FaGraduationCap } from "react-icons/fa6";

// Tipagem
type EducationItems = {
  institution: string;
  degree?: string;
  period?: string;
  grade?: string;
  description: string;
};

export default function Training({ data }: { data: EducationItems[] }) {
  return (
    <div className="lg:col-span-3 p-4">
      <Card className="w-full  mx-auto shadow-md border border-gray-100">
        <CardHeader className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-lg p-4">
          <FaGraduationCap className="w-6 h-6 text-white" />
          <span className="text-white">Formação & Certificações</span>
        </CardHeader>

        <CardBody className="space-y-6">
          {data.map((education, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-r from-white to-blue-50 rounded-xl border border-blue-100"
            >
              <div className="flex flex-col lg:flex-row lg:educations-center lg:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {education.degree}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {education.institution}
                  </p>
                  {education.period && (
                    <span className="text-sm text-gray-500">
                      {education.period}
                    </span>
                  )}
                  {education.grade && (
                    <Chip className="bg-green-100 text-green-700 border-green-200">
                      {education.grade}
                    </Chip>
                  )}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                {education.description}
              </p>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
