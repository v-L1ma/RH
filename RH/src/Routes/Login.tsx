import { FunctionComponent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../service/api";
import Loading from "../components/Loading";

const Login: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await api.post("/users/auth", {
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      });
      const { user, token } = response.data;
      localStorage.setItem("Token", token);
      localStorage.setItem("UserInfo", JSON.stringify(user));
      navigate("/painel");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display selection:bg-primary/20">
      {/* Top Navigation Bar */}
      <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="size-8 bg-primary rounded flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined text-xl">dataset</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Facilita RH</h2>
          </Link>
          <div className="flex items-center gap-4">
            <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Suporte</a>
            <Link to="/cadastro" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-md shadow-primary/20">
              Começar grátis
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-slate-100 dark:border-slate-800">
          {/* Left Side: Branding Section */}
          <div className="hidden md:flex md:w-1/2 relative bg-primary items-center justify-center p-12 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <circle cx="10" cy="10" fill="currentColor" r="30"></circle>
                <circle cx="90" cy="90" fill="currentColor" r="40"></circle>
              </svg>
            </div>
            <div className="relative z-10 space-y-8 max-w-sm text-center md:text-left">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight">Encontre os melhores talentos hoje.</h2>
              <p className="text-white/80 text-lg leading-relaxed font-medium">
                Nossa plataforma de recrutamento inteligente ajuda você a triar, gerenciar e contratar os candidatos ideais com facilidade.
              </p>
              <div className="flex flex-col gap-6 pt-4">
                <div className="flex -space-x-3 justify-center md:justify-start">
                  <img alt="User 1" className="inline-block h-12 w-12 rounded-full ring-4 ring-primary shadow-lg" src="https://i.pravatar.cc/150?u=12" />
                  <img alt="User 2" className="inline-block h-12 w-12 rounded-full ring-4 ring-primary shadow-lg" src="https://i.pravatar.cc/150?u=45" />
                  <img alt="User 3" className="inline-block h-12 w-12 rounded-full ring-4 ring-primary shadow-lg" src="https://i.pravatar.cc/150?u=67" />
                  <div className="flex items-center justify-center h-12 w-12 rounded-full ring-4 ring-primary bg-primary-foreground/20 backdrop-blur-sm text-xs font-black">+10k</div>
                </div>
                <p className="text-sm font-black uppercase tracking-widest opacity-80">Junte-se a mais de 10.000 recrutadores</p>
              </div>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="w-full md:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-10 text-center md:text-left">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Bem-vindo de volta</h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Insira seus dados para acessar sua conta gerenciador.</p>
              </div>

              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 block ml-1" htmlFor="email">E-mail corporativo</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </div>
                    <input 
                      required
                      ref={emailRef}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-white" 
                      id="email" 
                      name="email" 
                      placeholder="exemplo@rh.com" 
                      type="email" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between ml-1">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 block" htmlFor="password">Senha</label>
                    <Link className="text-sm font-black text-primary hover:text-primary/80 transition-colors" to="/esqueci-senha">Esqueceu sua senha?</Link>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">lock</span>
                    </div>
                    <input 
                      required
                      ref={passwordRef}
                      className="w-full pl-12 pr-12 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-white" 
                      id="password" 
                      name="password" 
                      placeholder="••••••••" 
                      type="password" 
                    />
                    <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center ml-1">
                  <input className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded cursor-pointer transition-all" id="remember-me" name="remember-me" type="checkbox" />
                  <label className="ml-2 block text-sm font-bold text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="remember-me">
                    Lembrar de mim
                  </label>
                </div>

                <button 
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl font-black text-base shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-70" 
                  type="submit"
                >
                  {isLoading ? <Loading /> : (
                    <>
                      Fazer Login
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>

              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-4 bg-white dark:bg-slate-900 text-slate-400 uppercase tracking-widest font-bold">Ou entre com</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-3 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold text-sm text-slate-700 dark:text-slate-200 shadow-sm">
                  <img alt="Google" className="h-5 w-5" src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-3 py-3 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold text-sm text-slate-700 dark:text-slate-200 shadow-sm">
                   <img alt="LinkedIn" className="h-5 w-5" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
                  LinkedIn
                </button>
              </div>

              <p className="mt-12 text-center text-sm font-bold text-slate-500">
                Novo por aqui? 
                <Link className="text-primary hover:text-primary/80 underline underline-offset-4 ml-1.5" to="/cadastro">Crie uma conta gratuita</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-8 px-6 border-t border-slate-200 dark:border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">
          <p>© 2024 Facilita RH Intelligence Inc.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary transition-colors" href="#">Privacidade</a>
            <a className="hover:text-primary transition-colors" href="#">Termos de Uso</a>
            <a className="hover:text-primary transition-colors" href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
