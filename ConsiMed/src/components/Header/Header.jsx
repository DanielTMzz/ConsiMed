import { Link, NavLink } from 'react-router'
import logoImg from '../../assets/logo.png'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-container" aria-label="ConsiMed — página inicial">
          <img src={logoImg} alt="" className="logo-img" />
          <span className="logo-text">
            <span className="brand-consi">Consi</span>
            <span className="brand-med">Med</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Navegação principal">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/triagem">Triagem</NavLink>
          <NavLink to="/resultados">Resultados</NavLink>
        </nav>
      </div>
    </header>
  )
}
