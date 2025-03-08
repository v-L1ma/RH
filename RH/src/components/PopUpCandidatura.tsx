import React, { FunctionComponent, useState } from "react";
import DadosPessoaisForm from "./multiStepForm/DadosPessoaisForm";
import ExperienciaProfissionalForm from "./multiStepForm/ExperienciaProfissionalForm";
import FormacaoAcademicaForm from "./multiStepForm/FormacaoAcademicaForm";

import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { formDataType } from "../types/formDataType";

const PopUpCandidatura: FunctionComponent = () => {
  
  const [data, setData] = useState<formDataType>({
    nomeCompleto: "",
    email: "",
    telefone: "",
    dataNasc: "",
    cpf: "",

    cargo: "",
    empresa: "",
    ultima: "",
    dataInicioEmpresa: "",
    dataTerminoEmpresa: "",
    descricaoATVD: "",

    escolaridade: "",
    curso: "",
    instituição: "",
    dataInicioEstudo: "",
    dataTerminoEstudos: "",
  })

  
  const updateFieldHandler = (key: string,value: string) => {
    setData((prev)=>{
      return{...prev, [key]: value}
    })
  }

  const sendForm = (e:React.FormEvent) => {
    e.preventDefault();
    ;
    console.log(data)

  }

  const formComponents = [
    <DadosPessoaisForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <ExperienciaProfissionalForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <FormacaoAcademicaForm data={data} updateFieldHandler={updateFieldHandler}/>,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useMultiStepForm(formComponents);

  
  

  return (
    <div className="bg-black/25 absolute z-10 w-full h-full top-0 flex justify-center">
      <div className="flex flex-col bg-white rounded-lg shadow-lg md:w-4/6 lg:w-2/6 h-fit mt-10 p-10 box-content gap-10">
        <div className="flex justify-between items-center gap-2">
          <div className={`${currentStep>=0 ? "border-teal-500" : "border-gray-500"} border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center`}>
            1
          </div>

          <div className={`${currentStep>=-0 ? "border-teal-500" : "border-gray-500"} border border-teal-500 w-full h-0`}></div>

          <div className={`${currentStep>=1 ? "border-teal-500" : "border-gray-500"} border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center`}>
            2
          </div>

          <div className={`${currentStep>=2 ? "border-teal-500" : "border-gray-500"} border w-full h-0`}></div>

          <div className={`${currentStep>=2 ? "border-teal-500" : "border-gray-500"} border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center`}>
            3
          </div>

          
        </div>

        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => changeStep({ steps: currentStep + 1, event: e })}
        >
          {currentComponent}

          <div className="flex justify-end w-full gap-2">
           { !isFirstStep &&
            <button
              className="border-2 py-3 px-7 rounded-lg"
              onClick={() => changeStep({ steps: currentStep - 1 })}
              type="button"
            >
              Voltar
            </button>
            }

            {isLastStep ? (
              <button
                type="button"
                className="bg-teal-500 py-3 px-7  rounded-lg"
                onClick={(e)=>sendForm(e)}
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
