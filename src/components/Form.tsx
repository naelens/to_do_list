import { PlusCircle } from 'phosphor-react'
import styles from './Form.module.css'
import { useState } from 'react'
import { CreatedTasksList } from './CreatedTasksList'

interface TasksProps {
  taskList: string[];
}

export function Form({ taskList }: TasksProps) {
    const [tasks, setTasks] = useState<string[]>([])
    const [inputValue, setInputValue] = useState("")
    const [taskCreatedCounter, setTaskCreatedCounter] = useState<number>(0)

    function handleNewTask() {
        event?.preventDefault()
        setTasks([...tasks])
        setTaskCreatedCounter(taskCreatedCounter + 1)
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
          taskList={tasks} 
          />
        </div>
      </div>
        
    )
}