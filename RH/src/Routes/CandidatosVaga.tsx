import { FunctionComponent, useEffect, useState } from "react";
import { Link, NavigateFunction, Outlet, useNavigate, useParams } from "react-router-dom";
import api from "../service/api";
import { TCandidate } from "../types/candidateType";
import { vagaType } from "../types/vagaType";

export const CandidatosVaga: FunctionComponent = () => {
  const navigate: NavigateFunction = useNavigate();

  const { id } = useParams();

  const [candidates, setCandidates] = useState<TCandidate[]>();
  const [vagaInfo, setVagaInfo] = useState<vagaType>();

  async function loadCandidates() {
    try {
      const data = await api.get(`/applications/${id}`);
      const vagaInfo = await api.get(`/vacancies/${id}`);

      console.log(data.data.applications);
      console.log(vagaInfo.data.vacancy);

      setCandidates(data.data.applications);
      setVagaInfo(vagaInfo.data.vacancy);
      
    } catch (error) {
      console.log("Houve um erro na requisição", error);
    }
  }

  useEffect(() => {
    loadCandidates();
    console.log(vagaInfo)
  }, []);

  

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold">Candidatos para a vaga</h1>
        <button className="underline mr-1" onClick={() => navigate(-1)}>
          Voltar
        </button>
      </div>

      <div className="grid grid-cols-3 gap-10">
      <div className="bg-white rounded-xl border p-5 flex flex-col justify-start gap-2">
          <div className=" flex flex-col items-start justify-start gap-2">
            <h1 className="text-xl font-bold">Candidatos</h1>            
            <p className="text-sm">Quantidade de candidatos </p>
          </div>
          <div className="flex justify-start px-2">
            <p className="font-bold text-3xl">{candidates?.length || 0}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border p-5 flex flex-col justify-start gap-2">
          <div className=" flex flex-col items-start justify-start gap-2">
            <h1 className="text-xl font-bold">Tempo em aberto</h1>            
            <p className="text-sm">Tempo que a vaga está aberta </p>
          </div>
          <div className="flex justify-start px-2">
            <p className="font-bold text-3xl"></p>
          </div>
        </div>

        <div className="bg-white rounded-xl border p-5 flex flex-col justify-start gap-2">
          <div className=" flex flex-col items-start justify-start gap-2">
            <h1 className="text-xl font-bold">Vagas em atraso</h1>            
            <p className="text-sm">Quantidade de vagas </p>
          </div>
          <div className="flex justify-start px-2">
            <p className="font-bold text-3xl">2</p>
          </div>
        </div>
      </div>

      <div>
        <nav className="mb-2">
          <ul className="flex gap-5">
            <Link to="">
              <li className="p-2 border-b-2 border-teal-500 text-teal-600">Candidatos</li>
            </Link>
            <Link to="editar">
              <li className="p-2">Editar vaga</li>
            </Link>
          </ul>
        </nav>

        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};
