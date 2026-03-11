import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { BancoTalentos } from "./Routes/BancoTalentos";
import NotFound from "./Routes/NotFound";
import Vaga from "./Routes/Vaga";
import Dashboard from "./Routes/Dashboard";
import EsqueciSenha from "./Routes/EsqueciSenha";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <main className="h-screen">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="cadastro" element={<Cadastrar />} />
              <Route path="esqueci-senha" element={<EsqueciSenha />} />
              <Route path="ponto" element={<Ponto />} />
              <Route path="recrutamento" element={<Recrutamento />} />
              <Route path="portal-vagas" element={<PortalVagas />} />
              <Route path="portal-vagas/vaga/:id" element={<Vaga />} />
              
              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="painel" element={<Painel />}>
                  <Route index element={<Dashboard />} />
                  <Route path="gestao-vagas" element={<GestaoVagas />} />
                  <Route path="gestao-vagas/nova-vaga" element={<NovaVaga />} />
                  <Route path="gestao-vagas/vaga/:id" element={<CandidatosVaga />} />
                  <Route path="banco-de-talentos" element={<BancoTalentos />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </main>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

