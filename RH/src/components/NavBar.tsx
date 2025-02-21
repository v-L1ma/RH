import { FunctionComponent, useState } from "react";
import SlidingPanel from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../assets/LogoRH.png"

const NavBar: FunctionComponent = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
    <nav className="bg-white h-16 flex items-center md:hidden">
      <div className="w-full flex justify-between items-center px-2">
        <Link to="/"><img src={Logo} alt="" className="h-16 mt-1"/></Link>

        <div className="flex items-center gap-3">
          <Link to="/portal-vagas" className="border-teal-500 border-2 px-3 rounded-full">
            Portal de vagas
          </Link>
          <button className=" text-teal-500 p-2 text-3xl" onClick={() => setOpenMenu(true)}>
          <IoMdMenu />
          </button>
        </div>
      </div>

      <SlidingPanel isOpen={openMenu} type={"top"} size={45}>
        <div className="overflow-hidden bg-teal-600 p-5 h-full">
          <div className="flex justify-end">
            <button onClick={() => setOpenMenu(false)} className="text-4xl text-white">
              <IoIosCloseCircle />
            </button>
          </div>
          <ul className="text-white flex flex-col items-start gap-3">
            <Link to="/">
            <li className="text-xl flex overflow-hidden cursor-pointer items-center gap-4">
                <FaHome /> <span>Início</span>
              </li>
            </Link>
            <Link to="/ponto">
              <li className="text-xl flex overflow-hidden cursor-pointer items-center gap-4">
                <FaStopwatch /> <span>Controle de ponto</span>
              </li>
            </Link>
            <Link to="/recrutamento">
              <li className="text-xl flex overflow-hidden pl-1 cursor-pointer items-center gap-4">
                <FaUserCheck /><span>Recrutamento</span>
              </li>
            </Link>
          </ul>
          <hr className="mt-10"/>
          <div className="p-5">
            <Link to="/login">
              <p className="text-center bg-white p-2 w-3/5 rounded-full m-auto text-teal-600 font-extrabold cursor-pointer">
              Área do cliente</p>
            </Link>
          </div>
        </div>
      </SlidingPanel>
    </nav>

    <nav className="hidden md:flex w-9/12 m-auto">
      <div className="w-full flex justify-around items-center gap-4 p-0">
        <div>
        <Link to="/"><img src={Logo} alt="" className="h-16 p-0"/></Link>
        </div>
        
        <ul className="text-white flex items-center gap-5">
            <Link to="/">
            <li className="text-teal-600 text-xl flex overflow-hidden cursor-pointer items-center gap-4">
                <span>Início</span>
              </li>
            </Link>
            <Link to="/ponto">
              <li className="text-teal-600 text-xl flex overflow-hidden cursor-pointer items-center gap-4">
                <span>Controle de ponto</span>
              </li>
            </Link>
            <Link to="/recrutamento">
              <li className="text-teal-600 text-xl flex overflow-hidden pl-1 cursor-pointer items-center gap-4">
                <span>Recrutamento</span>
              </li>
            </Link>
          </ul>
          <div className="p-5 flex items-center gap-3">
            <Link to="">
              <p className="text-center p-2  rounded-full m-auto text-teal-600 font-extrabold cursor-pointer">
              Portal de vagas</p>
            </Link>

          <Link to="/login">
            <button className="bg-teal-600  p-3 rounded-3xl text-white flex items-center font-bold gap-2">Área do RH<span className="text-xl">
              <FaArrowRight />
            </span></button>
          </Link>
        </div>
      </div>

    </nav>
    </>
  );
};

export default NavBar;
