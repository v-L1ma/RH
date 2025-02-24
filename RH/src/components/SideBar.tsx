import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from "../assets/LogoRH.png";

export const SideBar: FunctionComponent = () => {
  const [dropDownListOpen, setDropDownListOpen] = useState<boolean>(false);

  return (
    <aside className="flex flex-col w-1/6 items-center p-3 rounded-r-xl bg-white">
      <div className="flex items-center">
        <img src={Logo} alt="" className="h-20" />
        <h1>Facilita RH</h1>
      </div>
      <ul>
        <li
          className="mt-10 flex items-center text-xl"
          onClick={() => setDropDownListOpen(!dropDownListOpen)}
        >
          <MdOutlineKeyboardArrowDown /> Recrutamento e seleção
        </li>
        {dropDownListOpen && (
          <ul className="mt-5 ml-7 flex flex-col gap-5 ">
            <Link to="gestao-vagas">
                <li>Gestão de vagas</li>
            </Link>
            <li>Gestão de Candidatos</li>
            <li>Triagem e Avaliação</li>
            <li>Fluxo de Seleção</li>
            <li>Relatórios e Dashboards</li>
          </ul>
        )}
      </ul>
    </aside>
  );
};
