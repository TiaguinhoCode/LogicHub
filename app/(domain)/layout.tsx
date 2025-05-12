// Css
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css'

// Next
import { Metadata } from "next";

// Componentes
import { Navbar } from "@/components/ui/menu";
import Footer from "@/components/ui/footer";

// Configuração
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s – ${siteConfig.name}`,
  },
  keywords: [
    "consultoria de TI",
    "serviços de tecnologia da informação",
    "suporte técnico para empresas",
    "infraestrutura de TI",
    "segurança da informação",
    "cloud computing",
    "transformação digital",
    "sistemas empresariais",
    "lógica hub",
    "Logichub consultoria TI",
    "software",
    "saas",
    "desenvolvedor"
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://logichub.com.br',
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
  },
};

export default function DomainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#111827] flex-col h-screen overflow-auto">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="flex w-full px-2">
        {children}
      </main>
      <Footer />
    </div>
  );
}
