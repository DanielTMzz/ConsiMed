import { Link, Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Triagem from './pages/Triagem'
import Resultados from './pages/Resultados'
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
