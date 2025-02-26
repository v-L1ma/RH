import React, { FunctionComponent, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export const NovaVaga: FunctionComponent = () => {
    const navigate = useNavigate()
    const tituloRef = useRef<HTMLInputElement>(null)
    const quantidadeRef = useRef<HTMLInputElement>(null)
    const setorRef = useRef<HTMLInputElement>(null)
    const salarioRef = useRef<HTMLInputElement>(null)
    const descricaoRef = useRef<HTMLTextAreaElement>(null)

    type TVagas = {
        titulo: string | undefined;
        setor: string | undefined;
        salario: number | undefined;
        qtdeVagas: number | undefined;
        descricao: string | undefined;
    }

    const [vagas, setVagas] = useState<TVagas[]>([
        {
            titulo: "vinicius",
            setor: "vinicius",
            salario: 1000,
            qtdeVagas: 1,
            descricao: "vinicius",
        },
    ])

    function onSubmit(e: React.FormEvent){
        e.preventDefault();

            const novaVaga:TVagas = {
                titulo: tituloRef.current?.value,
                setor: setorRef.current?.value,
                salario: Number(salarioRef.current?.value),
                qtdeVagas: Number(quantidadeRef.current?.value),
                descricao: descricaoRef.current?.value,
            }

            setVagas((prev)=>[...prev, novaVaga]);

            console.log(vagas)
    }

    return (
        <div className="w-full flex flex-col gap-10">
            <div className="flex justify-between">
                <h1 className="font-bold text-3xl ">Criar vaga</h1>
                <div className="flex gap-3">
                    <button className="p-2 underline" onClick={()=> navigate(-1)}>Cancelar</button>
                    <button className="bg-green-700 py-2 px-5  rounded-lg shadow-md text-white font-extrabold flex items-center gap-2" onClick={onSubmit}>Salvar</button>
                </div>
            </div>

            <form className="bg-white w-full rounded-lg p-5 flex flex-col gap-4">

                <div>
                    <h2 className="font-bold text-xl">
                        Informações sobre a vaga
                    </h2>
                    <p>
                        Preencha todas as informação necessarias para o candidato entender mais sobre a vaga.
                    </p>
                </div>

                <div className="w-full">
                    <label htmlFor="titulo" className="font-bold">Título</label>
                    <input type="text" id="titulo" className="border-2 w-full p-1 rounded-lg" placeholder="Digite um título para essa vaga." ref={tituloRef}/>
                </div>

                <div className="flex w-full gap-5">
                    <div className="flex flex-col w-4/6">
                        <label htmlFor="setor" className="font-bold">Setor</label>
                        <input type="text" id="setor" className="border-2 p-1 rounded-lg" placeholder="Digite qual o setor desta vaga" ref={setorRef}/>
                    </div>

                    <div className="flex flex-col w-1/6">
                        <label htmlFor="salario" className="font-bold">Salário</label>
                        <input type="number" id="salario" className="border-2 p-1 rounded-lg"  placeholder="Ex.: R$ 100.00" ref={salarioRef}/>
                    </div>

                    <div className="flex flex-col w-1/6">
                        <label htmlFor="vagas" className="font-bold">Qtde. Vagas</label>
                        <input type="number" id="vagas" className="border-2 p-1 rounded-lg" placeholder="0" ref={quantidadeRef}/>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="descricao" className="font-bold">Descrição</label>
                    <textarea name="vagas" id="vagas" className="border-2 rounded-lg resize-none h-48" ref={descricaoRef}></textarea>
                </div>

            </form>



        </div>
    )
}

