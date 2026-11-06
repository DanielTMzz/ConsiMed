import { Link, Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/home/Home'
import Triagem from './pages/triagem/Triagem'
import Resultados from './pages/resultados/Resultados'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/triagem" element={<Triagem />} />
          <Route path="/resultados" element={<Resultados />} />
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
