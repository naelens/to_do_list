import { Trash } from 'phosphor-react'
import styles from './CreateTask.module.css'

export function CreateTask() {
    return (
        <div className={styles.createTask}>
            <div className={styles.description_task}>
                <input type="radio" checked />
                <span>Estudar react</span>
            </div>

            <button title="Deletar tarefa">
                <Trash size={20} />
            </button>
        </div>
    )
}