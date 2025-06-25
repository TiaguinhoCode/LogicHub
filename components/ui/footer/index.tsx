// Next
import Image from "next/image";
import Link from "next/link";

// Imagens
import slogan from "@/public/img/slogan.png";

// Bibliotecas
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
            <div className="container mx-auto px-6 py-8">
                <div className="grid gap-8 md:flex md:justify-between md:items-start">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                            <Image
                                priority
                                src={slogan}
                                alt="Slogan"
                                className="-scale-x-100"
                            />
                        </div>
                        <span className="text-xl font-extrabold text-white">LOGICHUB</span>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-white uppercase">
                                Nos siga
                            </h2>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="https://www.instagram.com/l0gichub/"
                                        className="flex items-center text-gray-300 hover:text-white hover:underline transition"
                                    >
                                        <FaInstagram className="mr-2" /> Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://github.com/TiaguinhoCode"
                                        className="flex items-center text-gray-300 hover:text-white hover:underline transition"
                                    >
                                        <FaGithub className="mr-2" /> GitHub
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21"
                                        className="flex items-center text-gray-300 hover:text-white hover:underline transition"
                                    >
                                        <FaWhatsapp className="mr-2" /> WhatsApp
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-700" />

                <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
                    <span className="text-sm text-gray-500">
                        &copy; 2025 LogicHub. Todos os Direitos Reservados.
                    </span>
                    <div className="flex space-x-6">
                        <Link
                            href="https://www.instagram.com/l0gichub/"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://github.com/TiaguinhoCode"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaGithub className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaWhatsapp className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
