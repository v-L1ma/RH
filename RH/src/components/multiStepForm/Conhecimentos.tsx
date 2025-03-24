import { FunctionComponent, useRef, useState } from "react";

type idioma ={
    idioma:string,
    nivel: string,
}

type habilidade ={
    nome:string,
}

const Conhecimentos: FunctionComponent = () => {

    const [idiomas, setIdiomas] =useState<idioma[]>([])
    const [habilidades,setHabilidades] = useState<habilidade[]>([])
    const habilidadesRef = useRef<HTMLInputElement>(null);
    const idiomasRef = useRef<HTMLSelectElement>(null);
    const nivelRef = useRef<HTMLSelectElement>(null);

    function novoIdioma(idioma: string, nivel: string) {
        if(nivel===""){
            return;
        }
        if (idiomas.some((item) => item.idioma.toLowerCase() === idioma.toLowerCase())) {
          return; // Retorna sem adicionar se o idioma já existir
        }
      
        setIdiomas((prev) => [...prev, { idioma, nivel }]);
    }

    function removeIdioma(idioma: string) {
        setIdiomas((prev) =>
          prev.filter((item) => item.idioma.toLowerCase() !== idioma.toLowerCase())
        );
      }

      function novaHabilidade(habilidade:string) {
        if(habilidade===""){
            return;
        }
        if (habilidades.some((item) => item.nome.toLowerCase() === habilidade.toLowerCase())) {
          return; // Retorna sem adicionar se o idioma já existir
        }
      
        setHabilidades((prev) => [...prev, {nome: habilidade}]);
    }

    function removeHabilidade(idioma: string) {
        setHabilidades((prev) =>
          prev.filter((item) => item.nome.toLowerCase() !== idioma.toLowerCase())
        );
      }


  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center">Conhecimentos</h1>

      <div className="flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="nomeCompleto" className="font-bold">
            Idiomas
          </label>
          <div className="flex gap-5">
            <select
              name="escolaridade"
              id="escolaridade"
              className="border-2 w-full p-2 rounded-xl"
              ref={idiomasRef}
            >
              <option value="">Selecione...</option>
              <option value="Português">Português</option>
              <option value="Inglês">Inglês</option>
              <option value="Espanhol">Espanhol</option>
              <option value="Alemão">Alemão</option>
              <option value="Italiano">Italiano</option>
              <option value="Japonês">Japonês</option>
              <option value="Francês">Francês</option>
              <option value="Libras">
                Libras (Língua Brasileira de Sinais)
              </option>
              <option value="Mandarim">Mandarim</option>
              <option value="Holandês">Holandês</option>
            </select>

            <select
              name="escolaridade"
              id="escolaridade"
              className="border-2 w-full p-2 rounded-xl"
              ref={nivelRef}
              defaultValue={""}
            >
              <option value="" disabled>Selecione...</option>
              <option value="Básico">Básico</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
              <option value="Fluente">Fluente</option>
            </select>

            <button
              className="w-20 p-2 bg-teal-500 text-white font-extrabold text-xl rounded-xl"
              type="button"
              onClick={()=>novoIdioma(idiomasRef.current!.value ,nivelRef.current!.value)}
            >
              +
            </button>
          </div>

          <div className="flex gap-2 flex-wrap">
            {idiomas.map((idioma)=>(
                <div className="flex bg-slate-100 w-fit rounded-full overflow-hidden transition-all">
                <p className="py-2 px-3">{idioma.idioma} ({idioma.nivel})</p>
                <button className="text-red-500 font-bold px-4" onClick={()=>removeIdioma(idiomasRef.current!.value)}>X</button>
              </div>

            ))}
          </div>

        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="habilidades" className="font-bold">
            Habilidades
          </label>
          <div className="flex gap-5">
              <input
                type="text"
                id="habilidades"
                className="border-2 w-full p-2 rounded-xl"
                placeholder="Digite uma habilidade que você acha relevante."
                ref={habilidadesRef}
              />
              <button
                  className="w-12 p-2 bg-teal-500 text-white font-extrabold text-xl rounded-xl"
                  type="button"
                  onClick={()=>novaHabilidade(habilidadesRef.current!.value)}
                >
                  +
                </button>
          </div>
        </div>
        <div>
        <div className="flex gap-2 flex-wrap">
            {habilidades.map((habilidade)=>(
                <div className="flex bg-slate-100 w-fit rounded-full overflow-hidden transition-all">
                <p className="py-2 px-3">{habilidade.nome}</p>
                <button className="text-red-500 font-bold px-4" onClick={()=>removeHabilidade(habilidadesRef.current!.value)}>X</button>
              </div>

            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Conhecimentos;
