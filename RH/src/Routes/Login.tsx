import { FunctionComponent, useRef } from "react";
import { Link } from "react-router-dom";
import BannerFoto from "../assets/9524851_4184677.jpg";
import { IoIosArrowBack } from "react-icons/io";

const Login: FunctionComponent = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <main className="flex flex-col md:flex-row items-center md:items-start w-full h-full  bg-gradient-to-tr from-teal-300 to-teal-700 py-10 md:p-0">
      <form className="w-11/12 md:w-5/12 md:h-screen bg-white flex flex-col items-center shadow-lg p-10 rounded-lg gap-10 md:justify-center">
        <Link
          to="/"
          className="mr-auto -mt-40 mb-28 flex items-center font-bold text-xl"
        >
          <span>
            <IoIosArrowBack />
          </span>
          <h1>Voltar</h1>
        </Link>

        <h1 className="text-2xl font-bold text-center">Login</h1>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="font-extrabold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            ref={emailRef}
            className="border-2 border-black border-opacity-15 p-1 rounded-lg"
          />

          <label htmlFor="password" className="font-extrabold">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            ref={passwordRef}
            className="border-2 border-black border-opacity-15 p-1 rounded-lg"
          />
          <p className="mb-2 text-right">Esqueceu sua senha?</p>
        </div>

        <Link
          to="/home"
          className="bg-gradient-to-r from-teal-300 to-teal-600 w-full p-2 rounded-lg text-center text-white font-bold"
        >
          <button>Entrar</button>
        </Link>

        <div className="flex flex-col items-center gap-2">
          <p>Ou cadastre aqui</p>
          <Link to="/cadastro">
            <p className="text-xs">CADASTRAR-SE</p>
          </Link>
        </div>
      </form>

      <div>
        <img src={BannerFoto} alt="" className="h-screen" />
      </div>
    </main>
  );
};

export default Login;
