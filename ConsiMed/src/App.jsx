import { Link, Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Triagem from './pages/triagem/Triagem'
import Resultados from './pages/resultados/Resultados'
import Login from './pages/login/Login'
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
