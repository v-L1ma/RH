import { Outlet } from "react-router-dom";
import CardVaga from "../components/CardVaga";
import NavBar from "../components/NavBar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const PortalVagas = () => {
  return (
    <>
      <NavBar />
      <main className="bg-slate-50 ">
        <section className="h-3/6 ">
          <div className="bg-teal-600 h-3/6 px-96 py-40 flex items-center justify-end">
            <h1 className="text-left text-white text-4xl">
              A vaga que você procura,
              <br />
              pode estar aqui!
            </h1>
          </div>

          <form className="bg-white w-11/12 md:w-3/5 rounded-2xl p-5 shadow-lg flex gap-2 mr-auto ml-auto -mt-14  items-end">
            <div className="w-8/12 flex flex-col gap-3">
              <label htmlFor="" className="font-bold">
                Qual vaga você procura?
              </label>
              <div className="flex border w-full p-1 rounded-lg h-12 items-center">
                <label htmlFor="vaga"><FaMagnifyingGlass className="text-gray-500 text-2xl m-5"/></label>
              <input
                type="text"
                id="vaga"
                placeholder="Nome da vaga ou cargo"
                className="w-full h-full"
              />
              </div>
              
            </div>
            <div className="w-4/12 flex flex-col gap-3">
              <label htmlFor="" className="font-bold">
                Onde você procura?
              </label>
              <div className="flex border w-full p-1 rounded-lg h-12 items-center">
                <label htmlFor="local"><IoLocationOutline className="text-gray-500 text-2xl m-5"/></label>
                <input
                type=""
                id="local"
                placeholder="Selecione um ou mais locais"
                className="w-full h-full"
              />
              </div>
              
            </div>
            <button className="bg-teal-600  rounded-md w-3/12 h-12 text-white font-extrabold shadow-md">
              Buscar vagas
            </button>
          </form>
        </section>

        <section className="h-screen  pt-5 w-11/12 md:w-3/5  mr-auto ml-auto flex flex-col gap-5">
          <div className="pb-6  border-b">
            <h1 className="font-bold text-2xl text-slate-800">Vagas</h1>
            <h2>{231316} vaga(s) encontrada(s)</h2>
          </div>

          <div className="rounded-lg grid grid-cols-2 gap-5">
            <CardVaga Cargo="Operador de estacionamento" Descriçao="daskjdakjasdk" DataCriacao="24/02/2025" id={1} Localizacao="Santos" Vagas={3} setor="Estacionamento" to={`vaga/${1}`} Candidato={true}/>
          </div>

          <Outlet/>
        </section>
      </main>
    </>
  );
};

export default PortalVagas;
