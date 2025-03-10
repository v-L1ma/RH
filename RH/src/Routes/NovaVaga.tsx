import React, { FunctionComponent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdFormatBold,
  MdOutlineFormatItalic,
  MdFormatUnderlined,
  MdUndo,
  MdRedo,
} from "react-icons/md";
import api from "../service/api";

export const NovaVaga: FunctionComponent = () => {
  const navigate = useNavigate();
  const tituloRef = useRef<HTMLInputElement>(null);
  const quantidadeRef = useRef<HTMLInputElement>(null);
  const setorRef = useRef<HTMLInputElement>(null);
  const salarioRef = useRef<HTMLInputElement>(null);
  const descricaoRef = useRef<HTMLTextAreaElement>(null);
  const localRef = useRef<HTMLSelectElement>(null);
  const senioridadeRef = useRef<HTMLSelectElement>(null);
  const diversidadeRef = useRef<HTMLSelectElement>(null);
  const pcdRef = useRef<HTMLSelectElement>(null);
  const contratoRef = useRef<HTMLSelectElement>(null);
  const turnoRef = useRef<HTMLSelectElement>(null);
  const enderecoRef = useRef<HTMLSelectElement>(null);
  const token = localStorage.getItem("token");

  const [local, setLocal] = useState<string>();
  const [quantidade, setQuantidade] = useState<number>(0);

  async function onSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();

    const response = await api.post(
      "/vacancies",
      {
        titulo: tituloRef.current?.value || "",
        setor: setorRef.current?.value|| "",
        salario: salarioRef.current?.value || "",
        qtdeVagas: Number(quantidadeRef.current?.value) || 0,
        descricao: descricaoRef.current?.value || "",
        senioridade: senioridadeRef.current?.value || "",
        diversidade: diversidadeRef.current?.value || "",
        pcd: pcdRef.current?.value || "",
        contrato: contratoRef.current?.value || "",
        turno: turnoRef.current?.value || "",
        local: localRef.current?.value || "",
        endereco: enderecoRef.current?.value || "",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    console.log(response);
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
            onClick={(e) => onSubmit(e)}
          >
            Salvar
          </button>
        </div>
      </div>

      <form className="flex flex-col gap-10">
        <div className="bg-white w-full rounded-lg p-5 flex flex-col gap-4 shadow-lg">
          <div>
            <h2 className="font-bold text-xl">Informações sobre a vaga</h2>
            <p>
              Preencha todas as informação necessarias para o candidato entender
              mais sobre a vaga.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="titulo" className="font-bold">
                Título para essa vaga
              </label>
              <input
                type="text"
                id="titulo"
                className="border-2 w-full p-2 rounded-lg"
                placeholder="Digite um título para essa vaga."
                ref={tituloRef}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="vagas" className="font-bold">
                Qtde. Vagas
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="bg-gray-300 px-3 py-2 rounded-md"
                  onClick={() => setQuantidade((prev) => Math.max(prev - 1, 0))}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantidade}
                  ref={quantidadeRef}
                  onChange={(e) => setQuantidade(Number(e.target.value))}
                  className="border-2 p-2 text-center w-16 rounded-lg no-spinner"
                />
                <button
                  type="button"
                  className="bg-gray-300 px-3 py-2 rounded-md"
                  onClick={() => setQuantidade((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="descricao" className="font-bold">
              Descricão para essa vaga
            </label>
            <div className="flex flex-col border-2 rounded-lg h-48 overflow-hidden">
              <div className="w-full border-b-2">
                <button
                  type="button"
                  className="p-2 text-xl rounded-lg hover:bg-gray-100"
                >
                  <MdUndo />
                </button>
                <button
                  type="button"
                  className="p-2 text-xl rounded-lg hover:bg-gray-100"
                >
                  <MdRedo />
                </button>
                <button
                  type="button"
                  className="p-2 text-xl rounded-lg hover:bg-gray-100"
                >
                  <MdFormatBold />
                </button>
                <button
                  type="button"
                  className="p-2 text-xl rounded-lg hover:bg-gray-100"
                >
                  <MdOutlineFormatItalic />
                </button>
                <button
                  type="button"
                  className="p-2 text-xl rounded-lg hover:bg-gray-100"
                >
                  <MdFormatUnderlined />
                </button>
              </div>
              <textarea
                name="vagas"
                id="vagas"
                className="w-full h-full resize-none"
                ref={descricaoRef}
              ></textarea>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="setor" className="font-bold">
                Setor
              </label>
              <input
                type="text"
                id="setor"
                className="border-2 p-2 rounded-lg"
                placeholder="Digite qual o setor desta vaga"
                ref={setorRef}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="senioridade" className="font-bold">
                Senioridade
              </label>
              <select
                name=""
                id=""
                className="border-2 p-2 rounded-lg"
                ref={senioridadeRef}
              >
                <option value="" disabled>
                  Selecione...
                </option>
                <option value="Aprendiz">Aprendiz</option>
                <option value="Estágiario">Estágiario</option>
                <option value="Assistente">Assistente</option>
                <option value="Junior">Junior</option>
                <option value="Pleno">Pleno</option>
                <option value="Sênior">Sênior</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="diversidade" className="font-bold">
                Diversidade
              </label>
              <select
                name=""
                id=""
                className="border-2 p-2 rounded-lg"
                ref={diversidadeRef}
              >
                <option value="" disabled>
                  Selecione...
                </option>
                <option value="Todas">Selecionar todas</option>
                <option value="Mulheres">Mulheres</option>
                <option value="Idade 40">Pessoas com idade 40+</option>
                <option value="Indigenas">Pessoas Indigenas</option>
                <option value="Pretas">Pessoas pretas ou pardas</option>
                <option value="Deficiências">Pessoas com Deficiência</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="setor" className="font-bold">
                Vaga para Pessoas com deficiência (PCD)
              </label>
              <select
                name=""
                id=""
                className="border-2 p-2 rounded-lg"
                ref={pcdRef}
              >
                <option value="" disabled>
                  Selecione...
                </option>
                <option value="Excluisva">
                  Exclusiva para Pessoas com deficiência (PCD)
                </option>
                <option value="Apto">
                  Apto para Pessoas com deficiência (PCD)
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white w-full rounded-lg p-5 flex flex-col gap-4 shadow-lg">
          <div>
            <h2 className="font-bold text-xl">Contrato</h2>
            <p>
              Preencha todas as informação necessarias para o candidato entender
              mais sobre a vaga.
            </p>
          </div>
          <div className="grid grid-cols-2 w-full gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="salario" className="font-bold">
                Salário
              </label>
              <input
                type="number"
                id="salario"
                className="border-2 p-2 rounded-lg no-spinner"
                placeholder="Ex.: R$ 100.00"
                ref={salarioRef}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="setor" className="font-bold">
                Tipo de contrato
              </label>
              <select
                name=""
                id=""
                className="border-2 p-2 rounded-lg"
                ref={contratoRef}
              >
                <option value="default">Selecione...</option>
                <option value="CLT">CLT</option>
                <option value="PJ">PJ</option>
                <option value="Temporário">Temporário</option>
                <option value="Estágio">Estágio</option>
                <option value="Aprendiz">Aprendiz</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="setor" className="font-bold">
                Turno
              </label>
              <select
                name=""
                id=""
                className="border-2 p-2 rounded-lg"
                ref={turnoRef}
              >
                <option value="default">Selecione...</option>
                <option value="Manha">Manhã</option>
                <option value="Tarde">Tarde</option>
                <option value="Noite">Noite</option>
                <option value="Integral">Integral</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="setor" className="font-bold">
                Local de trabalho
              </label>
              <select
                name=""
                id=""
                className="border-2 p-2 rounded-lg"
                ref={localRef}
                onChange={() => setLocal(localRef.current?.value || "")}
              >
                <option value="">Selecione...</option>
                <option value="Presencial">Presencial</option>
                <option value="Remoto">Remoto</option>
                <option value="Hibrido">Hibrido</option>
              </select>
            </div>
          </div>
          {local === "Presencial" && (
            <div className="grid grid-cols-4 gap-5 ">
              <div className="flex flex-col gap-2">
                <label htmlFor="setor" className="font-bold">
                  País
                </label>
                <select name="" id="" className="border-2 p-2 rounded-lg">
                  <option value="">Selecione</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cep" className="font-bold">
                  CEP
                </label>
                <input
                  type="text"
                  id="cep"
                  className="border-2 p-2 rounded-lg"
                  placeholder="Digite qual o CEP"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="estado" className="font-bold">
                  Estado
                </label>
                <input
                  type="text"
                  id="estado"
                  className="border-2 p-2 rounded-lg"
                  placeholder="Digite qual o estado"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cidade" className="font-bold">
                  Cidade
                </label>
                <input
                  type="text"
                  id="cidade"
                  className="border-2 p-2 rounded-lg"
                  placeholder="Digite qual o cidade"
                />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
