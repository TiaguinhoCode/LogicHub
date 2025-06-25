// React
import { ReactNode } from "react";

// Next
import { Metadata } from "next";

// Metadados
export const metadata: Metadata = {
  title: {
    template: "%s | Currículo",
    default: "Currículo | Minha Aplicação",
  },
  description: "Veja o currículo detalhado dos membros da nossa equipe.",
  icons: [{ url: "/favicon.ico", type: "image/png", sizes: "180x180" }],
};

export default function RouterCurriculum({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {children}
    </div>
  );
}
