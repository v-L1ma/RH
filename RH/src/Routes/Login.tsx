import { FunctionComponent } from "react"
import Input from "../components/Input"
import { Link } from "react-router-dom"


const Login:FunctionComponent = ()=>{
    return(
        <main className="flex flex-col items-center w-full gap-5">
            <h1 className="text-2xl font-bold text-center">Faça login para acessar um mundo de possibilidades</h1>
            <form className="w-10/12 bg-white flex flex-col items-center shadow-lg p-3 rounded-lg gap-4">
                <Input label="Email" type="email" id="email" placeholder="Digite seu email"/>
                <Input label="Senha" type="password" id="senha" placeholder="Digite sua senha"/>
                <Link to="/home" className="bg-blue-600 w-full p-1 rounded-md text-center">
                <button>
                    Entrar
                </button>
                </Link>
            </form>

        </main>
    )
}

export default Login