import { FunctionComponent, useRef } from "react";
import { Link } from "react-router-dom";
import BannerFoto from "../assets/9524851_4184677.jpg";
import { IoIosArrowBack } from "react-icons/io";
import api from "../service/api";

const Cadastrar: FunctionComponent = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    const response = await api.post("/create", {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });

    console.log(response)
  }

  return (
    <main className="flex flex-col md:flex-row items-center md:items-start w-full h-full bg-gradient-to-tr from-teal-300 to-teal-700 py-10 md:p-0">
      <form
        className="w-11/12 md:w-5/12 md:h-screen bg-white flex flex-col items-center shadow-lg p-10 rounded-lg gap-10 md:justify-center"
        onSubmit={onSubmit} // Vinculando a função de envio ao formulário
      >
        <Link
          to="/"
          className="mr-auto -mt-40 mb-28 flex items-center font-bold text-xl"
        >
          <span>
            <IoIosArrowBack />
          </span>
          <h1>Voltar</h1>
        </Link>

        <h1 className="text-2xl font-bold text-center">Cadastro</h1>

        <div className="w-full">
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome completo"
            ref={nameRef}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            ref={emailRef}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            ref={passwordRef}
          />
        </div>

        <button type="submit">Entrar</button>

        <div className="flex flex-col items-center gap-2">
          <p>Ou cadastre-se aqui</p>
          <p className="text-xs">CADASTRAR-SE</p>
        </div>
      </form>

      <div>
        <img src={BannerFoto} alt="" className="h-screen" />
      </div>
    </main>
  );
};

export default Cadastrar;
