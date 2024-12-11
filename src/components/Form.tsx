import { PlusCircle } from 'phosphor-react'
import styles from './Form.module.css'

export function Form() {
    return(
        <form className={styles.addTask}>
          <input type="text" placeholder='Adicionar uma nova tarefa'
        />
          
          <button type="submit">Criar
            <PlusCircle size={18}/>
          </button>
        </form>
    )
}