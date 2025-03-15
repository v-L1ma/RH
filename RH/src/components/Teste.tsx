import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    nomeCompleto: z.string().min(3, 'Nome é obrigatório'),
    email: z.string().email('Email inválido'),
    telefone:z.string(),
    dataNasc:z.string(),
    cpf:z.string(),
});

type FormData = z.infer<typeof schema>;

const Teste = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
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
          {errors.nomeCompleto && <p>{errors.nomeCompleto.message}</p>}
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
          {errors.email && <p>{errors.email.message}</p>}
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
          {errors.telefone && <p>{errors.telefone.message}</p>}
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
          {errors.dataNasc && <p>{errors.dataNasc.message}</p>}
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
          {errors.cpf && <p>{errors.cpf.message}</p>}
        </div>
      </div>
    </div>
    <button>enviar</button>
        </form>
    );
};

export default Teste;