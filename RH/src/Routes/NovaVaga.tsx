import React, { FunctionComponent, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const NovaVaga: FunctionComponent = () => {
  const navigate = useNavigate();
  const tituloRef = useRef<HTMLInputElement>(null);
  const quantidadeRef = useRef<HTMLInputElement>(null);
  const setorRef = useRef<HTMLInputElement>(null);
  const salarioRef = useRef<HTMLInputElement>(null);
  const localizacaoRef = useRef<HTMLInputElement>(null);
  const tipoRef = useRef<HTMLSelectElement>(null);
  const descricaoRef = useRef<HTMLTextAreaElement>(null);

  type TVagas = {
    titulo: string | undefined;
    setor: string | undefined;
    salario: number | undefined;
    qtdeVagas: number | undefined;
    localizacao: string | undefined;
    tipo: string | undefined;
    descricao: string | undefined;
  };


  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const novaVaga: TVagas = {
      titulo: tituloRef.current?.value,
      setor: setorRef.current?.value,
      salario: Number(salarioRef.current?.value),
      qtdeVagas: Number(quantidadeRef.current?.value),
      localizacao: localizacaoRef.current?.value,
      tipo: tipoRef.current?.value,
      descricao: descricaoRef.current?.value,
    };


    console.log("Nova vaga criada:", novaVaga);
    // Em um cenário real, aqui faria o POST para a API e então voltaria
    // navigate(-1);
  }

  return (
    <div className="w-full max-w-4xl mx-auto pb-20">
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm group"
          >
            <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">arrow_back</span>
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Criar Nova Vaga</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Publique uma oportunidade e encontre talentos.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-3 text-sm font-bold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
          >
            Descartar
          </button>
          <button 
            onClick={onSubmit}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-primary/25 transform active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[20px]">publish</span>
            Publicar Vaga
          </button>
        </div>
      </header>

      <form className="space-y-8" onSubmit={onSubmit}>
        {/* Basic Info Section */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-50 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">info</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Informações Básicas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="titulo" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Título da Vaga</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">work</span>
                <input 
                  type="text" 
                  id="titulo" 
                  ref={tituloRef}
                  placeholder="Ex: Desenvolvedor Frontend Senior"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="setor" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Setor / Departamento</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">category</span>
                <input 
                  type="text" 
                  id="setor" 
                  ref={setorRef}
                  placeholder="Ex: Tecnologia, RH, Vendas"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="tipo" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Modelo de Trabalho</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">apartment</span>
                <select 
                  id="tipo" 
                  ref={tipoRef}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                >
                  <option value="Presencial">Presencial</option>
                  <option value="Híbrido">Híbrido</option>
                  <option value="Remoto">Remoto</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="localizacao" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Localização</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                <input 
                  type="text" 
                  id="localizacao" 
                  ref={localizacaoRef}
                  placeholder="Ex: São Paulo, SP"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                <label htmlFor="salario" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Salário (R$)</label>
                <input 
                  type="number" 
                  id="salario" 
                  ref={salarioRef}
                  placeholder="0.00"
                  className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="vagas" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Qtd. Vagas</label>
                <input 
                  type="number" 
                  id="vagas" 
                  ref={quantidadeRef}
                  placeholder="1"
                  className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
           <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-50 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">description</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Detalhes da Oportunidade</h2>
          </div>

          <div className="space-y-2">
            <label htmlFor="descricao" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Descrição e Pré-requisitos</label>
            <textarea 
              id="descricao" 
              ref={descricaoRef}
              placeholder="Descreva as responsabilidades, requisitos e benefícios da vaga..."
              className="w-full p-5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-3xl text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all min-h-[240px] resize-none"
            />
          </div>
        </section>

        <div className="flex justify-end pt-4">
          <button 
            type="submit"
            className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-2xl font-black text-base transition-all shadow-xl shadow-primary/25 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Publicar Vaga Agora
          </button>
        </div>
      </form>
    </div>
  );
};
