// Componentes
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";

// Bibliotecas
import { FaUser } from "react-icons/fa";
import { MdEmail, MdSave } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaShop } from "react-icons/fa6";

export default function FormContacts() {
    return (
        <div className="bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Fale com um especialista</h2>
            <form className="space-y-8">
                <Input
                    variant="bordered"
                    label="Nome completo*"
                    type="text"
                    placeholder="Ex.: Tiago Rafael dos Santos Olveira"
                    startContent={<FaUser className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                />
                <Input
                    variant="bordered"
                    label="Email*"
                    type="email"
                    placeholder="Ex.: setor@empresa.com"
                    startContent={<MdEmail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                />
                <Input
                    variant="bordered"
                    label="Celular*"
                    type="text"
                    placeholder="Ex.: (DD) 90000-0000"
                    startContent={<IoMdPhonePortrait className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                />
                <Input
                    variant="bordered"
                    label="Nome da Empresa*"
                    type="text"
                    placeholder="Ex.: LogicHub"
                    startContent={<FaShop className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
                />
                <Button
                    type="submit"
                    color="success"
                    size="lg"
                    className="w-full text-white font-bold transition duration-200 hover:bg-green-600"
                    endContent={<MdSave className="text-xl text-white pointer-events-none flex-shrink-0" />}
                >
                    Enviar
                </Button>
            </form>
        </div>
    );
}
