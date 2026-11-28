import { useState } from 'react'
import styles from './Conta.module.css'

const campos = [
  { nome: 'nome', rotulo: 'Nome' },
  { nome: 'email', rotulo: 'Email' },
  { nome: 'cidade', rotulo: 'Cidade (opcional)' },
  { nome: 'estado', rotulo: 'Estado (opcional)' }
]

const perfilInicial = { nome: 'Ana Maria', email: 'ana@example.com', cidade: '', estado: '' }

export default function Conta() {
  const [perfil, setPerfil] = useState(perfilInicial)
  const [editando, setEditando] = useState(false)
  const [aviso, setAviso] = useState('')

  function salvar(evento) {
    evento.preventDefault()
    const camposDoFormulario = evento.currentTarget.elements
    setPerfil({
      nome: camposDoFormulario.nome.value.trim(),
      email: camposDoFormulario.email.value.trim(),
      cidade: camposDoFormulario.cidade.value.trim(),
      estado: camposDoFormulario.estado.value.trim()
    })
    setEditando(false)
    setAviso('Perfil atualizado.')
  }

  return (
    <section className={styles.conta}>
      <h1>Minha conta</h1>
      <div className={styles.conteudo}>
        <aside className={styles.resumo}>
          <span className={styles.avatar} aria-hidden="true">{perfil.nome.trim().split(/\s+/).slice(0, 2).map(parte => parte[0]).join('').toUpperCase()}</span>
          <div>
            <h2>{perfil.nome}</h2>
            <p>{perfil.email}</p>
          </div>
        </aside>
        {editando ? (
          <form className={styles.painel} onSubmit={salvar}>
            <h2>Editar perfil</h2>
            <div className={styles.campos}>
              {campos.map(({ nome, rotulo }) => (
                <label className={styles.campo} key={nome}>
                  {rotulo}
                  <input name={nome} defaultValue={perfil[nome]} type={nome === 'email' ? 'email' : 'text'}
                    pattern={nome === 'nome' ? '.*\\S.*' : undefined}
                    required={nome === 'nome' || nome === 'email'} />
                </label>
              ))}
            </div>
            <div className={styles.acoes}>
              <button type="submit">Salvar alterações</button>
              <button className={styles.cancelar} type="button" onClick={() => { setEditando(false); setAviso('') }}>Cancelar</button>
            </div>
          </form>
        ) : (
          <div className={styles.painel}>
            <h2>Dados do perfil</h2>
            <dl className={styles.dados}>
              {campos.map(({ nome, rotulo }) => (
                <div key={nome}>
                  <dt>{rotulo}</dt>
                  <dd>{perfil[nome] || 'Não informado'}</dd>
                </div>
              ))}
            </dl>
            <button type="button" onClick={() => { setAviso(''); setEditando(true) }}>Editar perfil</button>
          </div>
        )}
      </div>
      <p role="status">{aviso}</p>
    </section>
  )
}
