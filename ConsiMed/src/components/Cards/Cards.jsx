import styles from './Cards.module.css'
import Button from '../Button/Button'
function cards({ imagem, nome, especialidade, contato, endereco, contatarWpp, instagram }) {

    contatarWpp = () => {
        // Lógica para contatar o profissional ou clínica
        console.log(`Entrando em contato com ${nome}`);
    }
    return (
        <article className={styles.card}>

            <header>
                <div>{imagem}</div>
                <div>
                    <h2>{nome}</h2>
                    <p>{especialidade}</p>
                </div>
            </header>
            <div className={styles.cardBody}>
                <p>{endereco}</p>
                <Button className={styles.btn} type="button" onClick={contatarWpp}>Contato via WhatsApp</Button>
                <p>{contato}</p>
                <p>{instagram}</p>

            </div>
        </article>
    )
}

export default cards