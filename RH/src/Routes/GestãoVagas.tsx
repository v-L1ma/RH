import { FunctionComponent } from "react";
import CardVaga from "../components/CardVaga";

export const GestaoVagas: FunctionComponent = () => {
  return (
    <div className="w-full">
      {/* Search & Filters */}
      <div className="flex gap-3 mb-10">
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm text-slate-900 dark:text-white"
            placeholder="Nome da vaga ou cargo"
            type="text"
          />
        </div>
        <button className="bg-primary px-8 py-3 rounded-xl text-white font-bold hover:bg-primary/90 transition-all shadow-sm shadow-primary/20">
          Buscar
        </button>
      </div>

      {/* Open Jobs Section Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
          Vagas em aberto
          <span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-2 py-0.5 rounded-full">12</span>
        </h3>
        <button className="text-primary text-sm font-semibold hover:underline">Ver todas</button>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 gap-4">
        <CardVaga
          id={1}
          Cargo="Desenvolvedor Full Stack"
          Localizacao="São Paulo, SP (Remoto)"
          DataCriacao="12 Out, 2023"
          Vagas={3}
          to={`vaga/1`}
        />
        <CardVaga
          id={2}
          Cargo="UI/UX Designer Senior"
          Localizacao="Belo Horizonte, MG"
          DataCriacao="18 Out, 2023"
          Vagas={2}
          to={`vaga/2`}
        />
        <CardVaga
          id={3}
          Cargo="Gerente de Projetos"
          Localizacao="Curitiba, PR (Híbrido)"
          DataCriacao="05 Set, 2023"
          Vagas={1}
          to={`vaga/3`}
        />
      </div>

      {/* Pagination Placeholder */}
      <div className="mt-10 flex items-center justify-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-all">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-all">2</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-all">3</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-all">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};
