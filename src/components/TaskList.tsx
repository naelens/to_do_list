import styles from './TaskList.module.css'

export function TaskList() {
    return(
        <div className={styles.areaTask}>

            <header className={styles.header}>
                <span className={styles.taskCreated}>Tarefas criadas</span>
                <span className={styles.taskDone}>Concluídas</span>
            </header>

            <div className={styles.spaceTask}>

                <div>
                    <img src="../src/assets/task.svg" />
                </div>
                

                <div className={styles.contentText}>
                    <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
                
            </div>

        </div>
    )
}