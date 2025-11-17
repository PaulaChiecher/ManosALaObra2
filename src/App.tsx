import { useState, useEffect } from 'react'
import './App.css'

interface Tarea {
  id: number
  texto: string
  completada: boolean
}

function App() {
  const [tareas, setTareas] = useState<Tarea[]>([])
  const [nuevoTexto, setNuevoTexto] = useState('')

  // Cargar tareas al iniciar — SIN WARNINGS —
  useEffect(() => {
    const guardadas = localStorage.getItem('tareas-paula-tp2')
    if (!guardadas) return

    try {
      const tareasGuardadas = JSON.parse(guardadas)
      if (Array.isArray(tareasGuardadas)) {
        setTimeout(() => setTareas(tareasGuardadas), 0)
      }
    } catch (e) {
      console.error('Error al leer localStorage', e)
    }
  }, [])

  // Guardar cada vez que cambien las tareas
  useEffect(() => {
    localStorage.setItem('tareas-paula-tp2', JSON.stringify(tareas))
  }, [tareas])

  const agregarTarea = (e: React.FormEvent) => {
    e.preventDefault()
    if (nuevoTexto.trim() === '') return

    const nuevaTarea: Tarea = {
      id: Date.now(),
      texto: nuevoTexto.trim(),
      completada: false
    }

    setTareas([...tareas, nuevaTarea])
    setNuevoTexto('')
  }

  const toggleCompletada = (id: number) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ))
  }

  const borrarTarea = (id: number) => {
    setTareas(tareas.filter(tarea => tarea.id !== id))
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="title">Mis Tareas - Paula ♡</h1>
        <p className="subtitle">Manos a la Obra II • 2025</p>
      </header>

      <form onSubmit={agregarTarea} className="form-agregar">
        <input
          type="text"
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
          placeholder="¿Qué tenés que hacer hoy?"
          className="input-tarea"
        />
        <button type="submit" className="btn-agregar">
          Agregar
        </button>
      </form>

      <div className="tareas-container">
        {tareas.length === 0 ? (
          <p className="mensaje-vacio">
            ¡Todavía no hay tareas! Empezá agregando una ♡
          </p>
        ) : (
          tareas.map((tarea) => (
            <div
              key={tarea.id}
              className={`tarea-item ${tarea.completada ? 'completada' : ''}`}
            >
              <label className="label-tarea">
                <input
                  type="checkbox"
                  checked={tarea.completada}
                  onChange={() => toggleCompletada(tarea.id)}
                  className="checkbox"
                />
                <span className="texto-tarea">{tarea.texto}</span>
              </label>

              <button
                onClick={() => borrarTarea(tarea.id)}
                className="btn-borrar"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App
