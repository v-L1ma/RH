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

    const response = await api.post("/users", {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });

    console.log(response)
  }

  return (
    <main className="flex flex-col md:flex-row items-center md:items-start w-full h-full bg-gradient-to-tr from-teal-300 to-teal-700 py-10 md:p-0">
      <form
        className="w-11/12 md:w-5/12 md:h-screen bg-white flex flex-col items-left shadow-lg p-10 rounded-xl gap-10 md:justify-center"
        onSubmit={onSubmit} // Vinculando a função de envio ao formulário
      >
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
        
        <h1 className="text-2xl font-bold text-center">Crie sua conta</h1>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="nome" className="font-extrabold">Nome Completo</label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome completo"
            ref={nameRef}
            className="border-2 border-black border-opacity-15 p-2 rounded-xl"
          />

          <label htmlFor="email" className="font-extrabold">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            ref={emailRef}
            className="border-2 border-black border-opacity-15 p-2 rounded-xl"
          />

          <label htmlFor="password" className="font-extrabold">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            ref={passwordRef}
            className="border-2 border-black border-opacity-15 p-2 rounded-xl"
          />
        </div>

        <button type="submit" className="bg-gradient-to-r from-teal-300 to-teal-600 w-full p-2 rounded-xl text-center text-white font-bold">Cadastrar</button>

      </form>

      <div>
        <img src={BannerFoto} alt="" className="h-screen" />
      </div>
    </main>
  );
};

export default Cadastrar;
