import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

const EsqueciSenha: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de recuperação aqui
    setIsSent(true);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-10 py-4 bg-white/80 dark:bg-background-dark/50 backdrop-blur-sm sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3 text-primary group">
          <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-2xl">account_tree</span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">Facilita RH</h2>
        </Link>
        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined">help</span>
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="flex flex-col w-full max-w-[440px] bg-white dark:bg-slate-900/40 p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-primary/5 backdrop-blur-sm">
          {!isSent ? (
            <>
              <div className="mb-8">
                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">lock_reset</span>
                </div>
                <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight mb-2">Recuperar Senha</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Digite seu email cadastrado para receber as instruções de recuperação.</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-slate-700 dark:text-slate-200 text-sm font-bold ml-1" htmlFor="email">Email institucional</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">mail</span>
                    </div>
                    <input 
                      required
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-13 pl-12 pr-4 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-slate-400 transition-all outline-none" 
                      placeholder="exemplo@empresa.com.br" 
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full flex cursor-pointer items-center justify-center rounded-xl h-13 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold tracking-wide transition-all shadow-lg shadow-primary/25 transform active:scale-[0.98]">
                    <span>Enviar instruções</span>
                    <span className="material-symbols-outlined ml-2 text-xl">send</span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="size-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 mx-auto text-emerald-600 dark:text-emerald-400">
                <span className="material-symbols-outlined text-4xl">mark_email_read</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Verifique seu email</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Enviamos um link de recuperação para <span className="font-bold text-slate-700 dark:text-slate-200">{email}</span>. O link expira em 30 minutos.
              </p>
              <button 
                onClick={() => setIsSent(false)}
                className="text-primary font-bold hover:underline mb-4"
              >
                Não recebeu? Tentar novamente
              </button>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-center">
            <Link to="/login" className="group flex items-center gap-2 text-slate-500 hover:text-primary text-sm font-bold transition-colors">
              <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
              Voltar para o Login
            </Link>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center">
        <p className="text-slate-400 dark:text-slate-500 text-xs font-medium uppercase tracking-widest">
          © 2024 Facilita RH. Tecnologia para recrutadores.
        </p>
      </footer>
    </div>
  );
};

export default EsqueciSenha;
