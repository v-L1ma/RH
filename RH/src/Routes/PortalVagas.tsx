import Input from "../components/Input";
import NavBar from "../components/NavBar";

const PortalVagas = () => {
  return (
    <>
    <NavBar/>
    <main className="h-screen">
      <section className="h-3/6 relative">
        <div className="bg-green-800 h-2/6"></div>
          <form className="bg-white w-11/12 absolute left-4 top-16 rounded-2xl p-5 shadow-lg flex flex-col gap-7">
            <Input
              type="text"
              id="vaga"
              label="Qual vaga você procura?"
              placeholder="Nome da vaga ou cargo"
            />
            <Input
              type="select"
              id="local"
              label="Onde você procura?"
              placeholder="Selecione um ou mais locais"
            />
            <button
              className="bg-green-700 p-2 rounded-md w-full text-white font-extrabold shadow-md"
            >
              Buscar vagas
            </button>
          </form>
        </section>

        <section className="h-screen mt-2 pt-5 w-11/12 m-auto">
            <div className="pb-6">
                <h1 className="font-bold text-2xl text-slate-800">
                    Vagas
                </h1>
                <h2>23131 vaga(s) encontrada(s)</h2>
            </div>
            <hr />

            <div className="h-3/5 bg-black rounded-lg">

            </div>

        </section>



    </main>
    </>
  );
};

export default PortalVagas;
