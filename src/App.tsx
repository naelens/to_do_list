import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { AddTask } from './components/AddTask';

import './global.css';

import styles from './App.module.css'


function App() {
  return (

    <div>
      <Header />

      <div className={styles.mainContent}>
        <div>
          <AddTask />
        </div>

        <main>
          <TaskList />
        </main>
      </div>
    </div>

  )
}

export default App
