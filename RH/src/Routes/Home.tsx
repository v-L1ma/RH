import { FunctionComponent } from "react";
import Foto from "../assets/44053.jpg";
import { ImAlarm } from "react-icons/im";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdMoreTime } from "react-icons/md";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";

const Home: FunctionComponent = () => {
  return (
    <>
    <header>
      <NavBar/>
    </header>
    <main className="h-full">
      <section className="h-3/5">
        <Banner/>
      </section>
      <section>
        <div className="flex w-4/5 justify-center gap-5 md:gap-10 ml-auto mr-auto mt-10 flex-wrap">

          <div className="h-48 w-36 md:h-48 md:w-48 p-4 bg-white flex justify-center items-center flex-col shadow-lg gap-4 rounded-md">
            <span className="text-6xl">
              <ImAlarm />
            </span>
            <h1 className="font-extrabold">Controle de ponto</h1>
          </div>

          <div className="h-48 w-36 md:h-48 md:w-48 p-4 bg-white flex justify-center items-center flex-col shadow-lg gap-4 rounded-md">
            <span className="text-6xl">
              <ImAlarm />
            </span>
            <h1 className="font-extrabold">Controle de ponto</h1>
          </div>

          <div className="h-48 w-36 md:h-48 md:w-48 p-4 bg-white flex justify-center items-center flex-col shadow-lg gap-4 rounded-md">
            <span className="text-6xl">
              <ImAlarm />
            </span>
            <h1 className="font-extrabold">Controle de ponto</h1>
          </div>
          
          <div className="h-48 w-36 md:h-48 md:w-48 p-4 bg-white flex justify-center items-center flex-col shadow-lg gap-4 rounded-md">
            <span className="text-6xl">
              <ImAlarm />
            </span>
            <h1 className="font-extrabold">Controle de ponto</h1>
          </div>

        </div>
      </section>

      <section className="flex h-screen w-4/5 ml-auto mr-auto mt-24">

        <div className="flex flex-col md:flex-row justify-center gap-14 mt-auto md:mt-0">
          <img className="w-96 h-96 rounded-lg" src={Foto} alt="" />
          <div className="flex flex-col gap-5 md:w-2/5">
            <h1 className="text-3xl font-bold text-center md:text-left">
              Escolha <span className="text-green-900">o melhor</span> sistema <br />
              para gerenciar o seu RH.
            </h1>
            <p className="border-l-4 p-3 border-lime-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              veniam expedita eaque. Aperiam voluptates vero iure eum amet
              recusandae excepturi ab voluptatum eveniet inventore alias,
              magnam, necessitatibus explicabo corporis. Quasi.
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
            <button className="p-2 bg-green-950 rounded-2xl text-white font-extrabold">Contrate-nos</button>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Home;
