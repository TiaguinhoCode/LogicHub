'use client'

// Bibliotecas
import { Chip } from "@heroui/react"
import Link from "next/link"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import { FiMail } from "react-icons/fi"
import { MdOutlineLocationOn } from "react-icons/md"
import { CiGlobe } from "react-icons/ci";

// Tipagem
type sumaryItems = {
    name: string,
    title: string,
    subtitle: string,
    location: string,
    email: string,
    phone: string,
    linkedin: string,
    github: string,
    website: string,
    summary: string,
}

export default function Presentation({ data }: { data: sumaryItems }) {
    const parts = data.name.trim().split(/\s+/) // evita espaços duplos
    const [first = "", second = ""] = parts
    const rest = parts.slice(2).join(" ")

    return (
        <div className="max-w-7xl mx-auto px-6 py-2">
            <div className="mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Chip color="success" className="text-white">
                                    Disponível para novos projetos
                                </Chip>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <MdOutlineLocationOn className="w-5 h-5" />
                                    <span>{data.location}</span>
                                </div>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold">
                                <span className="bg-gradient-to-r from-gray-900 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                                    {first} {second}
                                </span>
                                <br />
                                <span className="text-gray-700">{rest}</span>
                            </h1>
                            <p className="text-xl text-blue-600 font-medium">{data.subtitle}</p>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                {data.summary}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link href={`mailto:${data.email}`} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                                <FiMail className="w-5 h-5" />
                                <span>{data.email}</span>
                            </Link>
                            <Link
                                href={`https://${data.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                <FaLinkedinIn className="w-5 h-5" />
                                <span>LinkedIn</span>
                            </Link>

                            <Link target="_blank" rel="noopener noreferrer" href={`https://${data.github}`} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                                <FaGithub className="w-5 h-5" />
                                <span>GitHub</span>
                            </Link>
                            <Link target="_blank" rel="noopener noreferrer" href={data.website} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                                <CiGlobe className="w-5 h-5" />
                                <span>Portfolio</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}