import { FC, memo, ReactNode } from 'react'

import styles from './index.module.css'

type Props = {
  children?: ReactNode
  icon?: ReactNode
  title: string
  subtitle: string
}

const Option:FC<Props> = ({ children, icon, title, subtitle }) => {
  return (
    <div className={ styles.wrapper }>
      <div className={ styles.left }>
        { icon }
        <div className={ styles['title-wrapper'] }>
          <p className={ styles.title }>{ title }</p>
          <p className={ styles.subtile }>{ subtitle }</p>
        </div>
      </div>
      <div className={ styles.left }>
        { children }
      </div>
    </div>
  )
}

export default memo(Option)
