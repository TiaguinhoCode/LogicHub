'use client'

// Bibliotecas
import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { FiAward } from "react-icons/fi";

// Tipagem
type ProjectsItems = {
    name: string;
    description: string;
    technologies: string[];
    featured: boolean;
};

export default function Projects({ data }: { data: ProjectsItems[] }) {
    return (
        <div className="lg:col-span-3 p-4">
            <Card className="w-full  mx-auto shadow-md border border-gray-100">
                <CardHeader className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-lg p-4">
                    <FiAward className="w-5 h-5 text-white" />
                    <h2 className="text-white font-semibold text-lg">Projetos em Destaque</h2>
                </CardHeader>

                <CardBody className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.map((project, index) => (
                            <div
                                key={index}
                                className="group relative p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-100 hover:shadow-xl transition-all duration-300"
                            >
                                {project.featured && (
                                    <div className="absolute top-4 right-4">
                                        <Chip className="bg-blue-100 text-blue-700 border-blue-200">Featured</Chip>
                                    </div>
                                )}

                                <div className="space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                            {project.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.technologies.map((tech, index) => (
                                        <Chip key={index} className="text-xs bg-blue-100 text-blue-700">
                                            {tech}
                                        </Chip>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardBody>

            </Card>
        </div>
    )
}