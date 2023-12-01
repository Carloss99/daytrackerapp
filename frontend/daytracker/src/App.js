import './App.css';
import {Route, Routes} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Main from './components/Main'

const apiURL = 'http://localhost:8000'


function App() {
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    const response = await fetch(apiURL + '/daytracker/')
    const data = await response.json()
    setTasks(data)
  }


  useEffect(() => {
    getTasks()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main tasks={tasks}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
