import { FunctionComponent } from "react";
import { FaPlus } from "react-icons/fa";
import CardVaga from "../components/CardVaga";
import { Link } from "react-router-dom";

export const GestaoVagas: FunctionComponent = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold">Gestão de vagas</h1>
        

        <Link to="nova-vaga">
          <button className="bg-green-700 py-3 px-5  rounded-xl shadow-md text-white font-extrabold flex items-center gap-2">
            <FaPlus />
            Criar vaga
          </button>
        </Link>
      </div>

      <div className="bg-white w-full rounded-lg shadow-md shadow-gray-200 p-5 flex flex-col gap-5">
        <h1 className="text-xl font-bold">Vagas em aberto</h1>
        <div className="flex gap-7">
            <input type="text" className="border-2 border-black rounded-md p-2 w-full border-opacity-10 "/>
            <button className="bg-green-600 px-10 rounded-md text-white font-bold">Buscar</button>
        </div>
      </div>

      <div className=" w-full">

          <CardVaga Cargo="Operador de estacionamento" Descriçao="daskjdakjasdk" DataCriacao="24/02/2025" id={1} Localizacao="Santos" Vagas={3} setor="Estacionamento"/>

        

      </div>

    </div>
  );
};
