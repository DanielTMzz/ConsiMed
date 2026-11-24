import { useState } from 'react'
import styles from './Login.module.css'
import Button from '../../components/Button/Button'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'


function Login() {
  const [emailLogin, setEmailLogin] = useState('')
  const [senhaLogin, setSenhaLogin] = useState('')


  return (
    <div className={styles.main}>

      <h1>Acesse com sua conta</h1>
      <div className={styles.campo}>
        <FaEnvelope className={styles.icone} aria-hidden="true" />
        <input
          placeholder='Email'
          id='email-login'
          type="text"
          value={emailLogin}
          onChange={(e) => setEmailLogin(e.target.value)}
        />
      </div>

      <div className={styles.campo}>
        <FaLock className={styles.icone} aria-hidden="true" />
        <input
          placeholder='Senha'
          id='senha-login'
          type="password"
          value={senhaLogin}
          onChange={(e) => setSenhaLogin(e.target.value)}
        />
      </div>

      <Button className={styles.btnLogin} >Entrar</Button>

      <a href="">Esqueceu sua senha?</a>
      <div>
        <span>Ainda não possui conta? </span>
        <a href="">Crie aqui!</a>
      </div>

      <div className={styles.divisor}>
        <hr />
        <span> Ou</span>
        <hr />
      </div>

      <Button className={styles.btnGoogle}>
        <FcGoogle className={styles.iconeGoogle} aria-hidden="true" />
        <span>Entrar com Google</span>
      </Button>
    </div>



  )

}

export default Login
