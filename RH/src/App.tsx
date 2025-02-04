import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from './Routes/Login'
import Home from './Routes/Home';

function App() {

  return (
    <main className='bg-slate-50 h-screen'>

      <NavBar/>

      <Router>

        <Routes>

          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          
        </Routes>

      </Router>

    </main>
  )
}

export default App
