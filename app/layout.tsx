// Css
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css'

// Next
import { Metadata } from "next";
import clsx from "clsx";

// Componentes
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

// Configuração
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

// Bibliotecas
import { ToastContainer } from "react-toastify";

// Vercel
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "font-sans antialiased ",
          fontSans.variable
        )}
      >
        <div className="flex bg-[#111827] flex-col h-screen overflow-auto">
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>

          <main className="flex container px-2">
            {children}
            <SpeedInsights />
            <Analytics />
            <ToastContainer autoClose={3000} />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
