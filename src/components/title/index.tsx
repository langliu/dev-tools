import { FC } from 'react'
import styles from './index.module.css'

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return <h2 className={ styles.title }>{ title }</h2>
}

export default Title
