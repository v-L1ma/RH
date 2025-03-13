import { FunctionComponent, useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import api from "../service/api";
import { TCandidate } from "../types/candidateType";

export const CandidatosVaga: FunctionComponent = () => {

  const navigate:NavigateFunction = useNavigate();

  const { id } = useParams();

  const [candidates, setCandidates] = useState<TCandidate[]>();


  async function loadCandidates(){

    try {

      const data = await api.get(`/applications/${id}`)

      console.log(data.data.applications)

      setCandidates(data.data.applications)

    } catch (error) {
      console.log("Houve um erro na requisição", error)
    }

  }

  useEffect(()=>{
    loadCandidates();
  },[candidates])

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold">Candidatos para a vaga</h1>
        <button className="underline mr-1" onClick={()=>navigate(-1)}>Voltar</button>
      </div>

      <div className="bg-white w-full rounded-lg shadow-md shadow-gray-200 p-5 flex flex-col gap-5">
        <div>
          <h1 className="text-xl font-bold">Nome da vaga</h1>
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
              {
                candidates && candidates.length>0 ? (
                candidates?.map((candidate)=>(
                  <tr className="border-t mt-10 hover:bg-gray-100">
                  <td className="px-4 py-2">{
                  candidate.nomeCompleto}</td>
                  <td className="px-4 py-2">{
                  candidate.telefone}</td>
                  <td className="px-4 py-2">{
                  candidate.email}</td>
                  <td className="px-4 py-2">Ver currículo completo</td>
                </tr>
                ))
              ) : (
                <tr className="border-t mt-10 hover:bg-gray-100">
                  <td colSpan={4} className="px-4 py-2">
                    Essa vaga não possuí candidatos.
                  </td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
