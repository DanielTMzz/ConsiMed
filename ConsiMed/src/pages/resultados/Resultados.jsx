
import styles from './Resultados.module.css'
function Resultados() {
  return (
    <div>
      <div className={styles.MensagemInicial}>
        <h1>Encontre profissionais e clínicas</h1>
        <p>Pesquise por nome, especialidade ou localização e veja informações de contato.</p>
      </div>

      <div className={styles.filtros}>
        <div className={styles.filtro}>
          
          <input placeholder='Digite o nome, especialidade ou bairro...' id='filtro-input' type="text" />
          <label htmlFor="especialidade">Especialidade:</label>
          <select id="especialidade" name="especialidade">
            <option value="">Selecione</option>
            <option value="cardiologia">Cardiologia</option>
            <option value="dermatologia">Dermatologia</option>
            <option value="pediatria">Pediatria</option>
          </select>
        </div>

      </div>
    </div>
  )
}

export default Resultados
