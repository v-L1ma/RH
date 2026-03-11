import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import bannerVideo from "../assets/banneVideo.mp4";

const Home: FunctionComponent = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full px-4 py-12 md:px-20 lg:px-40">
          <div className="mx-auto max-w-[1200px]">
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 min-h-[560px] flex items-center shadow-2xl">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover opacity-60"
                >
                  <source src={bannerVideo} type="video/mp4" />
                </video>
              </div>
              <div className="relative z-20 flex flex-col gap-8 px-8 md:px-16 max-w-2xl">
                <div className="flex flex-col gap-4">
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary ring-1 ring-inset ring-primary/30">
                    Inteligência Artificial & RH
                  </span>
                  <h1 className="h1 text-white">
                    Software de Recrutamento e Seleção
                  </h1>
                  <p className="body-lg text-slate-300">
                    Encontre os melhores talentos rápido, com Inteligência Comportamental, e faça contratações bem-sucedidas.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="flex h-12 min-w-[160px] items-center justify-center rounded-xl bg-primary px-8 btn-text text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105">
                    Área do RH
                  </button>
                  <button className="flex h-12 min-w-[160px] items-center justify-center rounded-xl bg-white/10 px-8 btn-text text-white backdrop-blur-sm transition-all hover:bg-white/20 border border-white/30">
                    Portal de Vagas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full px-4 py-20 md:px-20 lg:px-40 bg-white dark:bg-slate-900/50">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-16 flex flex-col items-center text-center gap-4">
              <h2 className="max-w-2xl h2 text-slate-900 dark:text-white">
                Recursos Modernos para o seu RH
              </h2>
              <div className="h-1.5 w-20 rounded-full bg-primary"></div>
              <p className="max-w-xl body-lg text-slate-600 dark:text-slate-400">
                Tudo o que você precisa para otimizar seu processo seletivo em uma única plataforma automatizada.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon="bar_chart"
                title="Métricas de desempenho"
                description="Analise KPIs cruciais e o funil de contratação em tempo real com relatórios detalhados."
              />
              <FeatureCard
                icon="dashboard"
                title="Painel para gestão de vagas"
                description="Gerencie todos os processos e etapas de forma visual e intuitiva com sistema Kanban."
              />
              <FeatureCard
                icon="group_add"
                title="Banco de talentos automatizado"
                description="Organize candidatos automaticamente com filtros inteligentes e busca avançada."
              />
              <FeatureCard
                icon="public"
                title="Portal de vagas integrado"
                description="Publique suas vagas nos principais portais globais com apenas um único clique."
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full px-4 py-20 md:px-20 lg:px-40">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <h2 className="h2 text-slate-900 dark:text-white">
                  Por que escolher nossa plataforma?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">psychology</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Inteligência Comportamental</h4>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">Avalie o fit cultural e as soft skills com testes validados cientificamente para reduzir o turnover.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">verified_user</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Experiência do Candidato</h4>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">Proporcione uma jornada fluida e moderna que fortalece sua marca empregadora.</p>
                    </div>
                  </div>
                </div>
                <button className="rounded-lg bg-primary px-8 py-3 font-bold text-white hover:bg-primary/90 transition-all">Saber mais sobre nossa metodologia</button>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-2xl"></div>
                  <img
                    alt="Processo seletivo"
                    className="relative rounded-3xl object-cover shadow-2xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0ZMASb8SJyMOp0_LR94q4i0idCel_yYIs0-WpQF35_QOLXmYIGK9Y13fjMAQjjhU0KAisihvfJsAlUIbjFdR_ve3yYh26CswgWTnoCVBwGQnURcHw00b4jrZ--evswQtq3Ud7L6edi8zWLvkB6yL9CxMJF4Cm7b-_SGS1VplCoLGFW5fH16OKunwftxYN2JG2t5ocbyc31Y5aDb7B4-ZPfq779LwJLDLNLCTg6RdPeTr4vJvshoLYlRIgj0RSiSrpnR_STYPaK74"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-4 py-20 md:px-20 lg:px-40 bg-primary/5 dark:bg-background-dark/50 border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-[1200px] text-center">
            <div className="mb-10 inline-flex items-center justify-center rounded-full bg-primary/10 p-4 text-primary">
              <span className="material-symbols-outlined text-4xl">rocket_launch</span>
            </div>
            <h2 className="mb-6 h2 text-slate-900 dark:text-white">Pronto para transformar seu RH?</h2>
            <p className="mx-auto mb-10 max-w-2xl body-lg text-slate-600 dark:text-slate-400">
              Junte-se a centenas de empresas que já otimizaram seus processos e contrataram os melhores talentos do mercado.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="h-12 rounded-xl bg-primary px-10 btn-text text-white shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all">Começar agora gratuitamente</button>
              <button className="h-12 rounded-xl border-2 border-primary px-10 btn-text text-primary hover:bg-primary/5 transition-all">Agendar demonstração</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: FunctionComponent<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group relative flex flex-col gap-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-background-dark p-8 transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="h3 text-slate-900 dark:text-white">{title}</h3>
      <p className="body-base text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  </div>
);

export default Home;
