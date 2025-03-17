import { Component } from "../components/CircleChatr";
import { BarChartComponent } from "../components/BarChart";

const Estatisticas = () =>{
    return(

        <div className="w-full flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold">Estatisticas</h1>
        

        
      </div>

      <div className="flex flex-col gap-10 h-full rounded-xl">
          <div className="w-full gap-5 grid grid-cols-3 ">
            <div className="bg-white rounded-lg border p-10">
              Vagas abertas
              34 vagas
            </div>
            <div className="bg-white rounded-lg border p-10">
              tempo medio de fechamento
              20 dias
            </div>
            <div className="bg-white rounded-lg border p-10">
              vagas em atraso
              2 vagas
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-10">
     
              <Component/>
              <BarChartComponent/>
          
          </div>
      </div>

    </div>

    );
}

export default Estatisticas;