import { PlusCircle } from 'phosphor-react'
import styles from './Form.module.css'
import { useState } from 'react'
import { CreatedTasksList } from './CreatedTasksList'

export function Form() {
    const [tasks, setTasks] = useState<string[]>([])
    const [inputValue, setInputValue] = useState("")
    //const [taskCreatedCounter, setTaskCreatedCounter] = useState(0)

    function handleNewTask() {
        event?.preventDefault()
        setTasks([...tasks])
    }
    
    return(
      <div>
        <form className={styles.addTask}>
          <input 
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
            type="text" 
            placeholder='Adicionar uma nova tarefa'
          />
          
          <button 
            type="submit"
            onClick={(event) => {
              event.preventDefault()
              setTasks([inputValue, ...tasks])
              setInputValue("")
            }}
            >Criar
            <PlusCircle size={18}/>
          </button>
        </form>

        <div>
          <CreatedTasksList 
          tasks={tasks} 
          />
        </div>
      </div>
        
    )
}