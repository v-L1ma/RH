import { FunctionComponent } from "react";
import { TCandidate } from "../types/candidateType";

type props = {
    candidate: TCandidate;
}

const CurriculoLayout: FunctionComponent<props> = ({ candidate }) => {
    return (
        <div key={candidate.id} className="flex flex-col gap-5">
            
            <div className="flex justify-between">
                <div>
                    <h1 className="text-3xl font-extrabold">{candidate.nomeCompleto}</h1>
                </div>
                <div className="flex flex-col">
                    <p><strong>Email:</strong> {candidate.email}</p>
                    <p><strong>Telefone:</strong> {candidate.telefone}</p>
                    <p><strong>Data Nascimento:</strong> {candidate.dataNasc}</p>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold">Resumo profissional</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis suscipit sequi est fugiat officiis natus, eaque minima reprehenderit totam dolores modi possimus consequuntur magnam enim ad necessitatibus sed delectus.</p>
            </div>


            <div>
                <h2 className="text-xl font-bold">Expêriencia profissional</h2>
                <p className="text-lg">{candidate.cargo} -<span className="text-sm"> {candidate.dataInicioEmpresa} á {candidate.dataTerminoEmpresa}</span></p>
                <p>{candidate.empresa}</p>
                
                
                <p>{candidate.descricaoATVD}</p>
            </div>

            <div>
                <h2 className="text-xl font-bold">Formação academica</h2>
                <p></p>
                <p className="text-lg">{candidate.curso} -<span className="text-sm"> {candidate.dataInicioEstudo} á {candidate.dataTerminoEstudos}</span></p>
                <p>{candidate.instituicao}</p>
            </div>
            
            <div>
                <h2 className="text-xl font-bold">Idiomas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis suscipit sequi est fugiat officiis natus, eaque minima reprehenderit totam dolores modi possimus consequuntur magnam enim ad necessitatibus sed delectus.</p>
            </div>

            <div>
                <h2 className="text-xl font-bold">Habilidades</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis suscipit sequi est fugiat officiis natus, eaque minima reprehenderit totam dolores modi possimus consequuntur magnam enim ad necessitatibus sed delectus.</p>
            </div>

        </div>
    )
}

export default CurriculoLayout;