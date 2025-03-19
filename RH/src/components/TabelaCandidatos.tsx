import { FunctionComponent, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import api from "../service/api";
import { TCandidate } from "../types/candidateType";
import { vagaType } from "../types/vagaType";

const TabelaCandidatos:FunctionComponent=()=>{

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
  }, []);

    return(
        <div className="bg-white w-full rounded-lg shadow-md shadow-gray-200 p-5 flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-bold">{vagaInfo?.titulo}</h1>
            <p>Os candidatos que se inscreverem param esta vaga.</p>
          </div>
          <div className="overflow-x-scroll">
            <table className="w-full rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-0 text-left border-l">Nome</th>
                  <th className="px-4 py-2 text-left border-l">Telefone</th>
                  <th className="px-4 py-2 text-left  border-l">Email</th>
                  <th className="px-4 py-2 text-left border-l">Currículo</th>
                </tr>
              </thead>
              <tbody>
                {candidates && candidates.length > 0 ? (
                  candidates?.map((candidate) => (
                    <tr className="border-t mt-10 hover:bg-gray-100">
                      <td className="px-4 py-2">{candidate.nomeCompleto}</td>
                      <td className="px-4 py-2">{candidate.telefone}</td>
                      <td className="px-4 py-2">{candidate.email}</td>
                      <td className="px-4 py-2">Ver currículo completo</td>
                    </tr>
                  ))
                ) : (
                  <tr className="border-t mt-10 hover:bg-gray-100">
                    <td colSpan={4} className="px-4 py-2">
                      Essa vaga não possuí candidatos.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

    )
}

export default TabelaCandidatos;