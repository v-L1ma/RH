import { FunctionComponent } from "react";

export const BancoTalentos: FunctionComponent = () => {
  const talents = [
    { name: "Vinicius Lima Snaot", initials: "VL", phone: "(13) 98193-4062", email: "vinicius@gmail.com" },
    { name: "Ana Beatriz Silva", initials: "AS", phone: "(11) 97654-3210", email: "ana.beatriz@outlook.com" },
    { name: "Carlos Eduardo", initials: "CE", phone: "(21) 99887-7665", email: "carlos.edu@hotmail.com" },
    { name: "Mariana Costa", initials: "MC", phone: "(31) 98765-4321", email: "marianac@gmail.com" },
    { name: "Rodrigo Pereira", initials: "RP", phone: "(41) 92233-4455", email: "rodrigo.p@gmail.com" },
  ];

  return (
    <div className="w-full">
      <header className="mb-8 flex flex-wrap justify-between items-end gap-4">
        <div className="max-w-2xl">
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-base">
            Todos os candidatos que já se candidataram em qualquer vaga estão aqui.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
            <input
              className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-64 transition-all text-slate-900 dark:text-white"
              placeholder="Buscar candidatos..."
              type="text"
            />
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filtrar
          </button>
        </div>
      </header>

      {/* Table Section */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-primary/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-primary/5">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nome</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Telefone</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Currículo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {talents.map((talent, index) => (
                <tr key={index} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {talent.initials}
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{talent.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">{talent.phone}</td>
                  <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">{talent.email}</td>
                  <td className="px-6 py-5 text-right">
                    <button className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all rounded-lg text-sm font-bold border border-primary/20">
                      <span className="material-symbols-outlined text-base">description</span>
                      Ver currículo
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between bg-slate-50/30 dark:bg-slate-800/30 border-t border-primary/5">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Mostrando <span className="font-semibold text-slate-700 dark:text-slate-200">1</span> até <span className="font-semibold text-slate-700 dark:text-slate-200">5</span> de <span className="font-semibold text-slate-700 dark:text-slate-200">142</span> candidatos
          </p>
          <div className="flex items-center gap-1">
            <button className="p-2 text-slate-400 hover:text-primary disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="h-8 w-8 rounded-lg flex items-center justify-center text-sm font-bold bg-primary text-white">1</button>
            <button className="h-8 w-8 rounded-lg flex items-center justify-center text-sm font-medium text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700">2</button>
            <button className="h-8 w-8 rounded-lg flex items-center justify-center text-sm font-medium text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700">3</button>
            <span className="px-2 text-slate-400">...</span>
            <button className="h-8 w-8 rounded-lg flex items-center justify-center text-sm font-medium text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700">29</button>
            <button className="p-2 text-slate-400 hover:text-primary">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
