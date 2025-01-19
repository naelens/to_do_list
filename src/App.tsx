import { Header } from './components/Header'
import { Form } from './components/Form';
import './global.css';
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.mainContent}>
        <Form />
      </div>
    </div>
  )
}
