import { FunctionComponent } from "react"
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";

interface CardVagaProps{
    id: number;
    Cargo:string | undefined;
    Descriçao:string| undefined;
    DataCriacao:string| undefined;
    Localizacao: string | undefined;
    Vagas: number | 1;
    setor: string | undefined;
}

const CardVaga:FunctionComponent<CardVagaProps> = ({id,Cargo,DataCriacao, Localizacao, Vagas, setor}) =>{
    return(
        <div className="bg-white p-5 rounded-md flex flex-col shadow-md w-11/12 md:w-6/12" key={id}>
            <div className="flex justify-between items-center">
                <p className="bg-green-300 px-3 py-1 rounded-md">Em andamento</p>
                <BsThreeDotsVertical className="text-xl"/>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-xl text-zinc-800 font-semibold">{Cargo}</h1>
                <h2>Criada em: {DataCriacao}</h2>
                
                <div className="flex gap-5">
                <p className="flex gap-5"><FaLocationDot/>{Localizacao}</p>
                <p className="flex gap-5"><FaUsers/>{Vagas} vaga(as)</p>
                <p className="flex gap-5"><IoMdBriefcase/>{setor}</p>
                </div>
            </div>
        </div>
    )
}

export default CardVaga