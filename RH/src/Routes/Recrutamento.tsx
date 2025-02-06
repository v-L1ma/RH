import { FunctionComponent } from "react"
import CardVaga from "../components/CardVaga"

const Recrutamento:FunctionComponent=()=>{
    return(
        <div>
            <main className="h-screen flex flex-col items-start p-10">
                <h1 className="text-4xl text-blue-600 mb-5 font-black">Banco de talentos</h1>

                <div className="bg-white w-full mb-5 p-5">
                    
                </div>

                <CardVaga/>

            </main>
        </div>
    )
}

export default Recrutamento