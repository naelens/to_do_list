import { Header } from './components/Header'
import { AreaTask } from './components/AreaTask'
import { AddTask } from './components/Add.Task';

import './global.css';

import styles from './App.module.css'


function App() {
  return (

    <div>
      <Header />

      <AddTask />

      <main>
        <AreaTask />
      </main>
    </div>
  )
}

export default App
