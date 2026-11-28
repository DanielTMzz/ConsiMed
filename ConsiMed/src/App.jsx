import { Link, Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Triagem from './pages/triagem/Triagem'
import Resultados from './pages/resultados/Resultados'
import Login from './pages/login/Login'
import EsqueciSenha from './pages/esqueciSenha/EsqueciSenha'
import Conta from './pages/conta/Conta'
import Registro from './pages/registro//Registro'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Resultados />} />
          <Route path="/triagem" element={<Triagem />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/login" element={< Login />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/Registro" element={< Registro />} />
          <Route path="*" element={
            <>
              <h1>Página não encontrada</h1>
              <Link to="/">Voltar para Home</Link>
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
