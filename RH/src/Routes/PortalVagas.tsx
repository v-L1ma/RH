import { FunctionComponent, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import FilterDialog from "../components/FilterDialog";
import Footer from "../components/Footer";

const PortalVagas: FunctionComponent = () => {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  const jobList = [
    { title: "Auxiliar de Almoxarife", sector: "Almoxarifado", date: "24/05/2024", location: "São Paulo - SP", vacancies: 2, type: "Presencial" },
    { title: "Analista de Auditoria Jr", sector: "Auditoria", date: "22/05/2024", location: "Curitiba - PR", vacancies: 1, type: "Presencial" },
    { title: "Coordenador de Operações Logísticas", sector: "Logística", date: "20/05/2024", location: "Belo Horizonte - MG", vacancies: 1, type: "Híbrido" },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <NavBar />
      <main>
        {/* Banner Section */}
        <section className="bg-primary py-16 md:py-24 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              A vaga que você procura pode estar aqui!
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-medium">
              Explore milhares de oportunidades em todo o Brasil
            </p>
          </div>
        </section>

        {/* Search Bar Section */}
        <section className="max-w-5xl mx-auto px-4 -mt-10 mb-12">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl p-6 border border-slate-100 dark:border-slate-800">
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-slate-100 outline-none"
                  placeholder="Qual vaga você procura?"
                  type="text"
                />
              </div>
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                <input
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-slate-100 outline-none"
                  placeholder="Onde você procura?"
                  type="text"
                />
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-md shadow-primary/20" type="submit">
                Pesquisar
              </button>
            </form>
          </div>
        </section>

        {/* Jobs Feed Section */}
        <section className="max-w-5xl mx-auto px-4 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Vagas <span className="text-primary font-medium text-lg ml-1">({jobList.length} encontrada(s))</span>
            </h2>
            <div className="flex gap-2">
              <button 
                onClick={() => setIsFilterDialogOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary/50 transition-all"
              >
                <span className="material-symbols-outlined text-sm">filter_list</span> Filtrar
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {jobList.map((job, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                      <span className="bg-primary/10 px-2 py-0.5 rounded">{job.sector}</span>
                      <span className="text-slate-400 font-normal italic">Criada em: {job.date}</span>
                    </div>
                    <Link to={`/portal-vagas/vaga/${index + 1}`}>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                    </Link>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-lg">apartment</span>
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-lg">group</span>
                        {job.vacancies} vaga(s)
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-lg">location_on</span>
                        {job.location}
                      </div>
                    </div>
                  </div>
                  <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold py-2.5 px-6 rounded-lg transition-all text-sm whitespace-nowrap">
                    Candidatar-se
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="text-primary font-bold flex items-center gap-2 mx-auto hover:underline">
              Ver todas as vagas
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <FilterDialog 
        isOpen={isFilterDialogOpen} 
        onClose={() => setIsFilterDialogOpen(false)} 
      />
    </div>
  );
};

export default PortalVagas;
