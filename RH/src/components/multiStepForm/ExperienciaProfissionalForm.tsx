import { FunctionComponent } from "react";

const ExperienciaProfissionalForm: FunctionComponent = () => {
  return (
    <div>
      <h1>Experiência Profissional</h1>

      <form action="" className="flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="titulo" className="font-bold">
            Cargo
          </label>
          <input
            type="text"
            id="titulo"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite o nome do cargo."
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

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="titulo" className="font-bold">
            Descrição das atividades
          </label>
          <textarea
            name=""
            id=""
            className="border-2 rounded-lg resize-none"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ExperienciaProfissionalForm;
