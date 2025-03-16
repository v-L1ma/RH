import { FunctionComponent } from "react";

const ExperienciaProfissionalForm: FunctionComponent<{
  register: any,
  errors: any,
}> = ({ register, errors }) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center">Experiência Profissional</h1>

      <div className="flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="cargo" className="font-bold">
            Cargo
          </label>
          <input
            type="text"
            id="cargo"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite o nome do cargo."
            {...register('cargo')}
          />
          {errors.cargo && <p className="text-red-500 font-semibold">{errors.cargo.message}</p>}
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="empresa" className="font-bold">
            Empresa
          </label>
          <input
            type="text"
            id="empresa"
            className="border-2 w-full p-2 rounded-lg"
            placeholder="Digite o nome da empresa."
            {...register('empresa')}
          />
          {errors.empresa && <p className="text-red-500 font-semibold">{errors.empresa.message}</p>}
        </div>

        <div className="flex gap-5">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="dataInicioEmpresa" className="font-bold">
              Data de ínicio
            </label>
            <input
              type="date"
              id="dataInicioEmpresa"
              className="border-2 w-full p-2 rounded-lg"
              placeholder="Digite a data de inicio."
              {...register('dataInicioEmpresa')}
            />
            {errors.dataInicioEmpresa && <p className="text-red-500 font-semibold">{errors.dataInicioEmpresa.message}</p>}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="dataTerminoEmpresa" className="font-bold">
              Data de término
            </label>
            <input
              type="date"
              id="dataTerminoEmpresa"
              className="border-2 w-full p-2 rounded-lg"
              placeholder="Digite a data de termino."
              {...register('dataTerminoEmpresa')}
            />
            {errors.dataTerminoEmpresa && <p className="text-red-500 font-semibold" >{errors.dataTerminoEmpresa.message}</p>}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="descricaoATVD" className="font-bold">
            Descrição das atividades
          </label>
          <textarea
            name=""
            id="descricaoATVD"
            className="border-2 rounded-lg resize-none"
            {...register('descricaoATVD')}
          ></textarea>
          {errors.descricaoATVD && <p className="text-red-500 font-semibold">{errors.descricaoATVD.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ExperienciaProfissionalForm;
