import { FunctionComponent } from "react";
import { formDataType } from "../../types/formDataType";

const DadosPessoaisForm: FunctionComponent<{
  data: formDataType;
  updateFieldHandler: (field: keyof formDataType, value: string) => void;
}> = ({ data, updateFieldHandler }) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center">Dados Pessoais</h1>
      <div className="flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">

          <label htmlFor="titulo" className="font-bold">
            Nome completo
          </label>
          <input
            type="text"
            id="titulo"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite seu nome completo."
            value={data.nomeCompleto || ""}
            onChange={(e) => updateFieldHandler("nomeCompleto", e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="titulo" className="font-bold">
            E-mail
          </label>
          <input
            type="text"
            id="titulo"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite o seu melhor email."
            value={data.email || ""}
            onChange={(e) => updateFieldHandler("email", e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="titulo" className="font-bold">
            Data de nascimento
          </label>
          <input
            type="date"
            id="titulo"
            className="border-2 w-full p-2 rounded-lg text-gray-400"
            placeholder="Digite a sua data de nascimento."
            value={data.dataNasc || ""}
            onChange={(e) => updateFieldHandler("dataNasc", e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="titulo" className="font-bold">
            CPF
          </label>
          <input
            type="text"
            id="titulo"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite o seu CPF."
            value={data.cpf || ""}
            onChange={(e) => updateFieldHandler("cpf", e.target.value)}

          />
        </div>
      </div>
    </div>
  );
}

export default DadosPessoaisForm;