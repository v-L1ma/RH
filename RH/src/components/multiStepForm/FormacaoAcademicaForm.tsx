import { FunctionComponent } from "react";

const FormacaoAcademicaForm: FunctionComponent<{
  register: any,
  errors: any,
}> = ({register, errors }) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center"> Formação Acadêmica</h1>

      <div className="flex gap-5">
        <div className="flex gap-2">
          <input
            type="radio"
            name="sitaucao"
            id="Concluído"
            value={"Concluído"}
            {...register('sitaucao')}
          />
          <label htmlFor="Concluído">Concluído</label>
          {errors.sitaucao && <p className="text-red-500 font-semibold">{errors.sitaucao.message}</p>}
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            name="sitaucao"
            id="Cursando"
            value={"Cursando"}
            {...register('sitaucao')}
          />
          <label htmlFor="Cursando">Cursando</label>
          {errors.sitaucao && <p className="text-red-500 font-semibold">{errors.sitaucao.message}</p>}
        </div>

        <div className="flex gap-2">
          <input
            type="radio"
            name="sitaucao"
            id="Incompleto"
            value={"Incompleto"}
            {...register('sitaucao')}
          />
          <label htmlFor="Incompleto">Incompleto</label>
          {errors.sitaucao && <p className="text-red-500 font-semibold">{errors.sitaucao.message}</p>}
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="escolaridade" className="font-bold">
          Nível de escolaridade
        </label>
        <select
          name="escolaridade"
          id="escolaridade"
          className="border-2 w-full p-2 rounded-xl"
          {...register('escolaridade')}
        >
          <option value="">Selecione...</option>
          <option value="Ensino fundamental">Ensino fundamental</option>
          <option value="Ensino médio">Ensino médio</option>
          <option value="Graduação">Graduação</option>
          <option value="Pós-Graduação">Pós-Graduação</option>
        </select>
        {errors.escolaridade && <p className="text-red-500 font-semibold">{errors.escolaridade.message}</p>}
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="Curso" className="font-bold">
          Curso
        </label>
        <input
          type="text"
          id="Curso"
          className="border-2 w-full p-2 rounded-xl"
          placeholder="Digite o nome do curso (Sem abreviações)."
          {...register('curso')}
        />
        {errors.curso && <p className="text-red-500 font-semibold">{errors.curso.message}</p>}
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="instituição" className="font-bold">
          Instituição de ensino
        </label>
        <input
          type="text"
          id="instituição"
          className="border-2 w-full p-2 rounded-xl"
          placeholder="Digite o nome da empresa."
          {...register('instituicao')}
        />
        {errors.instituicao && <p className="text-red-500 font-semibold">{errors.instituicao.message}</p>}
      </div>

      <div className="flex gap-5">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="dataInicioEstudo" className="font-bold">
            Data de ínicio
          </label>
          <input
            type="date"
            id="dataInicioEstudo"
            className="border-2 w-full p-2 rounded-xl"
            placeholder="Digite o seu melhor email."
            {...register('dataInicioEstudo')}
          />
          {errors.dataInicioEstudo && <p className="text-red-500 font-semibold">{errors.dataInicioEstudo.message}</p>}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="dataTerminoEstudos" className="font-bold">
            Data de término
          </label>
          <input
            type="date"
            id="dataTerminoEstudos"
            className="border-2 w-full p-2 rounded-xl"
            placeholder="Digite o seu melhor email."
            {...register('dataTerminoEstudos')}
          />
          {errors.dataTerminoEstudos && <p className="text-red-500 font-semibold">{errors.dataTerminoEstudos.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default FormacaoAcademicaForm;
