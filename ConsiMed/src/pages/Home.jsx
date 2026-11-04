import { useNavigate } from 'react-router'
import Button from '../components/Button/Button'

function Home() {

  const navigate = useNavigate()
  return (
    <main>
      <h1>Encontre o atendimento que você procura!</h1>
      <h2>A ConsiMed reúne informações de profissionais e clinicas, ajudando você a encontrar onde buscar atendimento.</h2>

      <div>img</div>

      <div className="btn-area">
        <div>
          <h3>Buscar Atendimento</h3>
          <span>Explore profissionais e clinicas por especialidade e encontre informações de contato</span>
          <Button onClick={() => navigate('/triagem')}>
            Iniciar triagem
          </Button>
        </div>


        <div>
          <h3>Iniciar triagem</h3>
          <span>Converse com o nosso agente virtual, responda algumas perguntas e conheça possiveis caminhos de Atendimento</span>
          <Button onClick={() => navigate('/triagem')}>Iniciar Conversa</Button>
        </div>
      </div>

      <div>mais informações</div>
    </main>
  )
}

export default Home
