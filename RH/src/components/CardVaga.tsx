import { FunctionComponent } from "react"
import { IoIosArrowDroprightCircle } from "react-icons/io";

const CardVaga:FunctionComponent = () =>{
    return(
        <div className="bg-white p-5 rounded-md flex shadow-md">
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl text-blue-600 font-extrabold">Titulo da vaga</h1>
                <h2>Data de abertura</h2>
                <h2>Criado por: Vinicius</h2>
            </div>
            <div className="flex items-end pl-3">
            <p className="text-4xl">
                <IoIosArrowDroprightCircle />
            </p>
            </div>
        </div>
    )
}

export default CardVaga