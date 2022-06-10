import { FC } from 'react'
import { IconTopbuzzLogo } from '@douyinfe/semi-icons'
import styled from 'styled-components'

import Title from '@/components/title'
import ToolCard from './components/tool-card/'

const ToolCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;
`

const HomePage:FC = () => {
  return (
    <div>
      <Title title='所有工具' />
      <ToolCardWrapper>
        <ToolCard
          description={ '将所有适用的字符编码或解码为对应的 HTML 输出' }
          icon={ <IconTopbuzzLogo style={ { fontSize: '4rem' } } /> }
          title={ 'HTML 编码/解码工具' }
        />
      </ToolCardWrapper>
    </div>
  )
}

export default HomePage
