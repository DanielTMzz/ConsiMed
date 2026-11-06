import { Link } from 'react-router'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h2>Links rápidos</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/triagem">Triagem</Link></li>
            <li><Link to="/resultados">Resultados</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Contatos demonstrativos</h2>
          <p>(21) 99999-9999</p>
          <p>(21) 3333-3333</p>
          <p>consimed@gmail.com</p>
        </div>

        <div className="footer-column">
          <h2>Redes sociais (exemplos)</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-circle" aria-label="Facebook (exemplo, abre em nova aba)"><FaFacebookF aria-hidden="true" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-circle" aria-label="Instagram (exemplo, abre em nova aba)"><FaInstagram aria-hidden="true" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-circle" aria-label="Twitter (exemplo, abre em nova aba)"><FaTwitter aria-hidden="true" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-circle" aria-label="LinkedIn (exemplo, abre em nova aba)"><FaLinkedinIn aria-hidden="true" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ConsiMed. Todos os direitos reservados.</p>
        <p>Projeto acadêmico demonstrativo.</p>
      </div>
    </footer>
  )
}
