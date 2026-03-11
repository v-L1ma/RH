import { FunctionComponent } from "react";
import { SideBar } from "../components/SideBar";
import { Outlet, useLocation, Link } from "react-router-dom";

export const Painel: FunctionComponent = () => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname.includes("gestao-vagas")) return "Gestão de vagas";
    if (location.pathname.includes("banco-de-talentos")) return "Banco de talentos";
    return "Dashboard";
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display">
      <SideBar />
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">{getTitle()}</h2>
          <div className="flex items-center gap-3">
            {location.pathname.includes("gestao-vagas") && (
              <Link to="gestao-vagas/nova-vaga">
                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 transition-all shadow-sm shadow-primary/20">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  Criar vaga
                </button>
              </Link>
            )}
          </div>
        </header>
        <div className="p-8 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
