import { FunctionComponent, useEffect, useState } from "react";
import api from "../service/api";
import { TCandidate } from "../types/candidateType";
import CurriculoLayout from "../components/CurriculoLayout";

const BancoTalentos: FunctionComponent = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
  const [currentID, setCurrentID] = useState<number>();
  const [candidates, setCandidates] = useState<TCandidate[]>([]);

  async function loadCandidates() {
    try {
      const data = await api.get("/applications");

      console.log(data.data.applications);

      setCandidates(data.data.applications);
    } catch (error) {
      console.log("Houve um erro na requisição", error);
    }
  }

  useEffect(() => {
    loadCandidates();
  }, []);

  return (
    <div className="flex flex-col gap-10 w-full">
      <h1 className="text-3xl font-extrabold">Banco de talentos</h1>
      <div className="bg-white w-full rounded-xl shadow-md shadow-gray-200 p-5 flex flex-col gap-5 ">
        <div>
          <h1 className="text-xl font-bold">Banco de talentos</h1>
          <p>
            Todos os candidatos que se já se candidataram em qualquer vaga estão
            aqui.
          </p>
        </div>
        <div className="overflow-x-scroll ">
          <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gray-100/50">
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
              <div className="w-3/6 bg-white p-10 shadow-xl rounded-xl ">
                <div
                  className="flex justify-end text-3xl cursor-pointer"
                  onClick={() => setIsPopUpOpen(!isPopUpOpen)}
                >
                  x
                </div>
                {candidates.map((candidate) => {
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
    </div>
  );
};

export default BancoTalentos;
