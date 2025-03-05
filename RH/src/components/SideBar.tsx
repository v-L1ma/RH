import { FunctionComponent} from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LogoRH.png";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { RiUserStarLine } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";

export const SideBar: FunctionComponent = () => {
  return (
    <aside className="flex flex-col items-center p-10 rounded-r-xl bg-white">
      <div className="flex items-center">
        <img src={Logo} alt="" className="h-20" />
        <h1 className="text-lg text-gray-500 font-bold">Facilita RH</h1>
      </div>

      <ul className="flex flex-col gap-10 mt-20">
        <Link to="gestao-vagas">
          <li className="flex items-end gap-5 text-lg text-gray-500 font-bold">
            <LuBriefcaseBusiness className="text-2xl" />
            Gestão de vagas
          </li>
        </Link>
        <Link to="banco-de-talentos">
          <li className="flex items-end gap-5 text-lg text-gray-500 font-bold">
            <RiUserStarLine className="text-2xl" />
            Banco de talentos
          </li>
        </Link>
        <li className="flex items-center gap-5 text-lg text-gray-500 font-bold">
          <FaChartBar className="text-2xl" />
          Relatórios e Dashboards
        </li>
      </ul>
    </aside>
  );
};
