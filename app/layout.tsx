// Css
import "@/styles/globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-toastify/dist/ReactToastify.css'

// Next
import { Metadata } from "next";

// Bibliotecas
import clsx from "clsx";
import { ToastContainer } from "react-toastify";

// Utils
import { siteConfig } from "@/settings/site";
import { fontSans } from "@/settings/fonts";

// Componentes
import { Navbar } from "@/components/menu/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Consultoria em TI",
    "Desenvolvimento de Software",
    "Soluções em TI",
    "Transformação Digital",
    "Inovação Tecnológica",
    "Progamação"
  ],
  authors: [{ name: "LogicHub", url: "https://logichub.com.br" }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://logichub.com.br",
    siteName: siteConfig.name,
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "LogicHub - Consultoria em TI e Desenvolvimento de Software",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-[#F5F5F5] h-full font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="relative flex flex-col">
          <Navbar />
          <main className=" flex flex-col mx-auto w-full">
            {children}
            <ToastContainer autoClose={3000} />
          </main>
        </div>
      </body>
    </html>
  );
}
