
import Cards from '../../components/Cards/Cards'
import styles from './resultados.module.css'
import { useState } from 'react'
import Mural from '../../components/Mural/Mural'
import Agenda from '../../components/Agenda/Agenda'

// Datas futuras para a demonstração, calculadas quando a página é carregada.
function criarAgenda(diasAFrente, horarios) {
  return [diasAFrente, diasAFrente + 1, diasAFrente + 3].map((dias) => {
    const data = new Date()
    data.setDate(data.getDate() + dias)
    const ano = data.getFullYear()
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const dia = String(data.getDate()).padStart(2, '0')
    return { data: `${ano}-${mes}-${dia}`, horarios }
  })
}


const profissionais = [
  { 'id': '2', 'imagem': 'img2', 'nome': 'Dra. Maria Souza', 'especialidade': 'Dermatologia', 'descricao': 'Atendimento voltado à saúde da pele, dos cabelos e das unhas, com orientações claras para o cuidado diário.', 'contato': '(21) 9876-5432', 'endereco': 'Rua B, 456 - Botafogo, Rio de Janeiro - RJ', 'instagram': '@dra.maria.souza', 'horariosDisponiveis': criarAgenda(1, ['09:00', '10:00', '14:30']) },
  { 'id': '3', 'imagem': 'img3', 'nome': 'Dr. Pedro Oliveira', 'especialidade': 'Pediatria', 'descricao': 'Acompanhamento do crescimento e desenvolvimento infantil, com atenção às dúvidas das famílias em cada fase.', 'contato': '(31) 5678-1234', 'endereco': 'Rua C, 789 - Centro, Belo Horizonte - MG', 'instagram': '@dr.pedro.oliveira', 'horariosDisponiveis': criarAgenda(2, ['08:30', '11:00', '15:00']) },
  { 'id': '4', 'imagem': 'img4', 'nome': 'Dra. Camila Rocha', 'especialidade': 'Cardiologia', 'descricao': 'Atendimento focado na prevenção e no cuidado do coração, com atenção personalizada e linguagem acessível.', 'contato': '(11) 0000-0004', 'endereco': 'Rua das Acácias, 104 - Vila Mariana, São Paulo - SP', 'instagram': '@dra.camila.rocha', 'horariosDisponiveis': criarAgenda(3, ['09:30', '13:00', '16:00']) },
  { 'id': '5', 'imagem': 'img5', 'nome': 'Dr. Rafael Mendes', 'especialidade': 'Dermatologia', 'descricao': 'Consultas para avaliação de queixas de pele, como acne e manchas, com explicações simples em cada etapa.', 'contato': '(21) 0000-0005', 'endereco': 'Rua do Sol, 205 - Tijuca, Rio de Janeiro - RJ', 'instagram': '@dr.rafael.mendes', 'horariosDisponiveis': criarAgenda(1, ['09:00', '10:00', '14:30']) },
  { 'id': '6', 'imagem': 'img6', 'nome': 'Dra. Lívia Almeida', 'especialidade': 'Pediatria', 'descricao': 'Consultas de rotina para bebês e crianças, com atenção à alimentação, ao sono e aos hábitos da família.', 'contato': '(31) 0000-0006', 'endereco': 'Rua das Flores, 306 - Savassi, Belo Horizonte - MG', 'instagram': '@dra.livia.almeida', 'horariosDisponiveis': criarAgenda(2, ['08:30', '11:00', '15:00']) },
  { 'id': '7', 'imagem': 'img7', 'nome': 'Dr. Bruno Martins', 'especialidade': 'Cardiologia', 'descricao': 'Avaliação da saúde cardiovascular com foco no acompanhamento da pressão arterial e dos fatores de risco.', 'contato': '(41) 0000-0007', 'endereco': 'Avenida das Araucárias, 407 - Batel, Curitiba - PR', 'instagram': '@dr.bruno.martins', 'horariosDisponiveis': criarAgenda(3, ['09:30', '13:00', '16:00']) },
  { 'id': '8', 'imagem': 'img8', 'nome': 'Dra. Helena Ribeiro', 'especialidade': 'Dermatologia', 'descricao': 'Atendimento dermatológico voltado à avaliação de pintas e outras alterações da pele, com orientação sobre proteção solar.', 'contato': '(51) 0000-0008', 'endereco': 'Rua dos Jacarandás, 508 - Moinhos de Vento, Porto Alegre - RS', 'instagram': '@dra.helena.ribeiro', 'horariosDisponiveis': criarAgenda(1, ['09:00', '10:00', '14:30']) },
  { 'id': '9', 'imagem': 'img9', 'nome': 'Dr. André Lima', 'especialidade': 'Pediatria', 'descricao': 'Acompanhamento da saúde de crianças em idade escolar, com espaço para conversar sobre rotina e bem-estar.', 'contato': '(61) 0000-0009', 'endereco': 'Rua das Palmeiras, 609 - Asa Norte, Brasília - DF', 'instagram': '@dr.andre.lima', 'horariosDisponiveis': criarAgenda(2, ['08:30', '11:00', '15:00']) },
  { 'id': '10', 'imagem': 'img10', 'nome': 'Dra. Sofia Pereira', 'especialidade': 'Cardiologia', 'descricao': 'Consultas voltadas ao acompanhamento da saúde do coração, com atenção ao histórico familiar e aos hábitos do dia a dia.', 'contato': '(71) 0000-0010', 'endereco': 'Avenida do Parque, 710 - Pituba, Salvador - BA', 'instagram': '@dra.sofia.pereira', 'horariosDisponiveis': criarAgenda(3, ['09:30', '13:00', '16:00']) },
  { 'id': '11', 'imagem': 'img11', 'nome': 'Dr. Lucas Nunes', 'especialidade': 'Dermatologia', 'descricao': 'Atendimento para queixas de pele, cabelos e couro cabeludo, com escuta atenta e orientações para a rotina.', 'contato': '(81) 0000-0011', 'endereco': 'Rua das Mangueiras, 811 - Boa Viagem, Recife - PE', 'instagram': '@dr.lucas.nunes', 'horariosDisponiveis': criarAgenda(1, ['09:00', '10:00', '14:30']) },
  { 'id': '12', 'imagem': 'img12', 'nome': 'Dra. Beatriz Costa', 'especialidade': 'Pediatria', 'descricao': 'Acompanhamento pediátrico da primeira infância, com atenção aos marcos do desenvolvimento e às dúvidas dos responsáveis.', 'contato': '(85) 0000-0012', 'endereco': 'Avenida dos Ipês, 912 - Meireles, Fortaleza - CE', 'instagram': '@dra.beatriz.costa', 'horariosDisponiveis': criarAgenda(2, ['08:30', '11:00', '15:00']) },

]

function Resultados() {
  const [especialidade, setEspecialidade] = useState('')
  const [cidade, setCidade] = useState('')
  const [termoBusca, setTermoBusca] = useState('')
  const [pesquisaRealizada, setPesquisaRealizada] = useState(false)
  const [profissionalSelecionado, setProfissionalSelecionado] = useState(null)
  const [horariosReservados, setHorariosReservados] = useState([])

  function confirmarAgendamento(reserva) {
    setHorariosReservados((reservas) => {
      if (reservas.includes(reserva)) {
        return reservas
      }
      return [...reservas, reserva]
    })
  }

  function pesquisar(evento) {
    evento.preventDefault()
    setPesquisaRealizada(true)
  }

  function limparPesquisa() {
    setEspecialidade('')
    setCidade('')
    setTermoBusca('')
    setPesquisaRealizada(false)
  }

  const profissionaisFiltrados = profissionais.filter((profissional) => {
    if (especialidade !== '' && profissional.especialidade.toLowerCase() !== especialidade) {
      return false
    }

    if (cidade !== '' && !profissional.endereco.toLowerCase().includes(cidade.toLowerCase())) {
      return false
    }

    const textoProfissional = `${profissional.nome} ${profissional.especialidade} ${profissional.endereco}`.toLowerCase()
    return textoProfissional.includes(termoBusca.trim().toLowerCase())
  })

  return (
    <div>
      <div className={styles.MensagemInicial}>
        <h1>Encontre profissionais e clínicas</h1>
        <p>Pesquise por nome, especialidade ou localização e veja informações de contato.</p>
      </div>


      <form className={styles.filtro} onSubmit={pesquisar} onReset={limparPesquisa}>


        <div className={styles.selecionarEspecialidade}>
          <label htmlFor="especialidade">Especialidade:</label>
          <select
            id="especialidade"
            name="especialidade"
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
          >
            <option value="">Todas as especialidades</option>
            <option value="cardiologia">Cardiologia</option>
            <option value="dermatologia">Dermatologia</option>
            <option value="pediatria">Pediatria</option>
            <option value="nada">nada</option>
          </select>
        </div>

        <div className={styles.selecionarEspecialidade}>
          <label htmlFor="cidade">Cidade:</label>
          <select
            id="cidade"
            name="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          >
            <option value="">Todas as cidades</option>
            <option value="Teresópolis">Teresópolis</option>
            <option value="friburgo">friburgo</option>
            <option value="petropolis">petropolis</option>
            <option value="Rio de janeiro">Rio de janeiro</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Belo Horizonte">Belo Horizonte</option>
            <option value="Curitiba">Curitiba</option>
            <option value="Porto Alegre">Porto Alegre</option>
            <option value="Brasília">Brasília</option>
            <option value="Salvador">Salvador</option>
            <option value="Recife">Recife</option>
            <option value="Fortaleza">Fortaleza</option>
            <option value="nenhuma">nenhuma</option>
          </select>
        </div>

        <input
          placeholder='Digite o nome, especialidade ou bairro...'
          id='filtro-input'
          type="text"
          aria-label="Nome, especialidade ou bairro"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
        <button className={styles.botaoPesquisar} type="submit">Pesquisar</button>
        {pesquisaRealizada && (
          <button className={styles.botaoLimpar} type="reset">Limpar</button>
        )}

      </form>

      {pesquisaRealizada ? (
        <div className={styles.areaCards} aria-live="polite">
          {profissionaisFiltrados.length === 0 && (
            <p>Nenhum profissional encontrado.</p>
          )}
          {profissionaisFiltrados.map((p) => (
            <Cards
              key={p.id}
              imagem={p.imagem}
              nome={p.nome}
              especialidade={p.especialidade}
              descricao={p.descricao}
              contato={p.contato}
              endereco={p.endereco}
              instagram={p.instagram}
              aoVerAgenda={() => setProfissionalSelecionado(p)}
            />
          ))}
        </div>
      ) : (
        <Mural />
      )}
      {profissionalSelecionado && (
        <Agenda
          key={profissionalSelecionado.id}
          profissional={profissionalSelecionado}
          horariosReservados={horariosReservados}
          aoFechar={() => setProfissionalSelecionado(null)}
          aoConfirmar={confirmarAgendamento}
        />
      )}
    </div>
  )
}

export default Resultados
