import { PlusCircle } from 'phosphor-react';
import { Header } from './components/Header';

import './global.css';

import styles from './App.module.css'


function App() {
  return (

    <div>
      <Header />

      <div className={styles.addTask}>
          <input type="text" placeholder='Adicionar uma nova tarefa'/>
          
          <button type="submit">Criar
            <PlusCircle size={18}/>
          </button>
      </div>
    </div>
    

 
  )
}

export default App
