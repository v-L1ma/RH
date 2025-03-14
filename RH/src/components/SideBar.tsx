import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { FiDatabase, FiBriefcase, FiLogOut } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";

export const SideBar: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  return (
    <aside className="flex flex-col items-center p-4 rounded-r-xl bg-teal-500 justify-between shadow-lg">
      <ul className={`flex flex-col gap-3 text-white ${isOpen ? "w-56":"w-12"} transition-all`}>

        <li className="flex text-2xl hover:bg-white/20 p-3 rounded-lg hover:backdrop-blur-xl items-center gap-3" onClick={()=>setIsOpen(!isOpen)}>
          <FaChevronRight />
        </li>

        <Link to="gestao-vagas">
        <li className="flex text-2xl hover:bg-white/20 p-3 rounded-lg hover:backdrop-blur-xl items-center gap-3 font-bold text-nowrap">
          <FiBriefcase />
          {
            isOpen && <p className="text-lg">Gestão de vagas</p>
          }
        </li>
        </Link>

        <Link to="banco-de-talentos">
        <li className="flex text-2xl hover:bg-white/20 p-3 rounded-lg hover:backdrop-blur-xl items-center gap-3 font-bold text-nowrap">
          <FiDatabase />
          {
            isOpen && <p className="text-lg">Banco de talentos</p>
          }
        </li>
        </Link>

        <Link to="">
        <li className="flex text-2xl hover:bg-white/20 p-3 rounded-lg hover:backdrop-blur-xl items-center gap-3 font-bold text-nowrap">
          <LuLayoutDashboard />
          {
            isOpen && <p className="text-lg">Relatórios</p>
          }
        </li>
        </Link>
      </ul>

      <ul className="flex flex-col gap-3 text-white w-full">

        <li className="flex text-2xl hover:bg-white/20 p-3 rounded-lg hover:backdrop-blur-xl items-center gap-3 font-bold">
          <FiLogOut />
          {
            isOpen && <p className="text-lg">Sair da conta</p>
          }
        </li>
      </ul>
    </aside>
  );

  /*return (
    <aside className="flex flex-col items-center p-10 rounded-r-xl bg-white">
      <div className="flex items-center">
        <img src={Logo} alt="" className="h-20" />
        <h1 className="text-lg text-gray-500 font-bold">Facilita RH</h1>
      </div>

      <ul className="flex flex-col gap-10 mt-20">
        
          <li className="flex items-end gap-5 text-lg text-gray-500 font-bold">
            <LuBriefcaseBusiness className="text-2xl" />
            Gestão de vagas
          </li>
        </Link>
        
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
  );*/
};
