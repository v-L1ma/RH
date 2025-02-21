import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from './Routes/Login'
import Ponto from './Routes/Ponto';
import Home from './Routes/Home'
import Recrutamento from './Routes/Recrutamento';
import PortalVagas from './Routes/PortalVagas';
import Cadastrar from './Routes/Cadastrar';

function App() {

  return (
    <main className='bg-slate-50 h-screen'>

      <Router>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastrar/>}/>
          <Route path='/ponto' element={<Ponto/>}/>
          <Route path='/recrutamento' element={<Recrutamento/>}/>
          <Route path='/portal-vagas' element={<PortalVagas/>}/>
          
        </Routes>

      </Router>

    </main>
  )
}

export default App
