import { FC, ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  icon?: ReactNode
  title: string
  description: string
}
const ToolCard: FC<Props> = ({ icon, title, description }: Props) => {
  return (
    <div className={ styles.card }>
      <div className={styles['icon-wrapper']}>
        { icon }
      </div>
      <p className={ styles.title }>{ title }</p>
      <p className={ styles.description }>{ description }</p>
    </div>
  )
}

export default ToolCard
