import { FiBriefcase, FiDatabase } from "react-icons/fi";
import { MdOutlineAnalytics } from "react-icons/md";

const PainelHome = () => {
    return (
        <div className="w-full h-full">
            <h1 className="text-5xl font-semibold">Olá, Recrutador(a)!</h1>
            <p className="mt-6">Gerencie suas vagas, visualize candidatos e acompanhe estatísticas.</p>

            <div className="grid grid-cols-5 gap-10 mt-24">

                <div className="border p-5 text-2xl rounded-xl bg-white text-black/70">                   
                    <FiBriefcase className="text-4xl"/>                    
                    <h2>Gestão de vagas</h2>
                </div>

                <div className="border p-5 text-2xl rounded-xl bg-white text-black/70">                   
                <FiDatabase className="text-4xl"/>
                <h2>Banco de talentos</h2>
                </div>

                <div className="border p-5 text-2xl rounded-xl bg-white text-black/70">                   
                <MdOutlineAnalytics className="text-4xl"/>
                <h2>Estatisticas</h2>
                </div>

            </div>
        </div>
    );
};

export default PainelHome;
