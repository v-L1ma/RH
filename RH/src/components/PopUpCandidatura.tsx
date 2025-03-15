import React, { FunctionComponent, useState } from "react";
import DadosPessoaisForm from "./multiStepForm/DadosPessoaisForm";
import ExperienciaProfissionalForm from "./multiStepForm/ExperienciaProfissionalForm";
import FormacaoAcademicaForm from "./multiStepForm/FormacaoAcademicaForm";
import { IoClose } from "react-icons/io5";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { formDataType } from "../types/formDataType";
import api from "../service/api";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { data } from "react-router-dom";

interface PopUpCandidaturaProps{
  onclick: () => void,
  idVaga: number,
}

const schema = z.object({
  nomeCompleto: z.string().min(3,"Por favor insira seu nome"),
  email:z.string(),
  telefone:z.string(),
  dataNasc:z.string(),
  cpf:z.string(),

  cargo:z.string(),
  empresa:z.string(),
  dataInicioEmpresa:z.string(),
  dataTerminoEmpresa:z.string(),
  descricaoATVD:z.string(),

  situacao:z.unknown(),
  escolaridade:z.string(),
  curso:z.string(),
  instituicao:z.string(),
  dataInicioEstudo:z.string(),
  dataTerminoEstudos:z.string(),

})

type FormData = z.infer<typeof schema>;

const PopUpCandidatura: FunctionComponent<PopUpCandidaturaProps> = ({ onclick, idVaga }) => {

  const { register, handleSubmit, formState: { errors }} = useForm<FormData>({
    resolver: zodResolver(schema)
});

const onSubmit = (data: FormData) => {
  console.log(data);
};


const formComponents = [
  <DadosPessoaisForm register={register} errors={errors}/>,
  <ExperienciaProfissionalForm register={register} errors={errors}/>,
  <FormacaoAcademicaForm register={register} errors={errors}/>,
];


  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useMultiStepForm(formComponents);

  

  return (
    <div className="bg-black/25 absolute z-10 w-full h-fit top-0 flex justify-center pb-10">
      <div className="flex flex-col bg-white rounded-lg shadow-lg md:w-4/6 lg:w-2/6 h-fit mt-10 p-10 box-content gap-10">
      <div className="flex justify-end">
        <button onClick={()=>onclick()} className="text-3xl"><IoClose/></button>
      </div>
        <div className="flex justify-between items-center gap-2">
          <div className={`${currentStep>=0 ? "border-teal-500" : "border-gray-500"} border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center`}>
            1
          </div>

          <div className={`${currentStep>=0 ? "border-teal-500" : "border-gray-500"} border border-teal-500 w-full h-0`}></div>

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
          onSubmit={handleSubmit(onSubmit)}>
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
                type="submit"
                className="bg-teal-500 py-3 px-7  rounded-lg"
              >
                Enviar
              </button>
            ) : (
              <button
                type="button"
                className="bg-teal-500 py-3 px-7  rounded-lg"
                onClick={(e) => changeStep({ steps: currentStep + 1, event: e })}
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
