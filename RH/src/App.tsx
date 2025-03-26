import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import PortalVagas from "./Routes/PortalVagas";
import Cadastrar from "./Routes/Cadastrar";
import { Painel } from "./Routes/Painel";
import { GestaoVagas } from "./Routes/GestãoVagas";
import { NovaVaga } from "./Routes/NovaVaga";
import { CandidatosVaga } from "./Routes/CandidatosVaga";
import  BancoTalentos  from "./Routes/BancoTalentos";
import NotFound from "./Routes/NotFound";
import Vaga from "./Routes/Vaga";
import Estatisticas from "./Routes/Estatisticas";
import TabelaCandidatos from "./components/TabelaCandidatos";
import { EditarVaga } from "./components/EditarVaga";
import AuthRoute from "./hooks/useAuthRoute";

function App() {
  return (
    <main className="bg-slate-50 h-screen">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastrar />} />
          <Route path="portal-vagas" element={<PortalVagas />} />
          <Route path="portal-vagas/vaga/:id" element={<Vaga />} />
          <Route path="painel" element={<AuthRoute><Painel /></AuthRoute>} >
            <Route path="" element={<Estatisticas />} />
            <Route path="gestao-vagas" element={<GestaoVagas />} />
            <Route path="gestao-vagas/nova-vaga" element={<NovaVaga />} />

            <Route path="gestao-vagas/vaga/:id" element={<CandidatosVaga />}>
              <Route path="" element={<TabelaCandidatos/>}/>
              <Route path="editar" element={<EditarVaga/>}/>
            </Route>

            <Route path="banco-de-talentos" element={<BancoTalentos />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
