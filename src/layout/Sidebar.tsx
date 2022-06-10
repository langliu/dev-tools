import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Nav } from '@douyinfe/semi-ui'
import { IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons'
import { OnSelectedData } from '@douyinfe/semi-ui/lib/es/navigation'

const Sidebar:FC = () => {
  const navigate = useNavigate()

  const onSelect = (data: OnSelectedData) => {
    if (data.itemKey === 'html') {
      navigate('/html')
    } else if (data.itemKey === 'url') {
      navigate('/url')
    }
  }
  return (
    <Layout.Sider>
      <Nav
        defaultOpenKeys={['home']}
        style={{ maxWidth: 220, height: '100%' }}
        items={[
          { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
          { itemKey: 'Histogram', text: '基础数据', icon: <IconHistogram size="large" /> },
          { itemKey: 'Live', text: '测试功能', icon: <IconLive size="large" /> },
          { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
          {
            text: '编码/解码类型工具',
            icon: <IconSetting />,
            itemKey: 'job',
            items: [
              {
                text: 'HTML',
                itemKey: 'html'
              },
              {
                text: 'URL',
                itemKey: 'url'
              }
            ]
          }
        ]}
        onSelect={onSelect}
        onClick={data => console.log('trigger onClick: ', data)}
      />
    </Layout.Sider>
  )
}

export default Sidebar
