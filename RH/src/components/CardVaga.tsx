import { FunctionComponent } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

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
        <div className="bg-white p-5 rounded-md flex flex-col shadow-md w-11/12 md:w-6/12 " key={id}>
            <div className="flex items-center justify-between group">
                <p className="bg-green-300 px-3 py-1 rounded-md">Em andamento</p>
                <BsThreeDotsVertical className="text-4xl  rounded-full p-2 hover:bg-gray-100  cursor-pointer group"/>
                

            <div className="invisible bg-white shadow-md rounded-lg absolute left-2/4 top-2/4 group-hover:visible flex flex-col p-5">
                <button className="flex gap-2 items-center rounded-lg hover:bg-slate-200 hover:font-semibold p-2">
                   <MdEdit/> Editar
                </button>
                <button className="flex gap-2 items-center rounded-lg hover:bg-slate-200 hover:font-semibold p-2">
                    <MdDeleteForever className="text-red-500"/> Excluir
                </button>

            </div>
            </div>
            <div className="flex flex-col gap-3">
                
                <Link to={`vaga/${1}`}>
                    <h1 className="text-xl text-zinc-800 font-semibold">{Cargo}</h1>
                </Link>
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