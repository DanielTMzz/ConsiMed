import { Link } from 'react-router'
import { FaEnvelope } from 'react-icons/fa'
import Button from '../../components/Button/Button'
import styles from './EsqueciSenha.module.css'

export default function EsqueciSenha() {
  return (
    <section className={styles.recuperacao}>
      <h1>Recuperar senha</h1>
      <p>Informe o e-mail que você usou para criar sua conta.</p>

      <label htmlFor="email-recuperacao">E-mail da conta</label>
      <div className={styles.campo}>
        <FaEnvelope aria-hidden="true" />
        <input id="email-recuperacao" type="email" autoComplete="email" placeholder="voce@exemplo.com" />
      </div>

      <Button>Enviar link de recuperação</Button>
      <Link to="/login">Voltar para o login</Link>
    </section>
  )
}
