import React from 'react'

const TextInputNewTask = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="¿Qué tarea nueva tienes en mente?"
    style={{
      flex: 1,
      padding: '16px 20px',
      border: '2px solid #f0abfc',
      borderRadius: '16px',
      fontSize: '1.1rem',
      outline: 'none'
    }}
  />
)

export default TextInputNewTask