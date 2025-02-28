
import NavBar from "../components/NavBar";

const PortalVagas = () => {
  return (
    <>
      <NavBar />
      <main className="bg-slate-50 h-screen">
        <section className="h-3/6 ">
          <div className="bg-green-800 h-3/6 px-44 py-40 flex items-center justify-end">
              
              <h1 className="text-left text-white text-4xl">A sua vaga,<br />pode estar aqui!</h1>
          </div>
          <form className="bg-white w-11/12 md:w-4/5 rounded-2xl p-5 shadow-lg flex gap-2 mr-auto ml-auto -mt-14  items-end">
            <div className="w-8/12 flex flex-col gap-3">
              <label htmlFor="" className="font-bold">
                Qual vaga você procura?
              </label>
              <input
                type="text"
                id="vaga"
                placeholder="Nome da vaga ou cargo"
                className="border w-full p-1 rounded-lg h-12"
              />
            </div>
            <div className="w-4/12 flex flex-col gap-3">
              <label htmlFor="" className="font-bold">
                Onde você procura?
              </label>
              <input
                type="select"
                id="local"
                placeholder="Selecione um ou mais locais"
                className="border w-full p-1 rounded-lg h-12"
              />
            </div>
            <button className="bg-green-700 rounded-md w-3/12 h-12 text-white font-extrabold shadow-md">
              Buscar vagas
            </button>
          </form>
        </section>

        <section className="h-screen mt-32 pt-5 w-11/12 md:w-4/5 mr-auto ml-auto flex flex-col gap-5">
          <div className="pb-6  border-b">
            <h1 className="font-bold text-2xl text-slate-800">Vagas</h1>
            <h2>{231316} vaga(s) encontrada(s)</h2>
          </div>

          <div className="h-3/5 rounded-lg">
          </div>
        </section>
      </main>
    </>
  );
};

export default PortalVagas;
