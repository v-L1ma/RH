import { FunctionComponent, useRef, useState } from "react"
import CardVaga from "../components/CardVaga"
import { FaPlus } from "react-icons/fa";
import Input from "../components/Input";


interface VagasType{
    id: number;
    Cargo:string | undefined;
    Descrição:string| undefined;
    Criador:string| undefined;
}

const Recrutamento:FunctionComponent=()=>{

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [vagas, setVagas] = useState<VagasType[]>([
        {
            id: Math.floor(Math.random() * 10000),
            Cargo: "Gerente de vendas",
            Descrição: "Uma pessoa que seja proativa",
            Criador:"Vinicius"
        },
    ])

    const inputCargoRef = useRef<HTMLInputElement>(null)
    const inputDescricaoRef = useRef<HTMLInputElement>(null)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        if (e && e.target instanceof HTMLInputElement) {
            console.log(e.target.value);
        }
    }

    const handleSave = () =>{

        const newVaga: VagasType = {
            id: Math.floor(Math.random() * 10000),
            Cargo: inputCargoRef.current?.value,
            Descrição: inputDescricaoRef.current?.value,
            Criador:"Vinicius",
        }

        setVagas((previousVagas) => [...previousVagas, newVaga])
        setIsOpen(false)
    }

    return(
        <div>
            <main className="h-screen flex flex-col items-start p-10">
                <h1 className="text-4xl text-blue-600 mb-5 font-black">Banco de talentos</h1>

                <div className="ml-auto bg-white mb-5 py-2 px-5 rounded-3xl cursor-pointer shadow-md" onClick={()=> setIsOpen(true)}>
                   <p className="flex items-center gap-1 font-bold"><span><FaPlus/></span> Criar vaga</p>
                </div>

                {
                    isOpen &&
                    <div className="bg-white z-10 absolute w-5/6 p-5 shadow-lg rounded-lg">
                        <p className="text-end" onClick={()=>setIsOpen(false)}>X</p>
                        <h1 className="text-2xl font-bold text-center">Criar nova vaga</h1>

                        <form className="flex flex-col gap-4">
                            <Input type="text" id="cargo" label="cargo" placeholder="Insira o cargo da vaga" ref={inputCargoRef}/>
                            <Input type="text" id="descricao" label="Descrição" placeholder="Insira a descrição da vaga" ref={inputDescricaoRef}/>
                            <button type="button" className="w-full text-center bg-green-700 rounded-md p-1" onClick={handleSave}>Salvar</button>
                        </form>
                    </div>
                }               

                <CardVaga/>

            </main>
        </div>
    )
}

export default Recrutamento