import { FunctionComponent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BannerFoto from "../assets/9524851_4184677.jpg";
import { IoIosArrowBack } from "react-icons/io";
import api from "../service/api";
import Loading from "../components/Loading";

const Login: FunctionComponent = () => {

  const [isLoading, setIsloading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate()

  async function onSubmit(e:React.FormEvent<HTMLFormElement>):Promise<void> {
    e.preventDefault();

    try{
    
    setIsloading(true);

    const response = await api.post("/users/auth", {
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    });

    const {user, token} = response.data

    localStorage.setItem("Token", token)
    localStorage.setItem("UserInfo", user)
    navigate("/painel")
    
    } catch(error){
      console.log(error);
      setError(true)
    }

    setIsloading(false)
  }

  return (
    <main className="flex flex-col md:flex-row items-center md:items-start w-full h-full  bg-gradient-to-tr from-teal-300 to-teal-700 py-10 md:p-0">
      <form className="w-11/12 md:w-3/12 md:h-screen bg-white flex flex-col items-left shadow-lg p-10 rounded-xl gap-10 md:justify-between" onSubmit={onSubmit}>
      
        <div>
          <Link
            to="/"
            className="flex items-center font-bold text-xl"
          >
            <span>
              <IoIosArrowBack />
            </span>
            <h1>Voltar</h1>
          </Link>
        </div>


        <div className="w-full flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-center">Login</h1>

          <label htmlFor="email" className="font-extrabold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            ref={emailRef}
            className="border-2 border-black border-opacity-15 p-2 rounded-xl"
          />

          <label htmlFor="password" className="font-extrabold">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            ref={passwordRef}
            className="border-2 border-black border-opacity-15 p-2 rounded-xl"
          />
          <p className="mb-2 text-right">Esqueceu sua senha?</p>

          <button type="submit" className="flex bg-gradient-to-r from-teal-400 to-teal-600 w-full p-2 rounded-xl text-center justify-center text-white font-extrabold">
          {
            isLoading 
            ?<div className="w-6 h-6"><Loading/></div>
            :"Entrar"
          }

          </button>

          {
            error && <p className="font-bold text-red-500 text-center transition-all">Parece que houve um erro...</p>
          }
        </div>

         

        <div className="flex flex-col items-center gap-2">
          <p>Ou cadastre aqui</p>
          <Link to="/cadastro">
            <p className="text-xs text-blue-700 underline">CADASTRAR-SE</p>
          </Link>
        </div>
      </form>

      <div className="hidden xl:flex">
        <img src={BannerFoto} alt="" className="h-screen" />
      </div>
    </main>
  );
};

export default Login;
