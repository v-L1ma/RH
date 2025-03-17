import { FunctionComponent, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import CardVaga from "../components/CardVaga";
import { Link } from "react-router-dom";
import { vagaType } from "../types/vagaType";
import api from "../service/api";

export const GestaoVagas: FunctionComponent = () => {

   const [vagas, setVagas] = useState<vagaType[]>();

  async function loadVancacies() {

    try {

      const data = await api.get("/vacancies");

      setVagas(data.data.vacancies);
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
    loadVancacies();
  },[vagas]);

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold">Gestão de vagas</h1>
        

        <Link to="nova-vaga">
          <button className="bg-teal-600 py-3 px-5  rounded-xl shadow-md text-white font-extrabold flex items-center gap-2">
            <FaPlus />
            Criar vaga
          </button>
        </Link>
      </div>

      <div className="bg-white w-full rounded-lg shadow-md shadow-gray-200 p-5 flex flex-col gap-5">
        <h1 className="text-xl font-bold">Vagas em aberto</h1>
        <div className="flex flex-col md:flex-row gap-7">
            <input type="text" className="border-2 border-black rounded-md p-2 w-full border-opacity-10 "/>
            <button className="bg-teal-600 px-10 rounded-md text-white font-bold">Buscar</button>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-between">
        
        {
          vagas?.map((vaga)=>(
            <CardVaga Cargo={vaga.titulo} Descricao={vaga.descricao} DataCriacao={vaga.dataCriacao} id={vaga.id} Localizacao={vaga.local} Vagas={vaga.qtdeVagas} setor={vaga.setor} to={`vaga/${vaga.id}`} Candidato={false}/>
          ))
        }
      </div>

    </div>
  );
};
