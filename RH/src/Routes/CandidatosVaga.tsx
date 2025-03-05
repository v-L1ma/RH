import { FunctionComponent } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const CandidatosVaga: FunctionComponent = () => {

  const navigate:NavigateFunction = useNavigate();

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
                <tr className="border-t mt-10 ">
                  <td className="px-4 py-2">Vinicius</td>
                  <td className="px-4 py-2">1398165216</td>
                  <td className="px-4 py-2">vinicius@email</td>
                  <td className="px-4 py-2">Currículo</td>
                </tr>
              <tr className="border-t mt-10 ">
                <td className="px-4 py-2">Vinicius</td>
                <td className="px-4 py-2">1398165216</td>
                <td className="px-4 py-2">vinicius@email</td>
                <td className="px-4 py-2">Currículo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
