import React from 'react'
import ListItemTask from '../Organism/ListItemTask'

const ListTask = ({ tasks, onToggle, onDelete }) => (
  <div>
    {tasks.map(task => (
      <ListItemTask key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
    ))}
  </div>
)

export default ListTask