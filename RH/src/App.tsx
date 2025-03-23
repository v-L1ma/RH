import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./Routes/Login";
import Ponto from "./Routes/Ponto";
import Home from "./Routes/Home";
import Recrutamento from "./Routes/Recrutamento";
import PortalVagas from "./Routes/PortalVagas";
import Cadastrar from "./Routes/Cadastrar";
import { Painel } from "./Routes/Painel";
import { GestaoVagas } from "./Routes/GestãoVagas";
import { NovaVaga } from "./Routes/NovaVaga";
import { CandidatosVaga } from "./Routes/CandidatosVaga";
import  BancoTalentos  from "./Routes/BancoTalentos";
import NotFound from "./Routes/NotFound";
import Vaga from "./Routes/Vaga";
import PainelHome from "./Routes/PainelHome";
import Estatisticas from "./Routes/Estatisticas";
import TabelaCandidatos from "./components/TabelaCandidatos";
import { EditarVaga } from "./components/EditarVaga";

function App() {
  return (
    <main className="bg-slate-50 h-screen">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastrar />} />
          <Route path="ponto" element={<Ponto />} />
          <Route path="recrutamento" element={<Recrutamento />} />
          <Route path="portal-vagas" element={<PortalVagas />} />
          <Route path="portal-vagas/vaga/:id" element={<Vaga />} />
          <Route path="painel" element={<Painel />}>
            <Route path="" element={<PainelHome />} />
            <Route path="gestao-vagas" element={<GestaoVagas />} />
            <Route path="gestao-vagas/nova-vaga" element={<NovaVaga />} />

            <Route path="gestao-vagas/vaga/:id" element={<CandidatosVaga />}>
              <Route path="" element={<TabelaCandidatos/>}/>
              <Route path="editar" element={<EditarVaga/>}/>
            </Route>


            <Route path="banco-de-talentos" element={<BancoTalentos />} />
            <Route path="estatisticas" element={<Estatisticas />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
