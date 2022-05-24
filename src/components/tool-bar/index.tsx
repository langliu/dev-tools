import { FC, ReactNode } from 'react'
import styles from './index.module.css'

interface Props {
  label: string
  extra?: ReactNode
}

const ToolBar:FC<Props> = ({ label, extra }) => {
  return (
    <div className={ styles.tool }>
      <span>{ label }</span>
      <div className={ styles.btns }>
        { extra }
      </div>
    </div>
  )
}

export default ToolBar
