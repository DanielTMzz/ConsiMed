import styles from './Mural.module.css'
import { FaSearch, FaComments, FaMapMarkerAlt, FaRegQuestionCircle } from 'react-icons/fa'


function Mural() {
    return (
        <div className={styles.mural}>
            <section className={styles.apresentacao}>
                <div>
                    <h2>Encontre o cuidado que faz sentido para você</h2>
                </div>
                <FaSearch aria-hidden="true" />
            </section>

            <div className={styles.conteudo}>
                <section className={styles.orientacoes}>

                    <div className={styles.tituloAssistente}>
                        <FaRegQuestionCircle aria-hidden="true" />
                        <h2>Como encontrar atendimento</h2>
                    </div>


                    <div className={styles.orientacao}>
                        <FaSearch aria-hidden="true" />
                        <div>
                            <h3>Conte o que você procura</h3>
                            <p>Use a pesquisa para buscar por nome, especialidade ou bairro. Combine os filtros para encontrar opções na sua cidade.</p>
                        </div>
                    </div>

                    <div className={styles.orientacao}>
                        <FaMapMarkerAlt aria-hidden="true" />
                        <div>
                            <h3>Conheça as opções</h3>
                            <p>Confira a descrição, o endereço e os contatos de cada profissional nos cards da pesquisa.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.assistente}>
                    <div className={styles.tituloAssistente}>
                        <FaComments aria-hidden="true" />
                        <h2>Como será a busca com o assistente?</h2>
                    </div>
                    <p>Você poderá descrever o atendimento que procura em uma conversa. Veja um exemplo ilustrativo.</p>

                    <div className={styles.exemploConversa}>
                        <div className={styles.mensagemUsuario}>
                            <strong>Você</strong>
                            <p>Quero encontrar um pediatra em Belo Horizonte.</p>
                        </div>
                        <div className={styles.mensagemAssistente}>
                            <strong>Assistente</strong>
                            <p>Vamos buscar profissionais de pediatria em Belo Horizonte. Você pode consultar os endereços e contatos nos resultados.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Mural
