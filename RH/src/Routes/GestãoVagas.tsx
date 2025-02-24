import { FunctionComponent } from "react";
import { FaPlus } from "react-icons/fa";

export const GestaoVagas: FunctionComponent = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold">Gestão de vagas</h1>

        <button className="bg-green-700 py-3 px-5  rounded-xl shadow-md text-white font-extrabold flex items-center gap-2">
          <FaPlus />
          Criar vaga
        </button>
      </div>
      <div className="bg-white w-full h-5/6 rounded-lg shadow-md shadow-gray-200 p-5">
        <h1 className="text-xl font-bold">Vagas em aberto</h1>
        <div>
            <input type="text" className="border-2 border-black rounded-md p-2 w-full border-opacity-10 "/>
            <button>Buscar</button>
        </div>
      </div>
    </div>
  );
};
