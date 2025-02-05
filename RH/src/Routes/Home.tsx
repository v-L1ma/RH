import { FunctionComponent, useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Timer from "../components/Timer";

interface TimeType {
  hours: number;
  minutes: number;
  seconds: number;
}

const Home: FunctionComponent = () => {
  const [sucess, setSucess] = useState<boolean>(false);
  const [time, setTime] = useState<TimeType>();

  function getCurrentTime() {
    const date = new Date();
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    const seconds: number = date.getSeconds();

    return { hours, minutes, seconds };
  }

  useEffect(() => {

    const interval = setInterval(()=>{
        const currentTime = getCurrentTime();
        setTime(currentTime);
    }, 1000);

    return ()=> clearInterval(interval);
  });

  return (
    <div className="flex relative">
      <SideBar />
      <main className="ml-10 flex flex-col items-center w-full gap-5">
        <h1>Ponto eletrônico</h1>

        <div className="flex items-center gap-5">
          <Timer label="Horas" time={time?.hours} />
          <p className="text-3xl font-extrabold">:</p>
          <Timer label="Minutos" time={time?.minutes} />
          <p className="text-3xl font-extrabold">:</p>
          <Timer label="Segundos" time={time?.seconds} />
        </div>

        <button
          onClick={() => getCurrentTime()}
          className="bg-blue-600 p-2 rounded-md w-7/12"
        >
          Bater o ponto
        </button>

        <h2>Ponto registrado com sucesso</h2>
      </main>
    </div>
  );
};

export default Home;
