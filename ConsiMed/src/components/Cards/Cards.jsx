import styles from './Cards.module.css'
import Button from '../Button/Button'
import { FaPhoneAlt, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

function cards({ imagem, nome, especialidade, descricao, contato, endereco, aoVerAgenda, instagram }) {
    return (
        <article className={styles.card}>

            <header>
                <img className={styles.foto} src={imagem} alt={`Retrato fictício de ${nome}`} width="80" height="80" loading="lazy" />
                <div>
                    <h3 className={styles.name}>{nome}</h3>
                    <p>{especialidade}</p>
                </div>
            </header>
            <div className={styles.cardBody}>
                <p className={styles.descricao}>{descricao}</p>
                <p><FaMapMarkerAlt /> {endereco}</p>
                <Button className={styles.btn} onClick={aoVerAgenda}>Ver agenda</Button>
                <p><FaPhoneAlt /> {contato}</p>
                <p><FaInstagram /> {instagram}</p>
                <a href="./resultados"><FaMapMarkerAlt /> Ver no mapa</a>
            </div>
        </article>
    )
}

export default cards
