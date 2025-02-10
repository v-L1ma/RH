import { FunctionComponent } from "react"
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface CardVagaProps{
    id: number;
    Cargo:string | undefined;
    Descriçao:string| undefined;
    Criador:string| undefined;
}

const CardVaga:FunctionComponent<CardVagaProps> = ({id,Cargo,Descriçao,Criador}) =>{
    return(
        <div className="bg-white p-5 rounded-md flex shadow-md w-11/12 md:w-4/12" key={id}>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl text-zinc-800 font-extrabold">{Cargo}</h1>
                <h2>Criado por: {Criador}</h2>
                <p>{Descriçao}</p>
            </div>
            <div className="flex items-end ml-auto pl-3">
            <p className="text-4xl cursor-pointer">
                <IoIosArrowDroprightCircle />
            </p>
            </div>
        </div>
    )
}

export default CardVaga