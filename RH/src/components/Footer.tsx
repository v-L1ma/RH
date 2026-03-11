import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-900 dark:bg-background-dark px-4 py-12 md:px-20 lg:px-40 mt-auto">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-primary"></div>
              <span className="text-xl font-black tracking-tight text-white">Facilita RH</span>
            </div>
            <p className="text-sm text-slate-500 italic">Transformando o recrutamento global através de tecnologia e inteligência.</p>
          </div>
          <div>
            <h5 className="mb-4 font-bold uppercase tracking-wider text-white">Produto</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Funcionalidades</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Integrações</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cases de Sucesso</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Segurança</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-bold uppercase tracking-wider text-white">Recursos</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">E-books</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Webinars</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Suporte</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-bold uppercase tracking-wider text-white">Legal</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Privacidade</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Termos de Uso</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">LGPD</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-100/10 dark:border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>© 2024 Facilita RH. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
