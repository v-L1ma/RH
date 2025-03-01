import { FunctionComponent } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

interface CardVagaProps {
  id: number;
  Cargo: string | undefined;
  Descriçao: string | undefined;
  DataCriacao: string | undefined;
  Localizacao: string | undefined;
  Vagas: number | 1;
  setor: string | undefined;
  to: string | "";
  Candidato: true | false;
}

const CardVaga: FunctionComponent<CardVagaProps> = (props) => {
  return (
    <div
      className="bg-white p-5 rounded-md flex flex-col shadow-mdlg:w-auto"
      key={props.id}
    >
      {!props.Candidato && (
        <div className="flex items-center justify-between group">
          <p className="bg-green-300 px-3 py-1 rounded-md">Em andamento</p>
          <BsThreeDotsVertical className="text-4xl  rounded-full p-2 hover:bg-gray-100  cursor-pointer group" />

          <div className="invisible bg-white shadow-md rounded-lg absolute left-2/4 top-2/4 group-hover:visible flex flex-col p-5">
            <button className="flex gap-2 items-center rounded-lg hover:bg-slate-200 hover:font-semibold p-2">
              <MdEdit /> Editar
            </button>
            <button className="flex gap-2 items-center rounded-lg hover:bg-slate-200 hover:font-semibold p-2">
              <MdDeleteForever className="text-red-500" /> Excluir
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-3">
        <Link to={props.to}>
          <h1 className="text-xl text-zinc-800 font-semibold">{props.Cargo}</h1>
        </Link>
        <h2>Criada em: {props.DataCriacao}</h2>

        <div className="flex gap-5 flex-wrap">
          <p className="flex gap-5">
            <FaLocationDot />
            {props.Localizacao}
          </p>
          <p className="flex gap-5">
            <FaUsers />
            {props.Vagas} vaga(as)
          </p>
          <p className="flex gap-5">
            <IoMdBriefcase />
            {props.setor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVaga;
