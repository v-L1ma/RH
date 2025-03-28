import { FunctionComponent, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { FaShareSquare } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { FaLocationDot, FaUsers } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import PopUpCandidatura from "../components/PopUpCandidatura";
import api from "../service/api";
import { vagaType } from "../types/vagaType";
import useClipboard from "../hooks/useClipboard";
import Footer from "../components/Footer";

const Vaga: FunctionComponent = () => {
  const navigate = useNavigate();
  const [popUpOpen, setPopUpOpen] = useState<boolean>(false);
  const {id} = useParams();

  const {copyToClipboard, message }= useClipboard();

  function close(){
    setPopUpOpen(!popUpOpen)
  }

  const [vaga,setVaga]=useState<vagaType>();

  async function loadInfo () {
    const data = await api.get(`/vacancies/${id}`);
    setVaga(data.data.vacancy)
  }

  useEffect(()=>{

    loadInfo();

  },[]);

  return (
    <>
      <NavBar />

      <main className="h-fit bg-slate-50 relative">

      <section className="bg-white flex flex-col justify-center shadow-md">
            <div className="flex flex-col xl:flex-row xl:w-8/12 py-5 justify-between xl:m-auto gap-5">
              <div className="flex items-center">
                <button className="text-4xl p-2 mr-5" onClick={()=>navigate(-1)}><IoChevronBack/></button>
                <div>
                  <h1 className="text-xl font-semibold">{vaga?.titulo}</h1>
                  <h2 className="font-bold text-gray-400">EMPRESA</h2>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button title={message} onClick={()=>copyToClipboard(window.location.href)}>
                  <FaShareSquare className="text-xl text-teal-600"/>
                </button>
                <button className="bg-teal-600  rounded-xl text-white font-bold shadow-md text-xl py-2 px-12" onClick={()=>close()}>Candidatar-se</button>
              </div>
              
            </div>
      </section>

      <section className="bg-white flex flex-col w-11/12 xl:w-8/12 p-5 m-auto mt-10 rounded-xl shadow-lg gap-5">

      <h1 className="text-xl font-bold">Descrição</h1>

       <div className="flex gap-5 flex-wrap">
                <p className="flex gap-5 items-center">
                  <FaLocationDot /> {vaga?.local}
                </p>
                <p className="flex gap-5 items-center">
                  <FaUsers /> {vaga?.qtdeVagas} Vaga(as)
                </p>
                <p className="flex gap-5 items-center">
                  <IoMdBriefcase /> {vaga?.setor}
                </p>
              </div>

        <div className="flex gap-2 flex-wrap">
          {
           vaga?.senioridade && <p className="bg-teal-200 px-3 py-1 rounded-xl">{vaga.senioridade}</p> 
          }
          {
            vaga?.contrato && <p className="bg-teal-200 px-3 py-1 rounded-xl">{vaga.contrato}</p>
          }
          {
           vaga?.diversidade && <p className="bg-teal-200 px-3 py-1 rounded-xl">{vaga.diversidade}</p> 
          }
          {
           vaga?.pcd && <p className="bg-teal-200 px-3 py-1 rounded-xl">{vaga.pcd}</p> 
          }
          
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Pré-requisitos:</h2>
          <p>{vaga?.descricao}</p>
        </div>

      </section>

      {
        popUpOpen &&          
          <PopUpCandidatura onclick={close} idVaga={Number(id)}/>
      }

      <Footer/>

      </main>
    </>
  );
};

export default Vaga;
