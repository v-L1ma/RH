import { FunctionComponent } from "react";
import { formDataType } from "../../types/formDataType";

const FormacaoAcademicaForm: FunctionComponent<{
  data: formDataType;
  updateFieldHandler: (field: keyof formDataType, value: string) => void;
}> = ({ data, updateFieldHandler }) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center"> Formação Acadêmica</h1>

      <div className="flex gap-5">
        <div className="flex gap-2">
          <input
            type="radio"
            name="sitaucao"
            id="Concluído"
            value={"Concluído"}
            checked={data.situacao === "Concluído"}
            onChange={(e) => updateFieldHandler("situacao", e.target.value)}
          />
          <label htmlFor="Concluído">Concluído</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            name="sitaucao"
            id="Cursando"
            value={"Cursando"}
            checked={data.situacao === "Cursando"}
            onChange={(e) => updateFieldHandler("situacao", e.target.value)}
          />
          <label htmlFor="Cursando">Cursando</label>
        </div>

        <div className="flex gap-2">
          <input
            type="radio"
            name="sitaucao"
            id="Incompleto"
            value={"Incompleto"}
            checked={data.situacao === "Incompleto"}
            onChange={(e) => updateFieldHandler("situacao", e.target.value)}
          />
          <label htmlFor="Incompleto">Incompleto</label>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="escolaridade" className="font-bold">
          Nível de escolaridade
        </label>
        <select
          name="escolaridade"
          id="escolaridade"
          className="border-2 w-full p-2 rounded-lg"
          value={data.escolaridade || ""}
          onChange={(e) => updateFieldHandler("escolaridade", e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="Ensino fundamental">Ensino fundamental</option>
          <option value="Ensino médio">Ensino médio</option>
          <option value="Graduação">Graduação</option>
          <option value="Pós-Graduação">Pós-Graduação</option>
        </select>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="Curso" className="font-bold">
          Curso
        </label>
        <input
          type="text"
          id="Curso"
          className="border-2 w-full p-2 rounded-lg"
          placeholder="Digite o nome do curso (Sem abreviações)."
          value={data.curso || ""}
          onChange={(e) => updateFieldHandler("curso", e.target.value)}
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="instituição" className="font-bold">
          Instituição de ensino
        </label>
        <input
          type="text"
          id="instituição"
          className="border-2 w-full p-2 rounded-lg"
          placeholder="Digite o nome da empresa."
          value={data.instituição || ""}
          onChange={(e) => updateFieldHandler("instituição", e.target.value)}
        />
      </div>

      <div className="flex gap-5">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="dataInicioEstudo" className="font-bold">
            Data de ínicio
          </label>
          <input
            type="date"
            id="dataInicioEstudo"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite o seu melhor email."
            value={data.dataInicioEstudo || ""}
            onChange={(e) =>
              updateFieldHandler("dataInicioEstudo", e.target.value)
            }
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="dataTerminoEstudos" className="font-bold">
            Data de término
          </label>
          <input
            type="date"
            id="dataTerminoEstudos"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite o seu melhor email."
            value={data.dataTerminoEstudos || ""}
            onChange={(e) =>
              updateFieldHandler("dataTerminoEstudos", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FormacaoAcademicaForm;
