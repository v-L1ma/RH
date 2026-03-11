import { FunctionComponent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../service/api";
import Loading from "../components/Loading";

const Cadastrar: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await api.post("/create", {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display selection:bg-primary/20">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-primary/10 px-6 py-5 md:px-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white transition-all group-hover:rotate-6 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-2xl">dataset</span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-black leading-tight tracking-tighter">Facilita RH</h2>
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-sm font-bold text-slate-500 uppercase tracking-widest">Já tem conta?</span>
          <Link to="/login" className="flex min-w-[100px] items-center justify-center rounded-xl h-11 px-5 bg-primary/10 text-primary text-sm font-black hover:bg-primary hover:text-white transition-all shadow-sm border border-primary/5">
            Fazer Login
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10"></div>

        <div className="w-full max-w-[540px] bg-white dark:bg-slate-900 p-8 md:p-14 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
          <div className="flex flex-col gap-3 mb-12 text-center md:text-left">
            <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-black leading-none tracking-tighter">Criar Conta</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">Junte-se à nossa plataforma de recrutamento e acelere suas contratações.</p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            {/* Nome Field */}
            <div className="flex flex-col gap-2.5">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-bold ml-1.5 uppercase tracking-widest opacity-80" htmlFor="nome">Nome Completo</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[22px] group-focus-within:text-primary transition-colors">person</span>
                <input 
                  required
                  ref={nameRef}
                  id="nome"
                  className="flex w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 h-14 pl-12 pr-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium" 
                  placeholder="Seu nome completo" 
                  type="text" 
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2.5">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-bold ml-1.5 uppercase tracking-widest opacity-80" htmlFor="email">E-mail Corporativo</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[22px] group-focus-within:text-primary transition-colors">mail</span>
                <input 
                  required
                  ref={emailRef}
                  id="email"
                  className="flex w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 h-14 pl-12 pr-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium" 
                  placeholder="exemplo@rh.com" 
                  type="email" 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2.5">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-bold ml-1.5 uppercase tracking-widest opacity-80" htmlFor="password">Senha</label>
              <div className="relative flex items-center group">
                <span className="material-symbols-outlined absolute left-4 text-slate-400 text-[22px] group-focus-within:text-primary transition-colors">lock</span>
                <input 
                  required
                  ref={passwordRef}
                  id="password"
                  className="flex w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 h-14 pl-12 pr-12 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium" 
                  placeholder="Crie uma senha forte" 
                  type="password" 
                />
                <button className="absolute right-4 text-slate-400 hover:text-primary transition-colors focus:outline-none" type="button">
                  <span className="material-symbols-outlined text-[22px]">visibility</span>
                </button>
              </div>
              <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mt-1 ml-1">Mínimo 8 caracteres • letras e números</p>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-4 mt-4 ml-1">
              <input 
                required 
                className="mt-1 h-5 w-5 rounded-md border-slate-300 text-primary focus:ring-primary transition-all cursor-pointer" 
                id="terms" 
                type="checkbox" 
              />
              <label className="text-xs font-bold text-slate-500 leading-relaxed cursor-pointer" htmlFor="terms">
                Concordo com os <a className="text-primary hover:underline underline-offset-4" href="#">Termos de Uso</a> e <a className="text-primary hover:underline underline-offset-4" href="#">Política de Privacidade</a> da Facilita RH.
              </label>
            </div>

            <button 
              disabled={isLoading}
              className="group flex w-full items-center justify-center rounded-2xl h-14 bg-primary text-white text-base font-black tracking-widest hover:brightness-110 active:scale-[0.97] transition-all shadow-xl shadow-primary/25 mt-6 disabled:opacity-70 gap-3" 
              type="submit"
            >
              {isLoading ? <Loading /> : (
                <>
                  Criar minha conta
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">rocket_launch</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-12 flex flex-col gap-6">
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
              <span className="flex-shrink mx-6 text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Redes Sociais</span>
              <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
            </div>

            <div className="flex gap-4">
              <button className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 h-13 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold text-slate-700 dark:text-slate-200 text-sm shadow-sm">
                <img alt="Google" className="size-5" src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" />
                Google
              </button>
              <button className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 h-13 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold text-slate-700 dark:text-slate-200 text-sm shadow-sm">
                <img alt="LinkedIn" className="size-5" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="px-6 py-10 text-center mt-auto">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">© 2024 Facilita RH - O Futuro do Recrutamento Inteligente.</p>
      </footer>
    </div>
  );
};

export default Cadastrar;
