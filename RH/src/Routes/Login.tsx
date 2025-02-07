import { FunctionComponent } from "react"
import Input from "../components/Input"
import { Link } from "react-router-dom"


const Login:FunctionComponent = ()=>{
    return(
        <main className="flex flex-col items-center w-full h-full bg-gradient-to-tr from-teal-300 to-teal-700 py-10">

            <form className="w-11/12  bg-white flex flex-col items-center shadow-lg p-10 rounded-lg gap-10">

                <h1 className="text-2xl font-bold text-center">Login</h1>

                <div className="w-full">
                    <Input label="Email" type="email" id="email" placeholder="Digite seu email"/>
                    <Input label="Senha" type="password" id="senha" placeholder="Digite sua senha"/>
                    <p className="mb-2 text-right">Esqueceu sua senha?</p>
                </div>
                
                <Link to="/home" className="bg-gradient-to-r from-teal-300 to-teal-600 w-full p-2 rounded-full text-center text-white font-bold">
                <button>
                    Entrar
                </button>
                </Link>

                <div className="flex flex-col items-center gap-2">
                <p>Ou cadastre aqui</p>
                <p className="text-xs">CADASTRAR-SE</p>
                </div>
            </form>
            

        </main>
    )
}

export default Login