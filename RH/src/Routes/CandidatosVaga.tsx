import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

export const CandidatosVaga: FunctionComponent = () => {
  const navigate = useNavigate();

  const candidates = [
    { name: "Vinicius Lima", initials: "VL", phone: "(13) 98165-2162", email: "vinicius@email.com" },
    { name: "Adriano Souza", initials: "AS", phone: "(11) 99876-5432", email: "adriano.souza@email.com" },
    { name: "Juliana Silva", initials: "JS", phone: "(21) 98765-4321", email: "juliana.silva@email.com" },
  ];

  return (
    <div className="w-full">
      <header className="mb-8 flex flex-wrap justify-between items-end gap-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-2">
            <button 
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm"
              title="Voltar"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Candidatos da Vaga</h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-base ml-14">
            Gerencie os profissionais inscritos para <span className="text-primary font-bold">Desenvolvedor Full Stack</span>.
          </p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
            <input
              className="pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-64 transition-all text-slate-900 dark:text-white shadow-sm"
              placeholder="Buscar por nome..."
              type="text"
            />
          </div>
          <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 px-5 py-2.5 rounded-xl text-sm font-bold hover:border-primary hover:text-primary transition-all flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filtros
          </button>
        </div>
      </header>

      {/* Table Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                <th className="px-8 py-5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Candidato</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contato</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {candidates.map((candidate, index) => (
                <tr key={index} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shadow-sm">
                        {candidate.initials}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{candidate.name}</span>
                        <span className="text-xs text-slate-400">{candidate.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{candidate.phone}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                      Em triagem
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="h-10 w-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary transition-all rounded-lg border border-transparent hover:border-primary/30">
                        <span className="material-symbols-outlined text-xl">description</span>
                      </button>
                      <button className="px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-all rounded-lg text-sm font-bold shadow-md shadow-primary/20">
                        Avaliar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info instead of complex pagination if few items */}
        <div className="px-8 py-6 bg-slate-50/30 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Mostrando <span className="font-bold text-slate-900 dark:text-white">{candidates.length}</span> candidatos inscritos para esta vaga.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Página 1 de 1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
