import { FunctionComponent, useEffect, useState } from "react";
import Timer from "../components/Timer";
import Input from "../components/Input";

interface TimeType {
  hours: number;
  minutes: number;
  seconds: number;
  today: string;
}

const Ponto: FunctionComponent = () => {
  const [sucess, setSucess] = useState<boolean>(false);
  const [time, setTime] = useState<TimeType>();

  function getCurrentTime() {
    const date = new Date();
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    const seconds: number = date.getSeconds();
    const today: string = `${date.getDay}/${date.getMonth}/${date.getFullYear}`

    return { hours, minutes, seconds, today };
  }

  function baterPonto() {
    console.log(time?.hours, time?.minutes, time?.seconds);
    console.log(time?.today)
    setSucess(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = getCurrentTime();
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="flex relative">
      <main className=" flex flex-col items-center w-full gap-5 md:ml-10">
        <h1 className="text-2xl mt-5 font-bold">Ponto eletrônico</h1>

        <div className="w-11/12 flex items-center justify-center gap-5 bg-gradient-to-tl from-neutral-800 to-teal-600 p-4 pt-0 rounded-lg shadow-md text-white">
          <Timer label="Horas" time={time?.hours} />
          <p className="text-3xl font-extrabold mb-7">:</p>
          <Timer label="Minutos" time={time?.minutes} />
          <p className="text-3xl font-extrabold mb-7">:</p>
          <Timer label="Segundos" time={time?.seconds} />
        </div>

        <form className="w-11/12 flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md text-zinc-800">
          <Input
            id="email"
            label="Email"
            placeholder="Digite seu email"
            type="number"
          />

          <button
            onClick={() => baterPonto()}
            className="bg-zinc-800 p-2 rounded-md w-full text-white font-extrabold shadow-md"
          >
            Bater o ponto
          </button>
        </form>

        {sucess && (
          <h2 className="text-green-300">Ponto registrado com sucesso</h2>
        )}
      </main>
    </div>
  );
};

export default Ponto;
