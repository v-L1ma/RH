import React from 'react';

interface FilterDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterDialog: React.FC<FilterDialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Dialog Content */}
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all duration-300 scale-100 opacity-100">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">filter_list</span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-display">Opções de Filtro</h2>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Sector Filter */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Setor</label>
            <div className="grid grid-cols-2 gap-2">
              {['Almoxarifado', 'Auditoria', 'Logística', 'Financeiro', 'TI', 'RH'].map((sector) => (
                <button 
                  key={sector}
                  className="px-4 py-3 text-sm font-semibold border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary hover:bg-primary/5 dark:text-slate-300 transition-all text-left flex justify-between items-center group"
                >
                  {sector}
                  <span className="material-symbols-outlined text-lg opacity-0 group-hover:opacity-100 text-primary transition-opacity">add</span>
                </button>
              ))}
            </div>
          </div>

          {/* Job Type Filter */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Tipo de Trabalho</label>
            <div className="flex flex-wrap gap-2">
              {['Presencial', 'Híbrido', 'Remoto'].map((type) => (
                <button 
                  key={type}
                  className="px-6 py-2.5 text-sm font-bold border-2 border-slate-200 dark:border-slate-700 rounded-full hover:border-primary hover:text-primary transition-all dark:text-slate-300"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Estado / Cidade</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
              <input 
                type="text" 
                placeholder="Ex: São Paulo, Rio de Janeiro..."
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-6 bg-slate-50 dark:bg-slate-800/50 flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-4 px-6 text-sm font-black text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all border border-slate-200 dark:border-slate-700"
          >
            Limpar Filtros
          </button>
          <button 
            onClick={onClose}
            className="flex-1 py-4 px-6 text-sm font-black text-white bg-primary hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/25 transition-all transform active:scale-[0.98]"
          >
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDialog;
