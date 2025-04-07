// Next
import Image from "next/image";

// Bibliotecas
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Link } from "@heroui/link";

// Imagens
import slogan from "@/public/img/slogan.png"

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400">
            <div className="container mx-auto px-6 py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <Image
                                src={slogan}
                                alt="Business Performance"
                                className="w-20 h-auto"
                                width={700}
                                height={500}
                            />
                            <span className="ml-3 text-2xl font-bold text-white">LogicHub</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Saiba mais</h2>
                            <ul>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline text-gray-300 hover:text-white">Serviços</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline text-gray-300 hover:text-white">Sobre nós</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Nos siga</h2>
                            <ul>
                                <li className="mb-4">
                                    <Link href="https://www.instagram.com/l0gichub/" className="hover:underline text-gray-300 hover:text-white flex items-center">
                                        <FaInstagram className="mr-2" /> Instagram
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="https://github.com/TiaguinhoCode" className="hover:underline text-gray-300 hover:text-white flex items-center">
                                        <FaGithub className="mr-2" /> GitHub
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21" className="hover:underline text-gray-300 hover:text-white flex items-center">
                                        <FaWhatsapp className="mr-2" /> WhatsApp
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700" />
                <div className="flex flex-col items-center">
                    <span className="text-sm">&copy; 2025 LogicHub. Todos os Direitos Reservados.</span>
                    <div className="flex mt-4 space-x-6">
                        <Link href="https://www.instagram.com/l0gichub/" className="text-gray-400 hover:text-white">
                            <FaInstagram className="w-5 h-5" />
                        </Link>
                        <Link href="https://github.com/TiaguinhoCode" className="text-gray-400 hover:text-white">
                            <FaGithub className="w-5 h-5" />
                        </Link>
                        <Link href="https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21" className="text-gray-400 hover:text-white">
                            <FaWhatsapp className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
