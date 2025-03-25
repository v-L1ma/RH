import { Component } from "../components/CircleChatr";
import { BarChartComponent } from "../components/BarChart";
import api from "../service/api";
import { useEffect, useState } from "react";
import { vagaType } from "../types/vagaType";

const Estatisticas = () => {
  const [tempoMedio, setTempoMedio] = useState<number>(0);
  const [vagas, setVagas] = useState<vagaType[]>();
  const [candidates, setCandidates] = useState<number>();

  async function loadStats() {
    try {
      const response = await api.get("/statistics");

      const { tempoMedio, vacancies, candidates } = response.data;
      setTempoMedio(tempoMedio);
      setVagas(vacancies);
      setCandidates(candidates.length());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold">Olá, Recrutador(a)!</h1>
      <p className="mt-6">Gerencie suas vagas, visualize candidatos e acompanhe estatísticas.</p>
      </div>

      <div className="w-full grid grid-cols-4 gap-10">

        <div className="bg-white rounded-xl border p-5 flex flex-col justify-start gap-2">
          <div className=" flex flex-col items-start justify-start gap-2">
            <h1 className="text-xl font-bold">Vagas abertas</h1>            
            <p className="text-sm">Quantidade de vagas</p>
          </div>
          <div className="flex justify-start px-2">
            <p className="font-bold text-3xl">{vagas?.filter((vaga)=>vaga.status?.includes("Em andamento"))?.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border p-5 flex flex-col justify-start gap-2">
          <div className=" flex flex-col items-start justify-start gap-2">
            <h1 className="text-xl font-bold">Tempo médio </h1>            
            <p className="text-sm">Quantidade de dias </p>
          </div>
          <div className="flex justify-start px-2">
            <p className="font-bold text-3xl">{tempoMedio ? tempoMedio.toFixed(2) : 0}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border p-5 flex flex-col justify-start gap-2">
          <div className=" flex flex-col items-start justify-start gap-2">
            <h1 className="text-xl font-bold">Vagas fechadas</h1>            
            <p className="text-sm">Quantidade de vagas </p>
          </div>
          <div className="flex justify-start px-2">
            <p className="font-bold text-3xl">{vagas?.filter((vaga)=>vaga.status?.includes("Encerrada"))?.length}</p>
          </div>
        </div>


        <div className="bg-white rounded-xl border p-5 flex flex-col justify-start gap-2">
          <div className=" flex flex-col items-start justify-start gap-2">
            <h1 className="text-xl font-bold">Candidatos por Vaga</h1>            
            <p className="text-sm">Média cadidatos por vaga</p>
          </div>
          <div className="flex justify-start px-2">
            <p className="font-bold text-3xl">{(candidates! / (vagas?.length || 0)) || 0}</p>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-4 gap-10">
  {/* Gráfico de barras */}
  <div className="col-span-2 h-full">
    <div className="w-full h-full">
    <BarChartComponent />
      
    </div>
  </div>

  <div className="col-span-2 w-full h-full ">
    <div className="w-full h-full">
    <Component />
    </div>
  </div>
</div>
    </div>

    /*<div className="w-full flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold">Estatisticas</h1>
      </div>

      <div className="flex flex-col gap-10 h-full rounded-xl">
          

          <div className="w-full flex flex-col md:grid md:grid-cols-3 gap-10 ">
     
              <div className="col-span-2"><Component/></div>
              <div className="h-screen"><BarChartComponent/></div>
          
          </div>
      </div>

    </div>*/
  );
};

export default Estatisticas;
