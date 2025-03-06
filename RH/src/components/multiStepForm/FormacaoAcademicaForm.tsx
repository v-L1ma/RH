import { FunctionComponent } from "react";

const FormacaoAcademicaForm: FunctionComponent = () => {
  return (
    <div>
      <h1 className="text-center"> Formação Acadêmica</h1>

      <div className="flex gap-5">
        <div className="flex gap-2">
          <input type="radio" name="" id="" />
          <label htmlFor="">Concluído</label>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="" id="" />
          <label htmlFor="">Cursando</label>
        </div>

        <div className="flex gap-2">
          <input type="radio" name="" id="" />
          <label htmlFor="">Incompleto</label>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="titulo" className="font-bold">
          Nível de escolaridade
        </label>
        <select name="" id="" className="border-2 w-full p-2 rounded-lg">
          <option value="">Selecione...</option>
          <option value="">Ensino fundamental</option>
          <option value="">Ensino médio</option>
          <option value="">Graduação</option>
          <option value="">Pós-Graduação</option>
        </select>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="titulo" className="font-bold">
          Curso
        </label>
        <input
          type="text"
          id="titulo"
          className="border-2 w-full p-2 rounded-lg"
          placeholder="Digite o nome do curso (Sem abreviações)."
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="titulo" className="font-bold">
          Instituição de ensino
        </label>
        <input
          type="text"
          id="titulo"
          className="border-2 w-full p-2 rounded-lg"
          placeholder="Digite o nome da empresa."
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
            placeholder="Digite o seu melhor email."
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
            placeholder="Digite o seu melhor email."
          />
        </div>
      </div>
    </div>
  );
};

export default FormacaoAcademicaForm;
