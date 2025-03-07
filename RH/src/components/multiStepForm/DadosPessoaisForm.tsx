import { FunctionComponent } from "react";

const DadosPessoaisForm:FunctionComponent = () => {
    return(

      <div className="flex flex-col gap-10">
      <h1 className="text-center">Dados Pessoais</h1>
    <div className="flex flex-col gap-5">
      <div className="w-full flex flex-col gap-2">
      
      <label htmlFor="titulo" className="font-bold">
        Nome completo
      </label>
      <input
        type="text"
        id="titulo"
        className="border-2 w-full p-2 rounded-lg"
        placeholder="Digite seu nome completo."
      />
      </div>
      
      <div className="w-full flex flex-col gap-2">
      <label htmlFor="titulo" className="font-bold">
        E-mail
      </label>
      <input
        type="text"
        id="titulo"
        className="border-2 w-full p-2 rounded-lg"
        placeholder="Digite o seu melhor email."
      />
      </div>
      
      <div className="w-full flex flex-col gap-2">
      <label htmlFor="titulo" className="font-bold">
        Data de nascimento
      </label>
      <input
        type="date"
        id="titulo"
        className="border-2 w-full p-2 rounded-lg text-gray-400"
        placeholder="Digite um título para essa vaga."
      />
      </div>
      
      <div className="w-full flex flex-col gap-2">
      <label htmlFor="titulo" className="font-bold">
        CPF
      </label>
      <input
        type="text"
        id="titulo"
        className="border-2 w-full p-2 rounded-lg"
        placeholder="Digite o seu CPF."
      />
      </div>
    </div>
</div>
    );
}

export default DadosPessoaisForm;