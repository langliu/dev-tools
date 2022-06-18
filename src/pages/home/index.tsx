import { FC } from 'react'
import { IconCode, IconLink } from '@douyinfe/semi-icons'
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
          icon={ <IconCode style={ { fontSize: '4rem' } } /> }
          title={ 'HTML 编码/解码工具' }
          url={ '/html' }
        />
        <ToolCard
          description={ '将所有适用的字符编码或解码为对应的 URL 输出' }
          icon={ <IconLink style={ { fontSize: '4rem' } } /> }
          title={ 'URL 编码/解码工具' }
          url={ '/url' }
        />
      </ToolCardWrapper>
    </div>
  )
}

export default HomePage
