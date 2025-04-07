// Componentes
import About from '@/components/layouts/about';
import Started from '@/components/layouts/started';
import Services from "@/components/layouts/services";
import Benefit from "@/components/benefit";
import Contacts from "@/components/contacts";

// Bibliotecas
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div className="mx-auto max-w-screen-xl lg:py-16 lg:px-12 py-8 px-4">
          <Started />
          <About />
          <Services />
          <Benefit />
          <Contacts />
        </div>
      </div>
      <Link
        href="https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21"
        className="fixed bottom-4 right-7 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={32} />
      </Link>
    </>
  )
}
