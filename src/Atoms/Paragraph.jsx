import React from 'react'

const Paragraph = ({ children }) => (
  <p style={{
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: '1.1rem',
    marginBottom: '40px',
    fontStyle: 'italic'
  }}>
    {children}
  </p>
)

export default Paragraph