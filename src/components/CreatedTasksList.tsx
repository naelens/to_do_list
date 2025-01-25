import styles from './CreatedTasksList.module.css'
import { Trash } from 'phosphor-react'
import { Task } from './Form';

interface TasksProps {
    taskList: Task[]
    onRemoveTask: (n: number) => void;
}

export function CreatedTasksList({ taskList, onRemoveTask }: TasksProps) {
    return(
        <div className={styles.areaTask}>
            <header className={styles.header}>
                <div className={styles.taskCreated}>
                    <p>Adicionada</p>
                    <span>{taskList.length}</span>
                </div>

                <div className={styles.taskDone}>
                    <p>Concluídas</p>
                    <span>0</span>
                </div>
            </header>
            {taskList.length > 0 ? (
                taskList.map((task, id) => (
                    <div key={task.id} className={styles.containerTask}>
                         <div className={styles.createTask}>
                            <div className={styles.description_task}>
                                <input type="radio" checked />
                                <span>{task.text}</span>
                            </div>
    
                            <button 
                                title="Deletar tarefa"
                                onClick={() => onRemoveTask(task.id)}
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