import { PlusCircle } from 'phosphor-react'
import styles from './Form.module.css'
import { useState } from 'react'
import { CreatedTasksList } from './CreatedTasksList'

export interface Task {
  id: number;
  text: string;
  isChecked: boolean;
}

interface TasksProps {
  taskList: Task[];
}

export function Form({ taskList }: TasksProps) {
    const [tasks, setTasks] = useState<Task[]>([])
    const [inputValue, setInputValue] = useState("")

    function handleNewTask() {
        event?.preventDefault()
        setTasks([...tasks])
    }

    function handleRemoveTask(id: number) {
      const filteredTasks = tasks.filter((task) => task.id !== id)
      setTasks(filteredTasks)
    }

    function handleTaskStatus({ id, value}: {id: number; value: boolean}){
      const taskStatus = tasks.map((task) => {
        if(task.id === id) {
          return {...task, isChecked: value}
        }
        return {...task}
      })
      setTasks(taskStatus)
    }

    function countCompletedTask() {
      return tasks.filter(task => task.isChecked).length;
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
              setTasks([{
                id: tasks.length,
                text: inputValue,
                isChecked: false,
              },...tasks])
              setInputValue("")
            }}
            >Criar
            <PlusCircle size={18}/>
          </button>
        </form>

        <div>
          <CreatedTasksList 
          taskList={tasks}
          onRemoveTask={handleRemoveTask}
          onTaskStatus={handleTaskStatus}
          onCompletedTask={countCompletedTask}
          />
        </div>
      </div>
        
    )
}