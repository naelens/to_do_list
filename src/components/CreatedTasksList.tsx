import styles from './CreatedTasksList.module.css'
import { Trash } from 'phosphor-react'

interface TasksProps {
    tasks: string[]
}

export function CreatedTasksList({ tasks }: TasksProps) {
    return(
        <div className={styles.areaTask}>
            <header className={styles.header}>
                <div className={styles.taskCreated}>
                    <p>Adicionadas</p>
                    <span>0</span>
                </div>

                <div className={styles.taskDone}>
                    <p>Concluídas</p>
                    <span>0</span>
                </div>
            </header>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <div className={styles.containerTask}>
                         <div className={styles.createTask}>
                            <div className={styles.description_task}>
                                <input type="radio" checked />
                                <span>{task}</span>
                            </div>
    
                            <button 
                                title="Deletar tarefa"
                            >
                                <Trash size={20} />
                            </button>
                        </div>
                    </div>
                ))
            ): (
                <div className={styles.taskLists}>
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
            )}
        </div>
    )
}