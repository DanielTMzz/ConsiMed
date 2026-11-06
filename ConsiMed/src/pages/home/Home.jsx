import { useNavigate } from 'react-router'
import { FiArrowRight, FiCheckCircle, FiFilter, FiMapPin, FiMessageCircle, FiMessageSquare, FiSearch, FiUsers } from 'react-icons/fi'
import Button from '../../components/Button/Button'
import imagemEquipe from '../../assets/equipe-saude.svg'
import styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles.paginaInicial}>
      <section className={styles.apresentacao} aria-labelledby="home-title">
        <div className={styles.textoApresentacao}>
          <h1 id="home-title">Encontre o atendimento que você procura</h1>
          <p>O ConsiMed reúne informações de profissionais e clínicas para ajudar você a encontrar o cuidado ideal, de forma simples e rápida.</p>
        </div>
        <div className={styles.ilustracao}>
          <img src={imagemEquipe} alt="" width="520" height="300" />
          <span>Mais saúde<br />para o seu dia</span>
        </div>
      </section>

      <div className={styles.opcoesAtendimento}>
        <section className={styles.cartaoAtendimento} aria-labelledby="search-title">
          <div className={styles.cabecalhoCartao}>
            <div className={styles.iconeCartao}><FiSearch aria-hidden="true" /></div>
            <div>
              <h2 id="search-title">Buscar atendimento</h2>
              <p>Explore profissionais e clínicas por especialidade e encontre informações de contato.</p>
            </div>
          </div>
          <Button className={styles.botaoAcao} onClick={() => navigate('/resultados')}>
            <FiArrowRight aria-hidden="true" /> Explorar agora
          </Button>
          <ul>
            <li><FiUsers aria-hidden="true" /> Veja profissionais e clínicas</li>
            <li><FiFilter aria-hidden="true" /> Filtre por especialidade</li>
            <li><FiMapPin aria-hidden="true" /> Encontre informações de contato</li>
          </ul>
        </section>

        <section className={`${styles.cartaoAtendimento} ${styles.cartaoTriagem}`} aria-labelledby="triage-title">
          <div className={styles.cabecalhoCartao}>
            <div className={styles.iconeCartao}><FiMessageSquare aria-hidden="true" /></div>
            <div>
              <h2 id="triage-title">Iniciar triagem</h2>
              <p>Converse com o nosso assistente demonstrativo e conheça possíveis caminhos de atendimento.</p>
            </div>
          </div>
          <Button className={styles.botaoAcao} onClick={() => navigate('/triagem')}>
            <FiMessageCircle aria-hidden="true" /> Iniciar conversa
          </Button>
          <ul>
            <li><FiCheckCircle aria-hidden="true" /> Responda algumas perguntas</li>
            <li><FiMessageSquare aria-hidden="true" /> Receba orientação demonstrativa</li>
            <li><FiUsers aria-hidden="true" /> Veja opções de profissionais e clínicas</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

