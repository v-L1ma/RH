import { FunctionComponent} from "react"
import { BsBriefcaseFill } from "react-icons/bs";
import { SideBar } from "../components/SideBar";

export const Painel:FunctionComponent = () =>{

    return(
        <body className="flex h-screen bg-slate-100">
        <SideBar/>
        <main className="w-full p-20 flex flex-wrap gap-5">
            <div className="bg-white w-full h-full rounded-lg">

            </div>


        </main>
        </body>

    )
}

