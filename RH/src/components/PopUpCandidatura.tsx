import { FunctionComponent } from "react";
import DadosPessoaisForm from "./multiStepForm/DadosPessoaisForm";
import ExperienciaProfissionalForm from "./multiStepForm/ExperienciaProfissionalForm";
import FormacaoAcademicaForm from "./multiStepForm/FormacaoAcademicaForm";

import { useMultiStepForm } from "../hooks/useMultiStepForm";

const PopUpCandidatura: FunctionComponent = () => {
  const formComponents = [
    <DadosPessoaisForm />,
    <ExperienciaProfissionalForm />,
    <FormacaoAcademicaForm />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep } =
    useMultiStepForm(formComponents);

  return (
    <div className="bg-black/25 absolute z-10 w-full h-full top-0 flex justify-center">
      <div className="flex flex-col bg-white rounded-lg shadow-lg md:w-4/6 lg:w-2/6 h-fit mt-10 p-10 box-content gap-10">
        <div className="flex justify-between items-center gap-2">
          <div className={`${currentStep>=0 ? "border-teal-500" : "border-gray-500"} border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center`}>
            1
          </div>

          <div className={`${currentStep>=0 ? "border-teal-500" : "border-gray-500"} border border-teal-500 w-full h-0`}></div>

          <div className={`${currentStep>=1 ? "border-teal-500" : "border-gray-500"} border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center`}>
            2
          </div>

          <div className={`${currentStep>=1 ? "border-teal-500" : "border-gray-500"} border w-full h-0`}></div>

          <div className={`${currentStep>=2 ? "border-teal-500" : "border-gray-500"} border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center`}>
            3
          </div>

          <div className={`${currentStep>=2 ? "border-teal-500" : "border-gray-500"} border w-full h-0`}></div>

          <div className={`${currentStep>=3 ? "border-teal-500" : "border-gray-500"} border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center`}>
            4
          </div>
        </div>

        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => changeStep({ steps: currentStep + 1, event: e })}
        >
          {currentComponent}

          <div className="flex justify-end w-full gap-2">
            <button
              className="border-2 py-3 px-7 rounded-lg"
              onClick={() => changeStep({ steps: currentStep - 1 })}
              type="button"
            >
              Voltar
            </button>
            {isLastStep ? (
              <button
                type="submit"
                className="bg-teal-500 py-3 px-7  rounded-lg"
              >
                Enviar
              </button>
            ) : (
              <button
                type="submit"
                className="bg-teal-500 py-3 px-7  rounded-lg"
              >
                Avançar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUpCandidatura;

/*
<h1 className="text-center">Dados Pessoais</h1>

<div className="w-full flex flex-col gap-2">
<label htmlFor="titulo" className="font-bold">
  Nome completo
</label>
<input
  type="text"
  id="titulo"
  className="border-2 w-full p-2 rounded-lg"
  placeholder="Digite seu nome completo."
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
  placeholder="Digite um título para essa vaga."
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
/>
</div>

*/

/*



/*
        */
