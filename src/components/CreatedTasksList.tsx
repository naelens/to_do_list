import styles from './CreatedTasksList.module.css'
import { useState } from 'react';
import { Trash } from 'phosphor-react'
import { Task } from './Form';

interface TasksProps {
    taskList: Task[]
    onRemoveTask: (n: number) => void;
    onTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
    onCompletedTask: () => number;
}

export function CreatedTasksList({ taskList, onRemoveTask, onTaskStatus, onCompletedTask }: TasksProps) {
    
    return(
        <div className={styles.areaTask}>
            <header className={styles.header}>
                <div className={styles.taskCreated}>
                    <p>Adicionada</p>
                    <span>{taskList.length}</span>
                </div>

                <div className={styles.taskDone}>
                    <p>Concluídas</p>
                    <span>{onCompletedTask()}</span>
                </div>
            </header>
            <div className={styles.containerMain}>
                {taskList.length > 0 ? (
                taskList.map((task, id) => (
                    <div key={task.id} className={styles.containerTask}>
                         <div className={styles.createTask}>
                            <div className={styles.description_task}>
                                <input className={styles.checkbox} 
                                    type="checkbox" 
                                    onClick={() => onTaskStatus({ id: task.id, value: !task.isChecked })}
                                />
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
                        <div className={styles.contentParagraph}>
                            <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </div>
                </div>
                )}
            </div>  
        </div>
    )
}