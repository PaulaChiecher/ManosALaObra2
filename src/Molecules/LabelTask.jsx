import React from 'react'
import CheckBox from '../Atoms/checkBox'

const LabelTask = ({ checked, onChange, children }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, cursor: 'pointer' }}>
    <CheckBox checked={checked} onChange={onChange} />
    <span style={{
      fontSize: '1.2rem',
      color: checked ? '#94a3b8' : '#1e293b',
      textDecoration: checked ? 'line-through' : 'none'
    }}>
      {children}
    </span>
  </label>
)

export default LabelTask