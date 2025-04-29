// Css
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css'

// Next
import { Metadata } from "next";
import clsx from "clsx";

// Configuração
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

// Bibliotecas
import { ToastContainer } from "react-toastify";

// Vercel
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Utils
import { GoogleAnalytics } from "@/utils/analytics";

export const metadata: Metadata = {
  title: "Bio - LogicHub",
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
      <head><GoogleAnalytics /></head>
      <body
        className={clsx(
          "font-sans antialiased ",
          fontSans.variable
        )}
      >
        {children}
        <SpeedInsights />
        <Analytics />
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
