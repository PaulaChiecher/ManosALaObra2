import React, { useState, useEffect } from 'react'
import Title from '../Atoms/Title'
import Paragraph from '../Atoms/Paragraph'
import FormNewTask from '../Molecules/FormNewTask'
import ListTask from '../Templates/ListTask'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('tareas-paula')
    if (saved) setTasks(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('tareas-paula', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    setTasks([...tasks, { id: Date.now(), text: inputValue.trim(), completed: false }])
    setInputValue('')
  }

  const toggle = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const remove = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fdf2f8 0%, #e0e7ff 100%)',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Title />
        <Paragraph>Manos a la Obra II • Atomic Design • 100% Paula ♡</Paragraph>
        
        <FormNewTask
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSubmit={addTask}
        />
        <ListTask tasks={tasks} onToggle={toggle} onDelete={remove} />
      </div>
    </div>
  )
}

export default App