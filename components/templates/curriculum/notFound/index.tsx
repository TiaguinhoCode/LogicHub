"use client";

// Next
import { Button, Card, CardBody } from "@heroui/react";
import Link from "next/link";

// Bibliotecas
import { FiHome, FiRefreshCw } from "react-icons/fi";
import { LuFileX } from "react-icons/lu";

export default function NotFoundComponent() {
  const suggestions = [
    {
      icon: FiHome,
      title: "Voltar ao Início",
      description: "Retorne à página principal",
      action: "Ir para Home",
      href: "/",
    },
    {
      icon: FiRefreshCw,
      title: "Recarregar Página",
      description: "Tente recarregar a página atual",
      action: "Recarregar",
      onClick: () => window.location.reload(),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="relative">
              <div className="w-32 h-32 mx-auto lg:mx-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-6">
                <LuFileX className="w-16 h-16 text-blue-600" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  Oops!
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                Página não encontrada
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                A página que você está procurando não existe ou foi movida. Que
                tal explorar outras seções?
              </p>
            </div>
            <div className="flex justify-center lg:justify-start space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">404</div>
                <div className="text-sm text-gray-500">Erro</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center lg:text-left mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Como posso ajudar?
              </h3>
              <p className="text-gray-600">
                Escolha uma das opções abaixo para continuar navegando
              </p>
            </div>

            <div className="space-y-4">
              {suggestions.map((suggestion, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80"
                >
                  <CardBody className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                        <suggestion.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {suggestion.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {suggestion.description}
                        </p>
                      </div>
                      <div>
                        {suggestion.href ? (
                          <Link href={suggestion.href}>
                            <Button className="group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-300">
                              {suggestion.action}
                            </Button>
                          </Link>
                        ) : (
                          <Button
                            onClick={suggestion.onClick}
                            className="group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-300"
                          >
                            {suggestion.action}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
