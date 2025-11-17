import type { FC, MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button: FC<ButtonProps> = ({ onClick, children, className, type = 'button' }) => (
  <button
    type={type}
    className={className}
    onClick={onClick}
    style={{
      padding: '16px 32px',
      background: 'linear-gradient(135deg, #f472b6, #c084fc)',
      color: 'white',
      border: 'none',
      borderRadius: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginLeft: '12px',
      boxShadow: '0 6px 20px rgba(236, 72, 153, 0.3)'
    }}
  >
    {children}
  </button>
)

export default Button