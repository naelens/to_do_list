import { Header } from './components/Header'
import { AreaTask } from './components/AreaTask'
import { AddTask } from './components/Add.Task';

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
          <AreaTask />
        </main>
      </div>
    </div>

  )
}

export default App
