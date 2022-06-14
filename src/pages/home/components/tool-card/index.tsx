import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 30px 0;
`

const Title = styled.p`
  margin: 0 0 4px;
  font-weight: bold;
`

const Description = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.8rem;
`

type Props = {
  icon?: ReactNode
  title: string
  description: string
  url: string
}

const ToolCard: FC<Props> = ({ icon, title, description, url }: Props) => {
  const navigate = useNavigate()
  return (
    <CardWrapper onClick={ () => navigate(url) }>
      <IconWrapper>
        { icon }
      </IconWrapper>
      <Title>{ title }</Title>
      <Description>{ description }</Description>
    </CardWrapper>
  )
}

export default ToolCard
