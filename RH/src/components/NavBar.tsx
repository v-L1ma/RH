import { FunctionComponent, useState } from "react";
import SlidingPanel from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const NavBar: FunctionComponent = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
    <nav className="bg-zinc-900 h-14 flex items-center pl-2 md:hidden">
      <h1>RHonline</h1>
      <button className=" text-white p-2 text-3xl" onClick={() => setOpenMenu(true)}>
        <TiThMenu />
      </button>

      <SlidingPanel isOpen={openMenu} type={"left"} size={50}>
        <div className="overflow-hidden bg-blue-600 p-5 h-full">
          <div className="flex justify-between items-start">
          <h1 className="text-3xl text-white font-black mb-10 text-center">RHonline</h1>
            <button onClick={() => setOpenMenu(false)} className="text-4xl text-white">
              <IoIosCloseCircle />
            </button>
          </div>          
          <ul className="text-white flex flex-col items-start gap-3">
            <Link to="/home">
            <li className="text-2xl flex overflow-hidden cursor-pointer items-center gap-4">
                <FaHome /> <span>Início</span>
              </li>
            </Link>
            <Link to="/ponto">
              <li className="text-2xl flex overflow-hidden cursor-pointer items-center gap-4">
                <FaStopwatch /> <span>Controle de ponto</span>
              </li>
            </Link>
            <Link to="/recrutamento">
              <li className="text-2xl flex overflow-hidden pl-1 cursor-pointer items-center gap-4">
                <FaUserCheck /> Recrutamento
              </li>
            </Link>
          </ul>
        </div>
      </SlidingPanel>
    </nav>

    <nav className="hidden md:flex justify-between pr-5">
      <div className="bg-gradient-to-r from-green-900 to-green-600 p-5">RHOnline</div>
      <ul className="flex items-center">
        <li>Vagas</li>
      </ul>
      <div className="flex items-center">
        <button className="bg-gradient-to-r from-green-900 to-green-600 p-3 rounded-3xl text-white flex items-center font-bold gap-2">Área do RH<span className="text-xl">
          <FaArrowRight />
        </span></button>
      </div>

    </nav>
    </>
  );
};

export default NavBar;
