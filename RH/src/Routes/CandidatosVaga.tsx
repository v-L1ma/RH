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
        <div className="bg-white rounded-lg shadow-md py-5 text-center shadow-gray-200">
          <h1 className="text-3xl font-extrabold">{candidates?.length || 0}</h1>
          <h2 className="font-semibold text-xl">Candidatos</h2>
        </div>

        <div className="bg-white rounded-lg shadow-md py-5 text-center shadow-gray-200">
          <h1 className="text-3xl font-extrabold">58</h1>
          <h2 className="font-semibold text-xl">Aberta à</h2>
        </div>

        <div className="bg-white rounded-lg shadow-md py-5 text-center shadow-gray-200">
          <h1 className="text-3xl font-extrabold">58</h1>
          <h2 className="font-semibold text-xl">Entrevistas agendadas</h2>
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
