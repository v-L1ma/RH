import { FunctionComponent } from "react";

export const BancoTalentos: FunctionComponent = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold">Banco de talentos</h1>
      </div>

      <div className="bg-white w-full rounded-xl shadow-md shadow-gray-200 p-5 flex flex-col gap-5">
        <div>
          <h1 className="text-xl font-bold">Candidatos no banco de talentos</h1>
          <p>Os candidatos que se inscreverem param esta vaga.</p>
        </div>

        <div className="w-full overflow-x-scroll">
          <table className="w-full">
            <thead>
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
