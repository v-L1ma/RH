import { FunctionComponent, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import api from "../service/api";
import { TCandidate } from "../types/candidateType";
import { vagaType } from "../types/vagaType";
import CurriculoLayout from "./CurriculoLayout";

const TabelaCandidatos:FunctionComponent=()=>{

    const { id } = useParams();

  const [candidates, setCandidates] = useState<TCandidate[]>();
  const [vagaInfo, setVagaInfo] = useState<vagaType>();
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
  const [currentID, setCurrentID] = useState<number>();

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
        <div className="bg-white w-full rounded-xl shadow-md shadow-gray-200 p-5 flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-bold">{vagaInfo?.titulo}</h1>
            <p>Os candidatos que se inscreverem param esta vaga.</p>
          </div>
          <div className="overflow-x-scroll ">
          <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gray-100/50">
              <tr>
                <th className="w-3"></th>
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
                    <td className="px-4 py-2">
                      
                    <div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
   
</div>
                    </td>
                    <td className="px-4 py-2">{candidate.nomeCompleto}</td>
                    <td className="px-4 py-2">{candidate.telefone}</td>
                    <td className="px-4 py-2">{candidate.email}</td>
                    <td
                      className="px-4 py-2"
                      onClick={() => {
                        setIsPopUpOpen(!isPopUpOpen);
                        setCurrentID(candidate.id);
                      }}
                    >
                      <p className="bg-teal-600 text-white cursor-pointer w-fit py-2 px-3 rounded-xl font-bold">
                        Ver currículo
                      </p>
                    </td>
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
          {isPopUpOpen && (
            <div className="bg-black/20 w-full h-screen absolute top-0 left-0 flex flex-col items-center justify-center py-24 overflow-y-scroll">
              <div className="w-4/6 bg-white p-10 shadow-xl rounded-xl mt-72">
                <div
                  className="flex justify-end text-3xl cursor-pointer"
                  onClick={() => setIsPopUpOpen(!isPopUpOpen)}
                >
                  x
                </div>
                {candidates?.map((candidate) => {
                  if (candidate.id === currentID) {
                    return <CurriculoLayout candidate={candidate} />;
                  }
                  return null;
                })}
              </div>
            </div>
          )}
        </div>
        </div>

    )
}

export default TabelaCandidatos;