import { FunctionComponent } from "react";
import Foto from "../assets/44053.jpg";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdMoreTime } from "react-icons/md";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import { FiDatabase, FiBriefcase } from "react-icons/fi";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import Footer from "../components/Footer";

const Home: FunctionComponent = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="h-full bg-white">
        <section className="h-[21em]">
          <Banner />
        </section>

        <section className="w-full flex justify-center -mt-5 mb-10 bg-gray-50 items-start">

          <div className="w-11/12 grid grid-cols-1 gap-5 lg:w-8/12 lg:gap-0 lg:grid-cols-4 py-10 text-teal-900">

            <div className="shadow-md p-6 lg:w-72 flex justify-start items-center flex-col gap-4 rounded-xl bg-white/70">
              <span className="text-4xl text-white bg-teal-900 p-2 rounded-xl ">
                <MdOutlineAnalytics />
              </span>
              <h1 className="font-extrabold text-center text-xl">
                Métricas de desempenho
              </h1>
              <p className="text-justify">Nosso sistema permite monitorar e avaliar o desempenho de colaboradores por meio de indicadores personalizados e análises precisas. Tome decisões informadas, impulsione a produtividade e construa equipes mais engajadas com dados que realmente fazem a diferença.</p>
            </div>

            <div className="shadow-md p-6 lg:w-72  flex justify-start items-center flex-col gap-4 rounded-xl bg-white/70">
              <span className="text-4xl text-white bg-teal-900 p-2 rounded-xl ">
                <FiBriefcase />
              </span>
              <h1 className="font-extrabold text-xl text-center">
                Painel para gestão de vagas
              </h1>
              <p className="text-justify">Organize e acompanhe todo o processo de recrutamento em um só lugar. Nosso painel intuitivo permite gerenciar vagas com eficiência, visualizar candidaturas em tempo real e garantir um fluxo de trabalho ágil e estratégico para a sua equipe.</p>
            </div>

            <div className="shadow-md p-6 lg:w-72  flex justify-start items-center flex-col gap-4 rounded-xl bg-white/70">
              <span className="text-4xl text-white bg-teal-900 p-2 rounded-xl">
                <FiDatabase />
              </span>
              <h1 className="font-extrabold text-center text-xl">
                Banco de talentos automatizado
              </h1>
              <p className="text-justify">
              Centralize e otimize o gerenciamento de candidatos com nosso banco de talentos automatizado. Armazene perfis, rastreie históricos e identifique os melhores talentos para suas vagas com facilidade e precisão.
              </p>
            </div>

            <div className="shadow-md p-6 lg:w-72  flex justify-start items-center flex-col gap-4 rounded-xl bg-white/70">
              <span className="text-4xl text-white bg-teal-900 p-2 rounded-xl ">
                <FaRegBuilding />
              </span>
              <h1 className="font-extrabold text-center text-xl">
                Portal de vagas integrado
              </h1>
              <p className="text-justify">Divulgue oportunidades e conecte-se aos melhores profissionais com nosso portal de vagas integrado. Com uma interface amigável, você atrai, engaja e simplifica a experiência de candidatos e recrutadores.</p>
            </div>
          </div>
        </section>

        <section className="flex items-center w-11/12 md:w-4/5 m-auto xl:ml-auto xl:mr-auto ">
          <div className="flex flex-col md:flex-row items-center justify-center gap-14 mt-auto md:mt-0">
            <img className="w-96 h-96 rounded-xl" src={Foto} alt="" />
            <div className="flex flex-col gap-5 md:w-2/5">
              <h1 className="text-3xl font-bold text-center md:text-left">
                Escolha <span className="text-teal-500">o melhor</span> sistema{" "}
                <br />
                para gerenciar o seu RH.
              </h1>
              <p className="border-l-4 p-3 border-teal-600">
                Um bom sistema de RH otimiza processos, reduz erros e melhora a
                produtividade. Ele deve automatizar tarefas, garantir
                conformidade e melhorar a experiência do colaborador,
                contribuindo para um ambiente de trabalho mais eficiente e
                organizado.
              </p>
              <hr />
              <div className="flex gap-10">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">
                    <TfiHeadphoneAlt />
                  </span>
                  <h1 className="font-bold">Suporte Técnico</h1>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">
                    <MdMoreTime />
                  </span>
                  <h1 className="font-bold">Suporte Técnico</h1>
                </div>
              </div>
              <hr />
              <button className="p-3 bg-teal-600 rounded-2xl text-white font-extrabold">
                Contrate-nos
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Home;
