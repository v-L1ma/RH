import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from './Routes/Login'
import Ponto from './Routes/Ponto';
import Home from './Routes/Home'
import Recrutamento from './Routes/Recrutamento';

function App() {

  return (
    <main className='bg-slate-50 h-screen'>

      <Router>

      <NavBar/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/ponto' element={<Ponto/>}/>
          <Route path='/recrutamento' element={<Recrutamento/>}/>
          
        </Routes>

      </Router>

    </main>
  )
}

export default App
