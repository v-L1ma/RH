import { FunctionComponent } from "react";
import { TCandidate } from "../types/candidateType";

type props = {
    candidate: TCandidate;
}

const CurriculoLayout: FunctionComponent<props> = ({ candidate }) => {
    return (
        <div key={candidate.id}>
            <h1><strong>Nome:</strong> {candidate.nomeCompleto}</h1>
            <p><strong>Email:</strong> {candidate.email}</p>
            <p><strong>Telefone:</strong> {candidate.telefone}</p>
            <p><strong>Data Nascimento:</strong> {candidate.dataNasc}</p>


            <h2>Expêriencia profissional</h2>
            <p><strong>Cargo:</strong> {candidate.cargo}</p>
            <p><strong>Empresa:</strong> {candidate.empresa}</p>
            
            <p>{candidate.dataInicioEmpresa} á {candidate.dataTerminoEmpresa}</p>
            <p><strong>Descrição da Atividade:</strong> {candidate.descricaoATVD}</p>

            <h2>Formação academica</h2>            
            <p>{candidate.escolaridade}</p>
            <p>{candidate.curso}</p>
            <p>{candidate.instituicao}</p>
            
            <p>{candidate.dataInicioEstudo}</p>
            
            <p>{candidate.dataTerminoEstudos}</p>
            

        </div>
    )
}

export default CurriculoLayout;