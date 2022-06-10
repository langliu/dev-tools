import { FC, ReactNode } from 'react'
import styles from './index.module.css'

interface Props {
  children: ReactNode
  icon?: ReactNode
  onClick?: () => void
}

const ToolButton:FC<Props> = ({ children, icon, onClick }) => {
  return (
    <span className={ styles.btn } onClick={ onClick }>
      { icon }
      { children }
    </span>
  )
}

export default ToolButton
