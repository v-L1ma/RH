import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const NavBar: FunctionComponent = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 lg:px-40 py-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined">handshake</span>
          </div>
          <h2 className="h3 tracking-tight text-slate-900 dark:text-white">Facilita RH</h2>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-slate-600 dark:text-slate-300">
          <a className="body-base font-semibold hover:text-primary transition-colors" href="#">Funcionalidades</a>
          <a className="body-base font-semibold hover:text-primary transition-colors" href="#">Soluções</a>
          <a className="body-base font-semibold hover:text-primary transition-colors" href="#">Preços</a>
          <a className="body-base font-semibold hover:text-primary transition-colors" href="#">Sobre</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <button className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-primary px-5 btn-text text-white transition-all hover:bg-primary/90 shadow-md shadow-primary/20">
              Área do RH
            </button>
          </Link>
          <Link to="/portal-vagas">
            <button className="flex h-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 px-5 btn-text text-slate-900 dark:text-white transition-all hover:bg-slate-200">
              Portal de Vagas
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
