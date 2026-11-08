
import Cards from '../../components/Cards/Cards'
import styles from './resultados.module.css'
import { useState } from 'react'

const profissionais = [
  { 'id': '2', 'imagem': 'img2', 'nome': 'Dra. Maria Souza', 'especialidade': 'Dermatologia', 'contato': '(21) 9876-5432', 'endereco': 'Rua B, 456, Rio de Janeiro - RJ', 'instagram': '@dra.maria.souza' },
  { 'id': '3', 'imagem': 'img3', 'nome': 'Dr. Pedro Oliveira', 'especialidade': 'Pediatria', 'contato': '(31) 5678-1234', 'endereco': 'Rua C, 789, Belo Horizonte - MG', 'instagram': '@dr.pedro.oliveira' },
  { 'id': '4', 'imagem': 'img4', 'nome': 'Dra. Camila Rocha', 'especialidade': 'Cardiologia', 'contato': '(11) 0000-0004', 'endereco': 'Rua das Acácias, 104, São Paulo - SP', 'instagram': '@dra.camila.rocha' },
  { 'id': '5', 'imagem': 'img5', 'nome': 'Dr. Rafael Mendes', 'especialidade': 'Dermatologia', 'contato': '(21) 0000-0005', 'endereco': 'Rua do Sol, 205, Rio de Janeiro - RJ', 'instagram': '@dr.rafael.mendes' },
  { 'id': '6', 'imagem': 'img6', 'nome': 'Dra. Lívia Almeida', 'especialidade': 'Pediatria', 'contato': '(31) 0000-0006', 'endereco': 'Rua das Flores, 306, Belo Horizonte - MG', 'instagram': '@dra.livia.almeida' },
  { 'id': '7', 'imagem': 'img7', 'nome': 'Dr. Bruno Martins', 'especialidade': 'Cardiologia', 'contato': '(41) 0000-0007', 'endereco': 'Avenida das Araucárias, 407, Curitiba - PR', 'instagram': '@dr.bruno.martins' },
  { 'id': '8', 'imagem': 'img8', 'nome': 'Dra. Helena Ribeiro', 'especialidade': 'Dermatologia', 'contato': '(51) 0000-0008', 'endereco': 'Rua dos Jacarandás, 508, Porto Alegre - RS', 'instagram': '@dra.helena.ribeiro' },
  { 'id': '9', 'imagem': 'img9', 'nome': 'Dr. André Lima', 'especialidade': 'Pediatria', 'contato': '(61) 0000-0009', 'endereco': 'Rua das Palmeiras, 609, Brasília - DF', 'instagram': '@dr.andre.lima' },
  { 'id': '10', 'imagem': 'img10', 'nome': 'Dra. Sofia Pereira', 'especialidade': 'Cardiologia', 'contato': '(71) 0000-0010', 'endereco': 'Avenida do Parque, 710, Salvador - BA', 'instagram': '@dra.sofia.pereira' },
  { 'id': '11', 'imagem': 'img11', 'nome': 'Dr. Lucas Nunes', 'especialidade': 'Dermatologia', 'contato': '(81) 0000-0011', 'endereco': 'Rua das Mangueiras, 811, Recife - PE', 'instagram': '@dr.lucas.nunes' },
  { 'id': '12', 'imagem': 'img12', 'nome': 'Dra. Beatriz Costa', 'especialidade': 'Pediatria', 'contato': '(85) 0000-0012', 'endereco': 'Avenida dos Ipês, 912, Fortaleza - CE', 'instagram': '@dra.beatriz.costa' },

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
