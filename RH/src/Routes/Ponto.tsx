import { FunctionComponent, useEffect, useState } from "react";
import Timer from "../components/Timer";

interface TimeType {
  hours: number;
  minutes: number;
  seconds: number;
}

const Ponto:FunctionComponent = () => {
  const [sucess, setSucess] = useState<boolean>(false);
  const [time, setTime] = useState<TimeType>();

  function getCurrentTime() {
    const date = new Date();
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    const seconds: number = date.getSeconds();

    return { hours, minutes, seconds };
  }

  function baterPonto(){
    console.log(time?.hours,time?.minutes,time?.seconds)
    setSucess(true)
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
      <main className="ml-10 flex flex-col items-center w-full gap-5">
        <h1>Ponto eletrônico</h1>

        <div className="flex items-center gap-5 bg-gradient-to-tl from-cyan-300 to-sky-600 p-4 rounded-lg shadow-md text-white">
          <Timer label="Horas" time={time?.hours} />
          <p className="text-3xl font-extrabold mb-7">:</p>
          <Timer label="Minutos" time={time?.minutes} />
          <p className="text-3xl font-extrabold mb-7">:</p>
          <Timer label="Segundos" time={time?.seconds} />
        </div>

        <button
          onClick={() => baterPonto()}
          className="bg-blue-600 p-2 rounded-md w-7/12"
        >
          Bater o ponto
        </button>

        {
          sucess && <h2 className="text-green-300">Ponto registrado com sucesso</h2>
        }

        
      </main>
    </div>
  );
};

export default Ponto
