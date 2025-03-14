// Css
import "@/styles/globals.css";

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
        <div className="relative flex flex-col h-screen">
          <div className="py-2">
            <Navbar />
          </div>
          <main className="container mx-auto w-full pt-16 px-4 flex-grow">
            {children}
          </main>
          <footer className="w-full flex items-center justify-center py-3">

          </footer>
        </div>
      </body>
    </html>
  );
}
