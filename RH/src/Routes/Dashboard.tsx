import { FunctionComponent } from "react";

const Dashboard: FunctionComponent = () => {
    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard title="Vagas abertas" value="1" />
                    <StatCard title="Tempo médio" value="0" unit="dias" />
                    <StatCard title="Vagas fechadas" value="2" />
                    <StatCard title="Candidatos por Vaga" value="0" />
                </div>
            </section>

            {/* Charts Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Bar Chart Placeholder */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="h3 text-slate-900 dark:text-white">Vagas abertas por mês</h3>
                            <p className="body-base text-slate-500">Últimos 6 meses</p>
                        </div>
                        <span className="text-emerald-500 text-sm font-bold flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">trending_up</span> +15%
                        </span>
                    </div>
                    <div className="h-48 flex items-end justify-between gap-2 px-2">
                        {[50, 100, 30, 20, 90, 45].map((height, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-md relative transition-all group-hover:bg-primary/40" style={{ height: `${height}%` }}>
                                    <div className="absolute inset-x-0 bottom-0 bg-primary/20 h-full rounded-t-md border-t-2 border-primary"></div>
                                </div>
                                <span className="text-xs font-medium text-slate-500">{["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sectors Distribution */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="h3 text-slate-900 dark:text-white">Vagas por setor</h3>
                            <p className="body-base text-slate-500">Distribuição atual</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-4">
                        <div className="relative size-40 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                <circle className="stroke-slate-100 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="4"></circle>
                                <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="40 100" strokeLinecap="round" strokeWidth="4"></circle>
                                <circle className="stroke-slate-400 dark:stroke-slate-600" cx="18" cy="18" fill="none" r="16" strokeDasharray="25 100" strokeDashoffset="-40" strokeLinecap="round" strokeWidth="4"></circle>
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className="h2 text-slate-900 dark:text-white">5</span>
                                <span className="label-xs text-slate-500">Setores</span>
                            </div>
                        </div>
                        <div className="ml-8 space-y-2">
                            <SectorLegend color="bg-primary" label="TI (40%)" />
                            <SectorLegend color="bg-slate-400" label="RH (25%)" />
                            <SectorLegend color="bg-slate-300" label="Vendas (15%)" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Activity Table */}
            <section>
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <h3 className="h3 text-slate-900 dark:text-white">Atividade Recente</h3>
                        <button className="text-primary label-xs hover:underline transition-all">Ver tudo</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 label-xs">
                                <tr>
                                    <th className="px-6 py-4">Candidato</th>
                                    <th className="px-6 py-4">Vaga</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Data</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <ActivityRow name="João Pedro Silva" initials="JP" job="Desenvolvedor Frontend" status="Em Análise" date="Hoje, 14:30" />
                                <ActivityRow name="Maria Souza" initials="MS" job="Gerente de Projetos" status="Entrevista" date="Ontem, 09:15" />
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

const StatCard = ({ title, value, unit }: { title: string; value: string; unit?: string }) => (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <p className="label-xs text-slate-500 dark:text-slate-400 opacity-80">{title}</p>
        <p className="h2 mt-2 text-slate-900 dark:text-white">
            {value}
            {unit && <span className="body-base font-normal text-slate-400 ml-1">{unit}</span>}
        </p>
    </div>
);

const SectorLegend = ({ color, label }: { color: string; label: string }) => (
    <div className="flex items-center gap-2">
        <span className={`size-2 rounded-full ${color}`}></span>
        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{label}</span>
    </div>
);

const ActivityRow = ({ name, initials, job, status, date }: { name: string; initials: string; job: string; status: string; date: string }) => (
    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
        <td className="px-6 py-4 flex items-center gap-3">
            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold label-xs">{initials}</div>
            <span className="body-base text-slate-900 dark:text-white">{name}</span>
        </td>
        <td className="px-6 py-4">
            <span className="body-base text-slate-600 dark:text-slate-400">{job}</span>
        </td>
        <td className="px-6 py-4">
            <span className={`px-2 py-0.5 rounded-full label-xs !tracking-normal ${status === "Entrevista" ? "bg-emerald-100 text-emerald-700" : "bg-yellow-100 text-yellow-700"}`}>
                {status}
            </span>
        </td>
        <td className="px-6 py-4 body-base text-slate-500">{date}</td>
    </tr>
);

export default Dashboard;
