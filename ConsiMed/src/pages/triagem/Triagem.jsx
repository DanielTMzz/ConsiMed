import { FaComments, FaPaperPlane } from 'react-icons/fa'
import styles from './Triagem.module.css'

// Altere esta lista para montar a conversa de exemplo.
const mensagens = [
  { id: 1, autor: 'ia', texto: 'Olá! Sou o assistente do ConsiMed. Nesta conversa de exemplo, vou ajudar você a agendar uma consulta. Qual especialidade e cidade você procura?' },
  { id: 2, autor: 'usuario', texto: 'Quero agendar uma consulta com um pediatra em Belo Horizonte, na próxima quarta-feira à tarde.' },
  { id: 3, autor: 'ia', texto: 'Encontrei a Dra. Lívia Almeida, pediatra na Savassi. Para quarta-feira, os horários disponíveis neste exemplo são 14h e 15h30. Qual você prefere?' },
  { id: 4, autor: 'usuario', texto: 'Pode ser às 15h30.' },
  { id: 5, autor: 'ia', texto: 'Vamos confirmar: consulta de Pediatria com a Dra. Lívia Almeida, quarta-feira às 15h30, na Rua das Flores, 306 - Savassi, Belo Horizonte. Posso agendar?' },
  { id: 6, autor: 'usuario', texto: 'Sim, pode confirmar.' },
  { id: 7, autor: 'ia', texto: 'Pronto! O agendamento foi confirmado.' }
]

function Triagem() {
  return (
    <div className={styles.triagem}>
      <div className={styles.apresentacao}>
        <h1>Como podemos ajudar?</h1>
        <p>Um espaço para conversar e encontrar caminhos para o seu atendimento.</p>
      </div>

      <section className={styles.chat} aria-label="Chat demonstrativo do ConsiMed">
        <div className={styles.cabecalhoChat}>
          <FaComments className={styles.iconeChat} aria-hidden="true" />
          <div>
            <h2>Assistente ConsiMed</h2>
          </div>
        </div>

        <div className={styles.listaMensagens} role="log" aria-label="Mensagens de exemplo" tabIndex={0}>
          {mensagens.map((mensagem) => (
            <div
              key={mensagem.id}
              className={`${styles.mensagem} ${mensagem.autor === 'usuario' ? styles.mensagemUsuario : styles.mensagemIa}`}
            >
              <span className={styles.autor}>{mensagem.autor === 'usuario' ? 'Você' : 'Assistente'}</span>
              <p>{mensagem.texto}</p>
            </div>
          ))}
        </div>

        <div className={styles.areaEnvio}>
          <label htmlFor="mensagem-chat">Sua mensagem</label>
          <div className={styles.campoMensagem}>
            <input id="mensagem-chat" type="text" placeholder="Digite sua mensagem..." />
            <button type="button" disabled>
              <FaPaperPlane aria-hidden="true" />
              Enviar
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Triagem
