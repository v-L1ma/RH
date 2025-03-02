import React, { FunctionComponent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NovaVaga: FunctionComponent = () => {
  const navigate = useNavigate();
  const tituloRef = useRef<HTMLInputElement>(null);
  const quantidadeRef = useRef<HTMLInputElement>(null);
  const setorRef = useRef<HTMLInputElement>(null);
  const salarioRef = useRef<HTMLInputElement>(null);
  const descricaoRef = useRef<HTMLTextAreaElement>(null);

  type TVagas = {
    titulo: string | undefined;
    setor: string | undefined;
    salario: number | undefined;
    qtdeVagas: number | undefined;
    descricao: string | undefined;
  };

  const [vagas, setVagas] = useState<TVagas[]>([
    {
      titulo: "vinicius",
      setor: "vinicius",
      salario: 1000,
      qtdeVagas: 1,
      descricao: "vinicius",
    },
  ]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const novaVaga: TVagas = {
      titulo: tituloRef.current?.value,
      setor: setorRef.current?.value,
      salario: Number(salarioRef.current?.value),
      qtdeVagas: Number(quantidadeRef.current?.value),
      descricao: descricaoRef.current?.value,
    };

    setVagas((prev) => [...prev, novaVaga]);

    console.log(vagas);
  }

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl ">Criar vaga</h1>
        <div className="flex gap-3">
          <button className="p-2 underline" onClick={() => navigate(-1)}>
            Cancelar
          </button>
          <button
            className="bg-teal-600 py-2 px-5  rounded-lg shadow-md text-white font-extrabold flex items-center gap-2"
            onClick={onSubmit}
          >
            Salvar
          </button>
        </div>
      </div>

      <div className="bg-white w-full rounded-lg p-5 flex gap-4 justify-around items-center shadow-lg">
        <div className="bg-teal-600 w-2/6 h-1 mb-7"></div>
        <div className="flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full p-7 bg-teal-600  flex items-center justify-center">
            <p className="text-white font-bold text-2xl ">1</p>
          </div>
          <p className="text-center">Sobre</p>
        </div>

        <div className="bg-gray-400 w-2/6 h-1 mb-7"></div>

        <div className="flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full p-7 bg-teal-600  flex items-center justify-center">
            <p className="text-white font-bold text-2xl ">2</p>
          </div>
          <p className="text-center">Contrato</p>
        </div>

        <div className="bg-gray-400 w-2/6 h-1 mb-7"></div>
      </div>

      <form className="bg-white w-full rounded-lg p-5 flex flex-col gap-4 shadow-lg">
        <div>
          <h2 className="font-bold text-xl">Informações sobre a vaga</h2>
          <p>
            Preencha todas as informação necessarias para o candidato entender
            mais sobre a vaga.
          </p>
        </div>

        <div className="w-full">
          <label htmlFor="titulo" className="font-bold">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            className="border-2 w-full p-1 rounded-lg"
            placeholder="Digite um título para essa vaga."
            ref={tituloRef}
          />
        </div>

        <div className="grid grid-cols-2 w-full gap-5">
          <div className="flex flex-col">
            <label htmlFor="setor" className="font-bold">
              Setor
            </label>
            <input
              type="text"
              id="setor"
              className="border-2 p-1 rounded-lg"
              placeholder="Digite qual o setor desta vaga"
              ref={setorRef}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="setor" className="font-bold">
              Tipo de contrato
            </label>
            <input
              type="text"
              id="setor"
              className="border-2 p-1 rounded-lg"
              placeholder="Digite qual o setor desta vaga"
              ref={setorRef}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="setor" className="font-bold">
              Senioridade
            </label>
            <input
              type="text"
              id="setor"
              className="border-2 p-1 rounded-lg"
              placeholder="Digite qual o setor desta vaga"
              ref={setorRef}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="salario" className="font-bold">
              Salário
            </label>
            <input
              type="number"
              id="salario"
              className="border-2 p-1 rounded-lg"
              placeholder="Ex.: R$ 100.00"
              ref={salarioRef}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="setor" className="font-bold">
              Turno
            </label>
            <select name="" id="" className="border-2 p-1 rounded-lg">
              <option value="">Selecione um turno</option>
              <option value="">Manhã</option>
              <option value="">Tarde</option>
              <option value="">Noite</option>
              <option value="">Integral</option>
            </select>
          </div>

          <div className="flex flex-col ">
            <label htmlFor="vagas" className="font-bold">
              Qtde. Vagas
            </label>
            <input
              type="number"
              id="vagas"
              className="border-2 p-1 rounded-lg"
              placeholder="0"
              ref={quantidadeRef}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="descricao" className="font-bold">
            Requisitos
          </label>
          <textarea
            name="vagas"
            id="vagas"
            className="border-2 rounded-lg resize-none h-48"
            ref={descricaoRef}
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="descricao" className="font-bold">
            beneficios
          </label>
          <textarea
            name="vagas"
            id="vagas"
            className="border-2 rounded-lg resize-none h-48"
            ref={descricaoRef}
          ></textarea>
        </div>
      </form>
    </div>
  );
};
