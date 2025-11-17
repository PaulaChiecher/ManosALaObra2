import React from 'react'
import TextInputNewTask from '../Atoms/TextInputNewTask'
import Button from '../Atoms/Button'

const FormNewTask = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} style={{ display: 'flex', marginBottom: '40px' }}>
    <TextInputNewTask value={value} onChange={onChange} />
    <Button onClick={onSubmit}>Agregar ♡</Button>
  </form>
)

export default FormNewTask