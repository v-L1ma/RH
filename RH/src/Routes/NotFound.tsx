import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const NotFound:FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-2">404 - Página não encontrada</h1>
      <p className="text-gray-600 mb-6">Oops! A página que você procura não existe.</p>
      <button >
        <Link to="/">Voltar para a Página Inicial</Link>
      </button>
    </div>
  );
};

export default NotFound;