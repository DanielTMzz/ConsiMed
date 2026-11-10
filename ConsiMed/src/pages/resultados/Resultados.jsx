
import Cards from '../../components/Cards/Cards'
import styles from './resultados.module.css'
import { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";


const profissionais = [
  { 'id': '2', 'imagem': 'img2', 'nome': 'Dra. Maria Souza', 'especialidade': 'Dermatologia', 'descricao': 'Atendimento voltado à saúde da pele, dos cabelos e das unhas, com orientações claras para o cuidado diário.', 'contato': '(21) 9876-5432', 'endereco': 'Rua B, 456 - Botafogo, Rio de Janeiro - RJ', 'instagram': '@dra.maria.souza' },
  { 'id': '3', 'imagem': 'img3', 'nome': 'Dr. Pedro Oliveira', 'especialidade': 'Pediatria', 'descricao': 'Acompanhamento do crescimento e desenvolvimento infantil, com atenção às dúvidas das famílias em cada fase.', 'contato': '(31) 5678-1234', 'endereco': 'Rua C, 789 - Centro, Belo Horizonte - MG', 'instagram': '@dr.pedro.oliveira' },
  { 'id': '4', 'imagem': 'img4', 'nome': 'Dra. Camila Rocha', 'especialidade': 'Cardiologia', 'descricao': 'Atendimento focado na prevenção e no cuidado do coração, com atenção personalizada e linguagem acessível.', 'contato': '(11) 0000-0004', 'endereco': 'Rua das Acácias, 104 - Vila Mariana, São Paulo - SP', 'instagram': '@dra.camila.rocha' },
  { 'id': '5', 'imagem': 'img5', 'nome': 'Dr. Rafael Mendes', 'especialidade': 'Dermatologia', 'descricao': 'Consultas para avaliação de queixas de pele, como acne e manchas, com explicações simples em cada etapa.', 'contato': '(21) 0000-0005', 'endereco': 'Rua do Sol, 205 - Tijuca, Rio de Janeiro - RJ', 'instagram': '@dr.rafael.mendes' },
  { 'id': '6', 'imagem': 'img6', 'nome': 'Dra. Lívia Almeida', 'especialidade': 'Pediatria', 'descricao': 'Consultas de rotina para bebês e crianças, com atenção à alimentação, ao sono e aos hábitos da família.', 'contato': '(31) 0000-0006', 'endereco': 'Rua das Flores, 306 - Savassi, Belo Horizonte - MG', 'instagram': '@dra.livia.almeida' },
  { 'id': '7', 'imagem': 'img7', 'nome': 'Dr. Bruno Martins', 'especialidade': 'Cardiologia', 'descricao': 'Avaliação da saúde cardiovascular com foco no acompanhamento da pressão arterial e dos fatores de risco.', 'contato': '(41) 0000-0007', 'endereco': 'Avenida das Araucárias, 407 - Batel, Curitiba - PR', 'instagram': '@dr.bruno.martins' },
  { 'id': '8', 'imagem': 'img8', 'nome': 'Dra. Helena Ribeiro', 'especialidade': 'Dermatologia', 'descricao': 'Atendimento dermatológico voltado à avaliação de pintas e outras alterações da pele, com orientação sobre proteção solar.', 'contato': '(51) 0000-0008', 'endereco': 'Rua dos Jacarandás, 508 - Moinhos de Vento, Porto Alegre - RS', 'instagram': '@dra.helena.ribeiro' },
  { 'id': '9', 'imagem': 'img9', 'nome': 'Dr. André Lima', 'especialidade': 'Pediatria', 'descricao': 'Acompanhamento da saúde de crianças em idade escolar, com espaço para conversar sobre rotina e bem-estar.', 'contato': '(61) 0000-0009', 'endereco': 'Rua das Palmeiras, 609 - Asa Norte, Brasília - DF', 'instagram': '@dr.andre.lima' },
  { 'id': '10', 'imagem': 'img10', 'nome': 'Dra. Sofia Pereira', 'especialidade': 'Cardiologia', 'descricao': 'Consultas voltadas ao acompanhamento da saúde do coração, com atenção ao histórico familiar e aos hábitos do dia a dia.', 'contato': '(71) 0000-0010', 'endereco': 'Avenida do Parque, 710 - Pituba, Salvador - BA', 'instagram': '@dra.sofia.pereira' },
  { 'id': '11', 'imagem': 'img11', 'nome': 'Dr. Lucas Nunes', 'especialidade': 'Dermatologia', 'descricao': 'Atendimento para queixas de pele, cabelos e couro cabeludo, com escuta atenta e orientações para a rotina.', 'contato': '(81) 0000-0011', 'endereco': 'Rua das Mangueiras, 811 - Boa Viagem, Recife - PE', 'instagram': '@dr.lucas.nunes' },
  { 'id': '12', 'imagem': 'img12', 'nome': 'Dra. Beatriz Costa', 'especialidade': 'Pediatria', 'descricao': 'Acompanhamento pediátrico da primeira infância, com atenção aos marcos do desenvolvimento e às dúvidas dos responsáveis.', 'contato': '(85) 0000-0012', 'endereco': 'Avenida dos Ipês, 912 - Meireles, Fortaleza - CE', 'instagram': '@dra.beatriz.costa' },

]

function Resultados() {
  const [especialidade, setEspecialidade] = useState('')

  const profissionaisFiltrados = profissionais.filter((profissional) => {
    if (especialidade === '') {
      return true
    }

    return profissional.especialidade.toLowerCase() === especialidade
  })

  return (
    <div>
      <div className={styles.MensagemInicial}>
        <h1>Encontre profissionais e clínicas</h1>
        <p>Pesquise por nome, especialidade ou localização e veja informações de contato.</p>
      </div>


      <div className={styles.filtro}>

        <input placeholder='Digite o nome, especialidade ou bairro...' id='filtro-input' type="text" />
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

      </div>

      <br />
      <hr />
      <br />
      <p>resultados</p>

      <div className={styles.areaCards} >

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

          />
        ))}
      </div>
    </div>
  )
}

export default Resultados
