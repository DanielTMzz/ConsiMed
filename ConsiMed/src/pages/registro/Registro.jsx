import { useState } from 'react'
import styles from './Registro.module.css'
import Button from '../../components/Button/Button'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";


function Registro() {
  const [emailRegistro, setEmailRegistro] = useState('')
  const [senhaRegistro, setSenhaRegistro] = useState('')
  const [confirmaSenhaRegistro, setConfirmaSenhaRegistro] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)

  function visualizarSenha(obj) {
    setMostrarSenha(!mostrarSenha)
  }


  return (
    <div className={styles.main}>

      <h1>Crie sua conta</h1>
      <div className={styles.campo} id={styles.campoEmail}>
        <FaEnvelope className={styles.icone} aria-hidden="true" />
        <input
          placeholder='Email'
          id='email-registro'
          type="text"
          value={emailRegistro}
          onChange={(e) => setEmailRegistro(e.target.value)}
        />
      </div>

      <div className={styles.campo}>
        <FaLock className={styles.icone} aria-hidden="true" />
        <input
          placeholder='Senha'
          id='senha-registro'
          type={mostrarSenha ? 'text' : 'password'}
          value={senhaRegistro}
          onChange={(e) => setSenhaRegistro(e.target.value)}
        />
      </div>

      <div className={styles.campo}>
        <FaLock className={styles.icone} aria-hidden="true" />
        <input
          placeholder='Confirme sua senha'
          id='senha-registro'
          type={mostrarSenha ? 'text' : 'password'}
          value={confirmaSenhaRegistro}
          onChange={(e) => setConfirmaSenhaRegistro(e.target.value)}
        />
        <button type="button"
          onClick={visualizarSenha}
          id={styles.iconeSenha}>
          {mostrarSenha ? <MdOutlineVisibilityOff className={styles.icone} id={styles.iconeSenha}></MdOutlineVisibilityOff>
            : <MdOutlineVisibility className={styles.icone} id={styles.iconeSenha}></MdOutlineVisibility>
          }

        </button>


      </div>

      <Button className={styles.btnRegistro} >Entrar</Button>

     

     

    </div>



  )

}

export default Registro
