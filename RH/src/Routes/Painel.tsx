import { FunctionComponent } from "react"
import { BsBriefcaseFill } from "react-icons/bs";

export const Painel:FunctionComponent = () =>{
    return(
        <body className="flex h-screen bg-slate-100">
        <aside className="flex flex-col w-1/6 items-center p-3 rounded-r-xl bg-white">
            <ul >
                <ul>                    
                <li>Recrutamento e seleção</li>
                </ul>
                <ul>
                <li>Departamento pessoal</li>
                </ul>
            </ul>
        </aside>
        <main className="w-full p-32 flex flex-wrap gap-5">
            <div className="flex flex-col bg-white w-80 h-40 rounded-lg p-5 items-center justify-center">
            <p className="text-5xl"><BsBriefcaseFill/> </p>
               <h1 className="text-2xl">Gestão de Vagas</h1>
            </div>

            
            <div className="flex flex-col bg-white w-80 h-40 rounded-lg p-5 items-center justify-center">
            <p className="text-5xl"><BsBriefcaseFill/> </p>
               <h1 className="text-2xl">Triagem e Avaliação</h1>
            </div>

            <div className="flex flex-col bg-white w-80 h-40 rounded-lg p-5 items-center justify-center">
            <p className="text-5xl"><BsBriefcaseFill/> </p>
               <h1 className="text-2xl">Fluxo de Seleção</h1>
            </div>

            <div className="flex flex-col bg-white w-80 h-40 rounded-lg p-5 items-center justify-center">
            <p className="text-5xl"><BsBriefcaseFill/> </p>
               <h1 className="text-2xl">Relatórios e Dashboards
               </h1>
            </div>


        </main>
        </body>

    )
}

