import { PlusCircle } from 'phosphor-react'
import styles from './AddTask.module.css'

export function AddTask() {
    return(
        <div className={styles.addTask}>
          <input type="text" placeholder='Adicionar uma nova tarefa'/>
          
          <button type="submit">Criar
            <PlusCircle size={18}/>
          </button>
      </div>
    )
}