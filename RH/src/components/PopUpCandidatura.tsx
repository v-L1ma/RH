import { FunctionComponent } from "react";

const PopUpCandidatura: FunctionComponent = () => {
  return (
    <div className="bg-black/25 absolute z-10 w-full h-full top-0 flex justify-center">
      <div className="flex flex-col bg-white rounded-lg shadow-lg w-3/6 h-5/6 mt-10 p-10 justify-between box-content">
        <div className="flex justify-between items-center gap-2">
          <div className="border-2 border-teal-500 p-7 h-1 w-1 rounded-full flex items-center justify-center">
            1
          </div>

          <div className="border border-teal-500 w-full h-0"></div>

          <div className="border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center">
            2
          </div>

          <div className="border w-full h-0"></div>

          <div className="border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center">
            3
          </div>

          <div className="border w-full h-0"></div>

          <div className="border-2 p-7 h-1 w-1 rounded-full flex items-center justify-center">
            4
          </div>
        </div>

        <h1 className="text-center"> Formação Acadêmica</h1>

        <form action="" className="flex flex-col gap-5">

            <div className="flex gap-5">
                <div className="flex gap-2">
                 <input type="radio" name="" id="" />
                 <label htmlFor="">Concluído</label>
                </div>
                <div className="flex gap-2">
                 <input type="radio" name="" id="" />
                 <label htmlFor="">Cursando</label>
                </div>

                <div className="flex gap-2">
                 <input type="radio" name="" id="" />
                 <label htmlFor="">Incompleto</label>
                </div>
            </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo" className="font-bold">
            Nível de escolaridade
            </label>
            <select name="" id="" className="border-2 w-full p-2 rounded-lg">
                <option value="">Selecione...</option>
                <option value="">Ensino fundamental</option>
                <option value="">Ensino médio</option>
                <option value="">Graduação</option>
                <option value="">Pós-Graduação</option>

            </select>
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo" className="font-bold">
              Curso
            </label>
            <input
              type="text"
              id="titulo"
              className="border-2 w-full p-2 rounded-lg"
              placeholder="Digite o nome do curso (Sem abreviações)."
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo" className="font-bold">
              Instituição de ensino
            </label>
            <input
              type="text"
              id="titulo"
              className="border-2 w-full p-2 rounded-lg"
              placeholder="Digite o nome da empresa."
            />
          </div>

          <div className="flex gap-5">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="titulo" className="font-bold">
                Data de ínicio
              </label>
              <input
                type="date"
                id="titulo"
                className="border-2 w-full p-2 rounded-lg"
                placeholder="Digite o seu melhor email."
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="titulo" className="font-bold">
                Data de término
              </label>
              <input
                type="date"
                id="titulo"
                className="border-2 w-full p-2 rounded-lg"
                placeholder="Digite o seu melhor email."
              />
            </div>
          </div>

        

          <div className="flex justify-end w-full gap-2">
            <button className="border-2 py-3 px-7 rounded-lg">Cancelar</button>
            <button className="bg-teal-500 py-3 px-7  rounded-lg">
              Avançar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUpCandidatura;

/*
<h1 className="text-center">Dados Pessoais</h1>

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

*/

/*

<h1>Experiência Profissional</h1>

        <form action="" className="flex flex-col gap-5">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo" className="font-bold">
              Cargo
            </label>
            <input
              type="text"
              id="titulo"
              className="border-2 w-full p-2 rounded-lg"
              placeholder="Digite o nome do cargo."
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo" className="font-bold">
              Empresa
            </label>
            <input
              type="text"
              id="titulo"
              className="border-2 w-full p-2 rounded-lg"
              placeholder="Digite o nome da empresa."
            />
          </div>

          <div className="flex gap-5">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="titulo" className="font-bold">
                  Data de ínicio
                </label>
                <input
                  type="date"
                  id="titulo"
                  className="border-2 w-full p-2 rounded-lg"
                  placeholder="Digite o seu melhor email."
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="titulo" className="font-bold">
                  Data de término
                </label>
                <input
                  type="date"
                  id="titulo"
                  className="border-2 w-full p-2 rounded-lg"
                  placeholder="Digite o seu melhor email."
                />
              </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo" className="font-bold">
              Descrição das atividades
            </label>
            <textarea name="" id="" className="border-2 rounded-lg resize-none"></textarea>
          </div>

          <div className="flex justify-end w-full gap-2">
            <button className="border-2 py-3 px-7 rounded-lg">Cancelar</button>
            <button className="bg-teal-500 py-3 px-7  rounded-lg">
              Avançar
            </button>
          </div>
        </form>
*/

/*<h1 className="text-center"> Formação Acadêmica</h1>

        <form action="" className="flex flex-col gap-5">

            <div className="flex gap-5">
                <div className="flex gap-2">
                 <input type="radio" name="" id="" />
                 <label htmlFor="">Concluído</label>
                </div>
                <div className="flex gap-2">
                 <input type="radio" name="" id="" />
                 <label htmlFor="">Cursando</label>
                </div>

                <div className="flex gap-2">
                 <input type="radio" name="" id="" />
                 <label htmlFor="">Incompleto</label>
                </div>
            </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo" className="font-bold">
            Nível de escolaridade
            </label>
            <select name="" id="" className="border-2 w-full p-2 rounded-lg">
                <option value="">Selecione...</option>
                <option value="">Ensino fundamental</option>
                <option value="">Ensino médio</option>
                <option value="">Graduação</option>
                <option value="">Pós-Graduação</option>

            </select>
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo" className="font-bold">
              Curso
            </label>
            <input
              type="text"
              id="titulo"
              className="border-2 w-full p-2 rounded-lg"
              placeholder="Digite o nome do curso (Sem abreviações)."
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo" className="font-bold">
              Instituição de ensino
            </label>
            <input
              type="text"
              id="titulo"
              className="border-2 w-full p-2 rounded-lg"
              placeholder="Digite o nome da empresa."
            />
          </div>

          <div className="flex gap-5">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="titulo" className="font-bold">
                Data de ínicio
              </label>
              <input
                type="date"
                id="titulo"
                className="border-2 w-full p-2 rounded-lg"
                placeholder="Digite o seu melhor email."
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="titulo" className="font-bold">
                Data de término
              </label>
              <input
                type="date"
                id="titulo"
                className="border-2 w-full p-2 rounded-lg"
                placeholder="Digite o seu melhor email."
              />
            </div>
          </div>

        

          <div className="flex justify-end w-full gap-2">
            <button className="border-2 py-3 px-7 rounded-lg">Cancelar</button>
            <button className="bg-teal-500 py-3 px-7  rounded-lg">
              Avançar
            </button>
          </div>
        </form>
        */
