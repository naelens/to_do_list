import { CreateTask } from './CreateTask'
import styles from './TaskList.module.css'

export function TaskList() {
    return(
        <div className={styles.areaTask}>

            <header className={styles.header}>
                <div className={styles.taskCreated}>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </div>

                <div className={styles.taskDone}>
                    <p>Concluídas</p>
                    <span>0</span>
                </div>    
            </header>

            <div className={styles.taskLists}>
            <CreateTask />
                <div className={styles.taskListContent}>
                    <div className={styles.contentImage}>
                        <img src="../src/assets/task.svg" />
                    </div>

                    <div className={styles.contentParagraph}>
                        <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}