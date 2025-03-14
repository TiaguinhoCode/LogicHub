// Bibliotecas

// Utils

// Componentes
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Olá! Eu sou <br />
            <span className="text-[#006fee]">Tiago Rafael</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Desenvolvedor de Sistemas e Analista de Dados com 2+ anos de experiência. Especialista em <strong>landing pages</strong>, <strong>softwares web</strong> e <strong>automação de tarefas</strong>. Transformo dados em decisões estratégicas e soluções eficientes.
          </p>
          <Button color="success" size="lg" className="w-1/3 text-white font-extrabold">
            Vamos Trabalhar Juntos!
          </Button>
        </div>
        <div className="relative">
          <img
            // src="https://i.pravatar.cc/500"
            alt="Profile"
            className="rounded-2xl w-full max-w-md mx-auto"
          />
          <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg">
            <div className="flex items-center gap-2">
              {/* <Icon icon="lucide:award" className="text-yellow-500 text-xl" /> */}
              <span className="text-sm font-medium">Best Design Awards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
