import { Outlet } from "react-router-dom";
import CardVaga from "../components/CardVaga";
import NavBar from "../components/NavBar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import api from "../service/api";
import { vagaType } from "../types/vagaType";

const PortalVagas = () => {
  const [vagas, setVagas] = useState<vagaType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [searchCity, setSearchCity] = useState<string>("");

  async function loadVagas() {
    const data = await api.get("/vacancies");

    setVagas(data.data.vacancies);
    console.log(vagas);
  }

  useEffect(() => {
    loadVagas();
  }, []);

  return (
    <>
      <NavBar />
      <main className="bg-slate-50">
        <section className="h-3/6 ">
          <div className="bg-teal-600 h-3/6 py-24 px-10 md:px-40 lg:px-96 md:py-40 flex items-center justify-end">
            <h1 className="text-left text-white text-4xl">
              A vaga que você procura,
              <br />
              pode estar aqui!
            </h1>
          </div>

          <form className="flex bg-white flex-col md:flex-row w-11/12 md:w-8/12 rounded-2xl p-5 shadow-lg  gap-5 mr-auto ml-auto -mt-14  items-end">
            <div className="w-full flex flex-col md:flex-row gap-5">
              <div className="md:w-8/12 flex flex-col gap-3">
                <label htmlFor="" className="font-bold">
                  Qual vaga você procura?
                </label>
                <div className="flex border w-full p-1 rounded-xl h-12 items-center">
                  <label htmlFor="search">
                    <FaMagnifyingGlass className="text-gray-500 text-2xl m-5" />
                  </label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Nome da vaga ou cargo"
                    className="w-full h-full hover focus:outline-none"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full md:w-4/12 flex flex-col gap-3">
                <label htmlFor="" className="font-bold">
                  Onde você procura?
                </label>
                <div className="flex border w-full p-1 rounded-xl h-12 items-center">
                  <label htmlFor="local">
                    <IoLocationOutline className="text-gray-500 text-2xl m-2" />
                  </label>
                  <input
                    type=""
                    id="local"
                    placeholder="Selecione um ou mais locais"
                    className="w-full h-full focus:outline-none"
                    onChange={(e)=>setSearchCity(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
        </section>

        <section className="h-screen  pt-5 w-11/12 md:w-8/12  mr-auto ml-auto flex flex-col gap-5">
          <div className="pb-6  border-b">
            <h1 className="font-bold text-2xl text-slate-800">Vagas</h1>
            <h2>{vagas.length} vaga(s) encontrada(s)</h2>
          </div>

          <div className="rounded-xl grid grid-cols-2 gap-5">
            {vagas
              .filter((vaga) =>
                vaga.titulo?.toLocaleLowerCase().includes(search.toLowerCase())
              )
              .filter((vaga)=>vaga.local?.toLocaleLowerCase().includes(searchCity.toLowerCase()))
              .map((vaga) => (
                <CardVaga
                  Cargo={vaga.titulo}
                  Descricao={vaga.descricao}
                  DataCriacao="24/02/2025"
                  id={vaga.id}
                  Localizacao={vaga.local}
                  Vagas={vaga.qtdeVagas}
                  setor={vaga.setor}
                  to={`vaga/${vaga.id}`}
                  Candidato={true}
                />
              ))}
          </div>

          <Outlet />
        </section>
      </main>
    </>
  );
};

export default PortalVagas;
