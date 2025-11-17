import React from 'react'
import LabelTask from '../Molecules/LabelTask'

const ListItemTask = ({ task, onToggle, onDelete }) => (
  <div style={{
    background: 'white',
    padding: '18px',
    borderRadius: '20px',
    marginBottom: '14px',
    boxShadow: '0 6px 25px rgba(236, 72, 153, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
    <LabelTask checked={task.completed} onChange={() => onToggle(task.id)}>
      {task.text}
    </LabelTask>
    <button onClick={() => onDelete(task.id)} style={{
      background: 'none',
      border: 'none',
      fontSize: '1.6rem',
      cursor: 'pointer'
    }}>
      ❌
    </button>
  </div>
)

export default ListItemTask