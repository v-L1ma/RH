import { FunctionComponent } from "react";
import { formDataType } from "../../types/formDataType";

const ExperienciaProfissionalForm: FunctionComponent<{
  data: formDataType;
  updateFieldHandler: (field: keyof formDataType, value: string) => void
}> = ({ data, updateFieldHandler }) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center">Experiência Profissional</h1>

      <div className="flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="titulo" className="font-bold">
            Cargo
          </label>
          <input
            type="text"
            id="titulo"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite o nome do cargo."
            value={data.cargo}
            onChange={(e) => { updateFieldHandler("cargo", e.target.value) }}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="titulo" className="font-bold">
            Empresa
          </label>
          <input
            type="text"
            id="titulo"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite o nome da empresa."
            value={data.empresa}
            onChange={(e) => { updateFieldHandler("empresa", e.target.value) }}
          />
        </div>

        <div className="flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo" className="font-bold">
              Data de ínicio
            </label>
            <input
              type="date"
              id="titulo"
              className="border-2 w-full p-2 rounded-lg"
              placeholder="Digite a data de inicio."
              value={data.dataInicioEmpresa}
              onChange={(e) => { updateFieldHandler("dataInicioEmpresa", e.target.value) }}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo" className="font-bold">
              Data de término
            </label>
            <input
              type="date"
              id="titulo"
              className="border-2 w-full p-2 rounded-lg"
              placeholder="Digite a data de termino."
              value={data.dataTerminoEmpresa}
              onChange={(e) => { updateFieldHandler("dataTerminoEmpresa", e.target.value) }}
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="titulo" className="font-bold">
            Descrição das atividades
          </label>
          <textarea
            name=""
            id=""
            className="border-2 rounded-lg resize-none"
            value={data.descricaoATVD || ""}
            onChange={(e) => updateFieldHandler("descricaoATVD", e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ExperienciaProfissionalForm;
