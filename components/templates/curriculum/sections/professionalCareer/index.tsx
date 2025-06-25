'use client'

// Biblioteca
import { Card, CardBody, CardHeader, Chip } from "@heroui/react"
import { CiCalendarDate } from "react-icons/ci"
import { FaBriefcase } from "react-icons/fa6"

// Tipagem
type ExperiencesItems = {
    company: string,
    position: string,
    period: string,
    duration: string,
    location: string,
    type: string,
    description: string,
    technologies: string[]
}

export default function ProfissionCareer({ data }: { data: ExperiencesItems[] }) {
    return (
        <div className="lg:col-span-3 p-4">
            <Card className="w-full  mx-auto shadow-md border border-gray-100">
                <CardHeader className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-lg p-4">
                    <FaBriefcase className="w-5 h-5 text-white" />
                    <h2 className="text-white font-semibold text-lg">
                        Trajetória Profissional
                    </h2>
                </CardHeader>

                <CardBody className="relative bg-gray-50 p-5">
                    <div className="space-y-4">
                        {data.map((experience, index) => (
                            <div key={index} className="relative pl-8 mb-12 hover:shadow-lg transition p-4 bg-white">
                                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 border-4 border-white shadow-lg" />
                                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-200 to-transparent" />

                                <h3 className="text-xl font-semibold text-gray-800">
                                    {experience.position}
                                </h3>
                                <div className="flex items-center space-x-3 mt-1 text-indigo-600">
                                    <span>{experience.company}</span>
                                    <Chip className="text-xs">{experience.type}</Chip>
                                </div>
                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                    <CiCalendarDate className="w-4 h-4" />
                                    <span>{experience.period}</span>
                                    <Chip className="text-xs">{experience.duration}</Chip>
                                </div>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    {experience.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {experience.technologies.map((tech, index) => (
                                        <Chip key={index} className="text-xs">{tech}</Chip>
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