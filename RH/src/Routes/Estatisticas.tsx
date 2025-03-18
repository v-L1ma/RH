import { Component } from "../components/CircleChatr";
import { BarChartComponent } from "../components/BarChart";

const Estatisticas = () =>{
    return(

        <div className="w-full flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold">Estatisticas</h1>
        

        
      </div>

      <div className="flex flex-col gap-10 h-full rounded-xl">
          <div className="w-full gap-5 grid md:grid-cols-3 ">
            <div className="bg-white rounded-xl border p-5 flex flex-col justify-center gap-2">
              
            <div className="flex justify-center">
                <p className="font-bold text-5xl">34</p>
              </div>
              <div className=" flex items-start justify-center gap-2">
                <h1 className="text-xl font-bold">Vagas abertas</h1>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-5 flex flex-col justify-center gap-2">
              
            <div className="flex justify-center">
                <p className="font-bold text-5xl">16</p>
              </div>
              <div className=" flex items-start justify-center gap-2">
                <h1 className="text-xl font-bold">Tempo médio para fechamento</h1>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-5 flex flex-col justify-center gap-2">
              
            <div className="flex justify-center">
                <p className="font-bold text-5xl">2</p>
              </div>
              <div className=" flex items-start justify-center gap-2">
                <h1 className="text-xl font-bold">Vagas em atraso</h1>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:grid md:grid-cols-3 gap-10 ">
     
              <div className="col-span-2"><Component/></div>
              <div><BarChartComponent/></div>
          
          </div>
      </div>

    </div>

    );
}

export default Estatisticas;