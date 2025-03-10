import { FunctionComponent, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { CiHeart } from "react-icons/ci";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { FaLocationDot, FaUsers } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import PopUpCandidatura from "../components/PopUpCandidatura";
import api from "../service/api";
import { vagaType } from "../types/vagaType";

const Vaga: FunctionComponent = () => {
  const navigate = useNavigate();
  const [popUpOpen, setPopUpOpen] = useState<boolean>(false);
  const {id} = useParams();

  function close(){
    setPopUpOpen(!popUpOpen)
  }

  const [vaga,setVaga]=useState<vagaType>();

  async function loadInfo () {
    const data = await api.get("/vacancies");

    setVaga(data.data.vacancies)
  }

  useEffect(()=>{

    loadInfo();

  },[]);

  return (
    <>
      <NavBar />

      <main className="h-screen bg-slate-50 relative">

      <section className="bg-white flex justify-center shadow-md">
            <div className="flex w-4/6 p-5 justify-between">
              <div className="flex items-center">
                <button className="text-4xl p-2 mr-5" onClick={()=>navigate(-1)}><IoChevronBack/></button>
                <div>
                  <h1 className="text-xl font-semibold">Operador de estacionamento</h1>
                  <h2 className="font-bold text-gray-400">Nome da empresa</h2>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button>
                  <CiHeart className="text-3xl text-teal-600"/>
                </button>
                <button className="bg-teal-600  rounded-md text-white font-bold shadow-md text-xl py-2 px-12" onClick={()=>close()}>Candidatar-se</button>
              </div>
              
            </div>
      </section>

      <section className="bg-white flex flex-col w-8/12 p-5 m-auto mt-10 rounded-lg shadow-lg gap-3">

      <h1 className="text-xl font-bold">Descrição</h1>

       <div className="flex gap-5 flex-wrap">
                <p className="flex gap-5 items-center">
                  <FaLocationDot /> Local
                </p>
                <p className="flex gap-5 items-center">
                  <FaUsers /> 1 Vaga(as)
                </p>
                <p className="flex gap-5 items-center">
                  <IoMdBriefcase /> Setor
                </p>
              </div>

        <div className="flex gap-2">
          <p className="bg-teal-200 px-3 py-1 rounded-md">Tags</p>
          <p className="bg-teal-200 px-3 py-1 rounded-md">Tags</p>
          <p className="bg-teal-200 px-3 py-1 rounded-md">Tags</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Pré-requisitos:</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto unde iure harum, obcaecati deleniti voluptates eligendi quo, rem asperiores animi delectus quam facere odit dolores veritatis optio pariatur temporibus perferendis?</p>
        </div>

      </section>

      {
        popUpOpen &&          
          <PopUpCandidatura onclick={close} idVaga={Number(id)}/>
      }

      </main>
    </>
  );
};

export default Vaga;
