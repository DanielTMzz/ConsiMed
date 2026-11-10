import styles from './Cards.module.css'
import Button from '../Button/Button'
import { FaPhoneAlt, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

function cards({ imagem, nome, especialidade, descricao, contato, endereco, contatarWpp, instagram }) {

    contatarWpp = () => {
        // Lógica para contatar o profissional ou clínica
        alert(`Entrando em contato com ${nome}`);
    }
    return (
        <article className={styles.card}>

            <header>
                <div>{imagem}</div>
                <div>
                    <h3 className={styles.name}>{nome}</h3>
                    <p>{especialidade}</p>
                </div>
            </header>
            <div className={styles.cardBody}>
                <p className={styles.descricao}>{descricao}</p>
                <p><FaMapMarkerAlt /> {endereco}</p>
                <Button className={styles.btn} type="button" onClick={contatarWpp}>Contato via WhatsApp</Button>
                <p><FaPhoneAlt /> {contato}</p>
                <p><FaInstagram /> {instagram}</p>
                <a href="./resultados"><FaMapMarkerAlt /> Ver no mapa</a>
            </div>
        </article>
    )
}

export default cards