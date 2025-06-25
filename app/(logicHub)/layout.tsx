// Next
import { Metadata } from "next";
import Link from "next/link";

// Componenetes
import { Navbar } from "@/components/ui/menu";
import Footer from "@/components/ui/footer";

// Configuração
import { siteConfig } from "@/config/site";

// Bibliotecas
import { FaWhatsapp } from "react-icons/fa6";
import Provider from "@/provider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [{ url: "/favicon.ico", type: "image/png", sizes: "180x180" }],
};

export default function RouterLandingPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />
      <section className="relative pt-20 pb-20 overflow-hidden">
        <Provider>{children}</Provider>
      </section>
      <Footer />
      <Link
        href="https://wa.me/558587805592?text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os%21"
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={32} />
      </Link>
    </div>
  );
}
