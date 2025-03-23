import { FunctionComponent, useEffect, useState } from "react";
import api from "../service/api";
import { TCandidate } from "../types/candidateType";
import CurriculoLayout from "../components/CurriculoLayout";

const BancoTalentos: FunctionComponent = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
  const [currentID, setCurrentID] = useState<number>();
  const [candidates, setCandidates] = useState<TCandidate[]>([
    {
      id: 1,
      vacancyID: 101,
      nomeCompleto: "João da Silva",
      email: "joao.silva@email.com",
      telefone: "(11) 98765-4321",
      dataNasc: "1985-05-15",
      cpf: "123.456.789-00",
      cargo: "Analista de TI",
      empresa: "Tech Solutions",
      dataInicioEmpresa: "2010-06-01",
      dataTerminoEmpresa: "2020-12-31",
      descricaoATVD:
        "Desenvolvimento de sistemas e manutenção de infraestrutura de TI.",
      situacao: "Desempregado",
      escolaridade: "Ensino Superior Completo",
      curso: "Ciência da Computação",
      instituicao: "Universidade ABC",
      dataInicioEstudo: "2003-02-01",
      dataTerminoEstudos: "2007-12-15",
    },
    {
      id: 2,
      vacancyID: 102,
      nomeCompleto: "Maria Oliveira",
      email: "maria.oliveira@email.com",
      telefone: "(21) 91234-5678",
      dataNasc: "1990-08-25",
      cpf: "987.654.321-00",
      cargo: "Gerente de Marketing",
      empresa: "Marketing Pro",
      dataInicioEmpresa: "2015-09-01",
      dataTerminoEmpresa: "2023-03-15",
      descricaoATVD:
        "Gestão de campanhas publicitárias e estratégias de marketing digital.",
      situacao: "Empregada",
      escolaridade: "Pós-Graduação",
      curso: "Marketing Digital",
      instituicao: "Instituto XYZ",
      dataInicioEstudo: "2012-03-01",
      dataTerminoEstudos: "2013-11-30",
    },
    {
      id: 3,
      vacancyID: 103,
      nomeCompleto: "Carlos Souza",
      email: "carlos.souza@email.com",
      telefone: "(31) 98765-1234",
      dataNasc: "1980-01-10",
      cpf: "321.654.987-00",
      cargo: "Engenheiro Civil",
      empresa: "Construtora ABC",
      dataInicioEmpresa: "2012-03-15",
      dataTerminoEmpresa: "2021-11-10",
      descricaoATVD: "Execução de obras e projetos de construção civil.",
      situacao: "Desempregado",
      escolaridade: "Ensino Superior Completo",
      curso: "Engenharia Civil",
      instituicao: "Universidade XYZ",
      dataInicioEstudo: "2002-01-01",
      dataTerminoEstudos: "2006-12-20",
    },
    {
      id: 4,
      vacancyID: 104,
      nomeCompleto: "Ana Pereira",
      email: "ana.pereira@email.com",
      telefone: "(41) 99876-5432",
      dataNasc: "1992-02-20",
      cpf: "654.987.123-00",
      cargo: "Designer Gráfico",
      empresa: "Design Creativo",
      dataInicioEmpresa: "2017-05-01",
      dataTerminoEmpresa: "2024-03-22",
      descricaoATVD: "Criação de peças gráficas para campanhas publicitárias.",
      situacao: "Empregada",
      escolaridade: "Ensino Superior Completo",
      curso: "Design Gráfico",
      instituicao: "Faculdade AB",
      dataInicioEstudo: "2010-03-01",
      dataTerminoEstudos: "2014-12-15",
    },
    {
      id: 5,
      vacancyID: 105,
      nomeCompleto: "Lucas Almeida",
      email: "lucas.almeida@email.com",
      telefone: "(51) 94567-8901",
      dataNasc: "1988-11-30",
      cpf: "456.123.789-00",
      cargo: "Consultor de Vendas",
      empresa: "Vendas Pro",
      dataInicioEmpresa: "2018-06-20",
      dataTerminoEmpresa: "2025-01-10",
      descricaoATVD:
        "Consultoria para aumento de vendas e expansão de mercado.",
      situacao: "Empregada",
      escolaridade: "Ensino Superior Completo",
      curso: "Administração",
      instituicao: "Universidade Federal",
      dataInicioEstudo: "2007-08-01",
      dataTerminoEstudos: "2011-07-30",
    },
  ]);

  async function loadCandidates() {
    try {
      const data = await api.get("/applications");

      console.log(data.data.applications);

      setCandidates(data.data.applications);
    } catch (error) {
      console.log("Houve um erro na requisição", error);
    }
  }

  useEffect(() => {
    loadCandidates();
  }, []);

  return (
    <div className="flex flex-col gap-10 w-full">
      <h1 className="text-3xl font-extrabold">Banco de talentos</h1>
      <div className="bg-white w-full rounded-xl shadow-md shadow-gray-200 p-5 flex flex-col gap-5 ">
        <div>
          <h1 className="text-xl font-bold">Banco de talentos</h1>
          <p>
            Todos os candidatos que se já se candidataram em qualquer vaga estão
            aqui.
          </p>
        </div>
        <div className="overflow-x-scroll ">
          <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gray-100/50">
              <tr>
                <th className="px-4 py-0 text-left border-l">Nome</th>
                <th className="px-4 py-2 text-left border-l">Telefone</th>
                <th className="px-4 py-2 text-left  border-l">Email</th>
                <th className="px-4 py-2 text-left border-l">Currículo</th>
              </tr>
            </thead>
            <tbody>
              {candidates && candidates.length > 0 ? (
                candidates?.map((candidate) => (
                  <tr className="border-t mt-10 hover:bg-gray-100">
                    <td className="px-4 py-2">{candidate.nomeCompleto}</td>
                    <td className="px-4 py-2">{candidate.telefone}</td>
                    <td className="px-4 py-2">{candidate.email}</td>
                    <td
                      className="px-4 py-2"
                      onClick={() => {
                        setIsPopUpOpen(!isPopUpOpen);
                        setCurrentID(candidate.id);
                      }}
                    >
                      <p className="bg-teal-600 text-white cursor-pointer w-fit py-2 px-3 rounded-xl font-bold">
                        Ver currículo
                      </p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-t mt-10 hover:bg-gray-100">
                  <td colSpan={4} className="px-4 py-2">
                    Essa vaga não possuí candidatos.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {isPopUpOpen && (
            <div className="bg-black/20 w-full h-screen absolute top-0 left-0 flex flex-col items-center justify-center py-24 overflow-y-scroll">
              <div className="w-4/6 bg-white p-10 shadow-xl rounded-xl ">
                <div
                  className="flex justify-end text-3xl cursor-pointer"
                  onClick={() => setIsPopUpOpen(!isPopUpOpen)}
                >
                  x
                </div>
                {candidates.map((candidate) => {
                  if (candidate.id === currentID) {
                    return <CurriculoLayout candidate={candidate} />;
                  }
                  return null;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BancoTalentos;
