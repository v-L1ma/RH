import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface CardVagaProps {
  id: number;
  Cargo: string | undefined;
  Descriçao?: string | undefined;
  DataCriacao?: string | undefined;
  Localizacao?: string | undefined;
  Vagas?: number;
  setor?: string | undefined;
  to?: string;
  Candidato?: boolean;
}

const CardVaga: FunctionComponent<CardVagaProps> = (props) => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-all group">
      <div className="flex items-start justify-between">
        <div className="flex gap-5">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">work</span>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Link to={props.to || "#"}>
                <h4 className="dark:text-white text-lg font-bold group-hover:text-primary transition-colors">{props.Cargo}</h4>
              </Link>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                Em andamento
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                {props.Localizacao || "Remoto"}
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                {props.DataCriacao || "Recente"}
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">group</span>
                {props.Vagas || 1} vagas
              </div>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors outline-none">
          <span className="material-symbols-outlined text-slate-400">more_vert</span>
        </button>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex -space-x-2">
          <img alt="Applicant" className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900" src="https://i.pravatar.cc/150?u=1" />
          <img alt="Applicant" className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900" src="https://i.pravatar.cc/150?u=2" />
          <img alt="Applicant" className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900" src="https://i.pravatar.cc/150?u=3" />
          <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">+12</div>
        </div>
        <Link to={props.to || "#"}>
          <button className="text-primary font-bold text-sm px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors">
            Ver Candidatos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardVaga;
