import { Link, NavLink, useNavigate } from 'react-router'
import logoImg from '../../assets/logo-verde.png'
import Button from '../Button/Button'
import './Header.css'

export default function Header() {
  const navigate = useNavigate()

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
          <NavLink to="/triagem">sobre nós</NavLink>
          <NavLink to="/login">Entrar</NavLink>
          <Button className='btnBusqueComIa' onClick={() => navigate('/triagem')}>Busque com IA</Button>
        </nav>
      </div>
    </header>
  )
}
