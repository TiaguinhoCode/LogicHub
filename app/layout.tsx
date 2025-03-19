// Css
import "@/styles/globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Next
import { Metadata } from "next";

// Bibliotecas
import clsx from "clsx";

// Utils
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

// Componentes
import { Navbar } from "@/components/menu/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
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
          </main>
        </div>
      </body>
    </html>
  );
}
