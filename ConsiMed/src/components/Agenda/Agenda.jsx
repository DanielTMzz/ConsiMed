import { useEffect, useRef, useState } from 'react'
import styles from './Agenda.module.css'

function Agenda({ profissional, horariosReservados, aoFechar, aoConfirmar }) {
    const modal = useRef(null)
    const [dataSelecionada, setDataSelecionada] = useState('')
    const [horarioSelecionado, setHorarioSelecionado] = useState('')
    const [confirmado, setConfirmado] = useState(false)

    useEffect(() => {
        const dialogo = modal.current
        dialogo.showModal()
        return () => dialogo.close()
    }, [])

    const agenda = profissional.horariosDisponiveis || []
    const diaSelecionado = agenda.find((dia) => dia.data === dataSelecionada)
    const horarios = diaSelecionado?.horarios || []
    const horariosLivres = horarios.filter((horario) => {
        const reserva = `${profissional.id}|${dataSelecionada}|${horario}`
        return !horariosReservados.includes(reserva)
    })

    function escolherDia(data) {
        setDataSelecionada(data)
        setHorarioSelecionado('')
    }

    function confirmar(evento) {
        evento.preventDefault()
        const reserva = `${profissional.id}|${dataSelecionada}|${horarioSelecionado}`
        if (!dataSelecionada || !horarioSelecionado || horariosReservados.includes(reserva)) {
            return
        }
        aoConfirmar(reserva)
        setConfirmado(true)
    }

    function formatarData(data) {
        return new Date(`${data}T12:00:00`).toLocaleDateString('pt-BR', {
            weekday: 'short', day: '2-digit', month: '2-digit'
        })
    }

    return (
        <dialog ref={modal} className={styles.modal} aria-labelledby="titulo-agenda" onCancel={aoFechar}>
            <div className={styles.cabecalho}>
                <div>
                    <h2 id="titulo-agenda">Agenda de atendimento</h2>
                    <p>{profissional.nome}</p>
                </div>
                <button className={styles.botaoFechar} type="button" onClick={aoFechar}>×</button>
            </div>

            {confirmado ? (
                <div className={styles.confirmacao} role="status">
                    <h3>Agendamento demonstrativo confirmado</h3>
                    <p>{formatarData(dataSelecionada)} às {horarioSelecionado}</p>
                    <p>{profissional.endereco}</p>
                    <p>Esta simulação utiliza horários fictícios. Nenhuma consulta real foi marcada.</p>
                    <button className={styles.botaoConfirmar} type="button" onClick={aoFechar}>Concluir</button>
                </div>
            ) : (
                <form onSubmit={confirmar}>
                    <p>Escolha um dia e um horário. Agenda demonstrativa com disponibilidade fictícia.</p>
                    <fieldset className={styles.campo}>
                        <legend>Dias disponíveis</legend>
                        <div className={styles.opcoes}>
                            {agenda.map((dia) => (
                                <label className={styles.opcao} key={dia.data}>
                                    <input type="radio" name="dia" value={dia.data} checked={dataSelecionada === dia.data} onChange={() => escolherDia(dia.data)} required />
                                    <span>{formatarData(dia.data)}</span>
                                </label>
                            ))}
                        </div>
                        {agenda.length === 0 && <p>Este profissional está sem horários disponíveis.</p>}
                    </fieldset>

                    {dataSelecionada && (
                        <fieldset className={styles.campo}>
                            <legend>Horários disponíveis</legend>
                            <div className={styles.opcoes}>
                                {horariosLivres.map((horario) => (
                                    <label className={styles.opcao} key={horario}>
                                        <input type="radio" name="horario" value={horario} checked={horarioSelecionado === horario} onChange={() => setHorarioSelecionado(horario)} required />
                                        <span>{horario}</span>
                                    </label>
                                ))}
                            </div>
                            {horariosLivres.length === 0 && <p>Este dia está sem horários disponíveis. Escolha outro dia.</p>}
                        </fieldset>
                    )}

                    <div className={styles.acoes}>
                        <button className={styles.botaoCancelar} type="button" onClick={aoFechar}>Cancelar</button>
                        <button className={styles.botaoConfirmar} type="submit" disabled={!dataSelecionada || !horarioSelecionado}>Confirmar horário</button>
                    </div>
                </form>
            )}
        </dialog>
    )
}

export default Agenda
