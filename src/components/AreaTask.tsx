import styles from './AreaTask.module.css'

export function AreaTask() {
    return(
        <div className={styles.areaTask}>

            <header className={styles.header}>
                <span className={styles.taskCreated}>Tarefas criadas</span>
                <span className={styles.taskDone}>Concluídas</span>
            </header>
            
        </div>
    )
}