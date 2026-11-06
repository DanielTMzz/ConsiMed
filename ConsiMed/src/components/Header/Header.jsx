import { Link, NavLink } from 'react-router'
import logoImg from '../../assets/logo.png'
import './Header.css'

export default function Header() {
  return (
    <header className="cabecalho">
      <div className="conteudoCabecalho">
        <Link to="/" className="linkInicio" aria-label="ConsiMed — página inicial">
          <img src={logoImg} alt="" className="imagemLogo" />
          <span className="nomeLogo">
            <span className="nomeConsi">Consi</span>
            <span className="nomeMed">Med</span>
          </span>
        </Link>
        <nav className="navegacaoCabecalho" aria-label="Navegação principal">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/triagem">Triagem</NavLink>
          <NavLink to="/resultados">Resultados</NavLink>
        </nav>
      </div>
    </header>
  )
}
