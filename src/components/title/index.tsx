import { FC } from 'react'

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return <h2>{title}</h2>
}

export default Title
