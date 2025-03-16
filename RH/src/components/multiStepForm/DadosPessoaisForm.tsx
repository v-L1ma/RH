import { FunctionComponent } from "react";

const DadosPessoaisForm: FunctionComponent<{
  register: any,
  errors: any,
}> = ({register, errors }) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center">Dados Pessoais</h1>
      <div className="flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">

          <label htmlFor="nomeCompleto" className="font-bold">
            Nome completo
          </label>
          <input
            type="text"
            id="nomeCompleto"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite seu nome completo."
            {...register('nomeCompleto')}
          />
          {errors.nomeCompleto && <p className="text-red-500 font-semibold">{errors.nomeCompleto.message}</p>}
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="font-bold">
            E-mail
          </label>
          <input
            type="text"
            id="email"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite o seu melhor email."
            {...register('email')}
          />
          {errors.email && <p className="text-red-500 font-semibold">{errors.email.message}</p>}
        </div>


        <div className="w-full flex flex-col gap-2">
          <label htmlFor="telefone" className="font-bold">
            Telefone
          </label>
          <input
            type="text"
            id="telefone"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite o seu melhor telefone."
            {...register('telefone')}
          />
          {errors.telefone && <p className="text-red-500 font-semibold">{errors.telefone.message}</p>}
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="dataNasc" className="font-bold">
            Data de nascimento
          </label>
          <input
            type="date"
            id="dataNasc"
            className="border-2 w-full p-2 rounded-lg text-gray-400"
            placeholder="Digite a sua data de nascimento."
            {...register('dataNasc')}
          />
          {errors.dataNasc && <p className="text-red-500 font-semibold">{errors.dataNasc.message}</p>}
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="cpf" className="font-bold">
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite o seu CPF."
            {...register('cpf')}
          />
          {errors.cpf && <p className="text-red-500 font-semibold">{errors.cpf.message}</p>}
        </div>
      </div>
    </div>
  );
}

export default DadosPessoaisForm;