import { FunctionComponent, useRef, useState } from "react";
import CardVaga from "../components/CardVaga";
import { FaPlus } from "react-icons/fa";
import Input from "../components/Input";
import { IoIosCloseCircle } from "react-icons/io";
import NavBar from "../components/NavBar";

interface VagasType {
  id: number;
  Cargo: string | undefined;
  Descriçao: string | undefined;
  Criador: string | undefined;
}

const Recrutamento: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [vagas, setVagas] = useState<VagasType[]>([
    {
      id: Math.floor(Math.random() * 10000),
      Cargo: "Gerente de vendas",
      Descriçao: "Uma pessoa que seja proativa",
      Criador: "Vinicius",
    },
  ]);

  const inputCargoRef = useRef<HTMLInputElement>(null);
  const inputDescricaoRef = useRef<HTMLInputElement>(null);
  const inputSalarioRef = useRef<HTMLInputElement>(null);
  const inputOcultarRef = useRef<HTMLInputElement>(null);

  /*function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        if (e && e.target instanceof HTMLInputElement) {
            console.log(e.target.value);
        }
    }*/

  const handleSave = () => {
    const newVaga: VagasType = {
      id: Math.floor(Math.random() * 10000),
      Cargo: inputCargoRef.current?.value,
      Descriçao: inputDescricaoRef.current?.value,
      Criador: "Vinicius",
    };

    setVagas((previousVagas) => [...previousVagas, newVaga]);
    setIsOpen(false);
  };

  return (
    <>
    <NavBar/>
    <div>
      <main className="h-screen flex flex-col items-center pt-5">
        <h1 className="text-4xl md:text-2xl text-zinc-800 mb-5 font-black">
          CENTRAL DE VAGAS
        </h1>

        <div
          className="bg-white mb-5 py-2 px-5 rounded-3xl cursor-pointer shadow-md"
          onClick={() => setIsOpen(true)}
        >
          <p className="flex items-center gap-1 font-bold">
            <span>
              <FaPlus />
            </span>{" "}
            Criar vaga
          </p>
        </div>

        {isOpen && (
          <div className="bg-white z-10 absolute
           w-11/12 md:w-6/12 p-5 shadow-lg rounded-xl">
            <div className="flex justify-end">
              <p
                className="text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <IoIosCloseCircle />
              </p>
            </div>
            <h1 className="text-2xl font-bold text-center">Criar nova vaga</h1>

            <form className="flex flex-col gap-4">
              <Input
                type="text"
                id="cargo"
                label="Cargo"
                placeholder="Insira o cargo da vaga"
                ref={inputCargoRef}
              />
              <Input
                type="number"
                id="salario"
                label="Salário"
                placeholder="Insira o salário da vaga"
                ref={inputSalarioRef}
              />
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="ocultarSalario"
                  id="ocultarSalario"
                  ref={inputOcultarRef}
                />
                <label htmlFor="ocultarSalario">Ocultar para candidato?</label>
              </div>
              <Input
                type="text"
                id="descricao"
                label="Descrição"
                placeholder="Insira a descrição da vaga"
                ref={inputDescricaoRef}
              />

              <button
                type="button"
                className="w-full text-center bg-green-700 rounded-xl p-1"
                onClick={handleSave}
              >
                Salvar
              </button>
            </form>
          </div>
        )}

        <div className="w-full md:w-10/12 flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-5 items-center justify-center">
          {vagas.map((vaga) => (
            <CardVaga
              id={vaga.id}
              Cargo={vaga.Cargo}
              Criador="Vinicius"
              Descriçao={vaga.Descriçao}
            />
          ))}
        </div>
      </main>
    </div>
    </>
  );
};

export default Recrutamento;
