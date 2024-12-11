import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { Form } from './components/Form';
import './global.css';
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.mainContent}>
        <Form />
       
        <main>
          <TaskList />
        </main>
      </div>
    </div>
  )
}
