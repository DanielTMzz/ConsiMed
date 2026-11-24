import { useState } from 'react'
import { FaComments, FaPaperPlane } from 'react-icons/fa'
import styles from './Triagem.module.css'


// Altere esta lista para montar a conversa de exemplo.
const listaMensagens = [
  { id: 1, autor: 'ia', texto: 'Olá! Sou o assistente do ConsiMed. Nesta conversa de exemplo, vou ajudar você a agendar uma consulta. Qual especialidade e cidade você procura?' },
  { id: 2, autor: 'usuario', texto: 'Quero agendar uma consulta com um pediatra em Belo Horizonte, na próxima quarta-feira à tarde.' },
  { id: 3, autor: 'ia', texto: 'Encontrei a Dra. Lívia Almeida, pediatra na Savassi. Para quarta-feira, os horários disponíveis neste exemplo são 14h e 15h30. Qual você prefere?' },
  { id: 4, autor: 'usuario', texto: 'Pode ser às 15h30.' },
  { id: 5, autor: 'ia', texto: 'Vamos confirmar: consulta de Pediatria com a Dra. Lívia Almeida, quarta-feira às 15h30, na Rua das Flores, 306 - Savassi, Belo Horizonte. Posso agendar?' },
  { id: 6, autor: 'usuario', texto: 'Sim, pode confirmar.' },
  { id: 7, autor: 'ia', texto: 'Pronto! O agendamento foi confirmado.' }
]



function rolarParaUltimaMensagem(balao) {
  if (!balao) return

  const lista = balao.parentElement
  lista.scrollTop = lista.scrollHeight
}

function Triagem() {
  const [mensagens, setMensagens] = useState(listaMensagens)
  const [rascunho, setRascunho] = useState('')


  function adicionarMensagem(evento) {


    evento.preventDefault()

    const texto = rascunho.trim()
    if (!texto) return

    setMensagens((anteriores) => [
      ...anteriores,
      { id: anteriores.length + 1, autor: 'usuario', texto },
    ])

    setRascunho('')
  }
  return (
    <div className={styles.triagem}>


      <section className={styles.chat}>
        <div className={styles.cabecalhoChat}>
          <FaComments className={styles.iconeChat} aria-hidden="true" />
          <div>
            <h2>Assistente ConsiMed</h2>
          </div>
        </div>

        <div className={styles.listaMensagens} role="log" >
          {mensagens.map((mensagem, indice) => (
            <div
              key={mensagem.id}
              ref={indice === mensagens.length - 1 ? rolarParaUltimaMensagem : null}
              className={`${styles.mensagem} ${mensagem.autor === 'usuario' ? styles.mensagemUsuario : styles.mensagemIa}`}
            >
              <span className={styles.autor}>{mensagem.autor === 'usuario' ? 'Você' : 'Assistente'}</span>
              <p>{mensagem.texto}</p>
            </div>
          ))}
        </div>

        <form className={styles.areaEnvio} onSubmit={adicionarMensagem}>
          <label htmlFor="mensagem-chat">Sua mensagem</label>
          <div className={styles.campoMensagem}>
            <input
              id="mensagem-chat" type="text"
              placeholder="Digite sua mensagem..." value={rascunho}
              autoComplete="off"
              onChange={(evento) => setRascunho(evento.target.value)} />
            <button type="submit">
              <FaPaperPlane aria-hidden="true" />
              Enviar
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Triagem
