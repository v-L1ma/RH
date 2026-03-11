import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export const SideBar: FunctionComponent = () => {
  const { theme, toggleTheme } = useTheme();
  const activeClass = "flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary group transition-colors";
  const inactiveClass = "flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group";

  const handleLogout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("UserInfo");
  };

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col h-screen">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
          <span className="material-symbols-outlined">rocket_launch</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm font-bold leading-tight dark:text-white">Recruiter Admin</h1>
          <p className="text-xs text-slate-500">Modern Hiring</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {/* In the current App.tsx, there's no main dashboard page yet, but I'll add the link for future use or just point it to gestao-vagas for now */}
        <NavLink
          to="/painel"
          end
          className={({ isActive }) => isActive ? activeClass : inactiveClass}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-sm font-medium">Dashboard</span>
        </NavLink>

        <NavLink
          to="/painel/gestao-vagas"
          className={({ isActive }) => isActive ? activeClass : inactiveClass}
        >
          <span className="material-symbols-outlined">work</span>
          <span className="text-sm font-medium">Gestão de vagas</span>
        </NavLink>

        <NavLink
          to="/painel/banco-de-talentos"
          className={({ isActive }) => isActive ? activeClass : inactiveClass}
        >
          <span className="material-symbols-outlined">group</span>
          <span className="text-sm font-medium">Banco de talentos</span>
        </NavLink>
      </nav>

      <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800 space-y-1">
        <button
          onClick={toggleTheme}
          className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
        >
          <span className="material-symbols-outlined">
            {theme === 'light' ? 'dark_mode' : 'light_mode'}
          </span>
          <span className="text-sm font-medium">
            Modo {theme === 'light' ? 'Escuro' : 'Claro'}
          </span>
        </button>

        <NavLink
          to="/"
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="text-sm font-medium">Sair da conta</span>
        </NavLink>
      </div>
    </aside>
  );
};
